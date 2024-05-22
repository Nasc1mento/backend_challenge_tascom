import { CreateTaskDTO } from "../dto/task/create.task.dto";
import { TaskDTO } from "../dto/task/task.dto";
import { UpdateTaskDTO } from "../dto/task/update.task.dto";
import { ApiError } from "../errors/api.error";
import { HttpStatusCode } from "../errors/error";
import { TagRepository } from "../repositories/tag";
import { TaskRepository } from "../repositories/task";


export class TaskService {

    private taskRepository: TaskRepository;
    private tagRepository: TagRepository;

    constructor() {
        this.taskRepository = new TaskRepository;
        this.tagRepository = new TagRepository;
    }

    async create(tag: CreateTaskDTO) :Promise<TaskDTO> {
        return await this.taskRepository.save(tag);
    }

    async getById(userId: string, id: string): Promise<TaskDTO> {
        const task = await this.taskRepository.get(id);
        if (!task) {
            throw new ApiError(
                "Task not found",
                HttpStatusCode.NOT_FOUND, 
                `Task with id ${id} not found`
            );
        }

        if (task.user != userId) {
            throw new ApiError(
                "Unauthorized",
                HttpStatusCode.UNAUTHORIZED,
                "You are not authorized to access this resource"
            );
        }

        return task;
    }

    async getAll(userId: string): Promise<TaskDTO[]> {
        return await this.taskRepository.getAll(userId);
    }

    async update(userId: string, taskId: string, task: UpdateTaskDTO): Promise<TaskDTO> {
        const taskToUpdate = await this.taskRepository.get(taskId);

        if (!taskToUpdate) {
            throw new ApiError(
                "Task not found",
                HttpStatusCode.NOT_FOUND,
                `Task with id ${taskId} not found`
            );
        }

        if (taskToUpdate.user != userId) {
            throw new ApiError(
                "Unauthorized",
                HttpStatusCode.UNAUTHORIZED,
                "You are not authorized to access this resource"
            );
        }

        return await this.taskRepository.update(taskId, task);
    }

    async deleteById(userId:string, id: string): Promise<TaskDTO> {
        const task = await this.taskRepository.get(id);

        if (!task) {
            throw new ApiError(
                "Task not found",
                HttpStatusCode.NOT_FOUND,
                `Task with id ${id} not found`
            );
        }

        if (task.user != userId) {
            throw new ApiError(
                "Unauthorized",
                HttpStatusCode.UNAUTHORIZED,
                "You are not authorized to access this resource"
            );
        }

        return await this.taskRepository.delete(id);
    }

    async addTagToTask(userId: string, taskId: string, tagId: string): Promise<TaskDTO> {
        const tag = await this.tagRepository.get(tagId);
        
        if (!tag) {
            throw new ApiError(
                "Tag not found",
                HttpStatusCode.NOT_FOUND, 
                `Tag with id ${tagId} not found`
            );
        }

        const task = await this.taskRepository.get(taskId);

        if (!task) {
            throw new ApiError(
                "Task not found",
                HttpStatusCode.NOT_FOUND,
                `Task with id ${taskId} not found`
            );
        }

        if (task.user != userId) {
            throw new ApiError(
                "Unauthorized",
                HttpStatusCode.UNAUTHORIZED,
                "You are not authorized to access this resource"
            );
        }
        
        return await this.taskRepository.addTag(taskId, tagId);
    }

    async removeTagFromTask(userId:string, tagId: string, taskId: string): Promise<TaskDTO> {
        const tag = await this.tagRepository.get(tagId);

        if (!tag) {
            throw new ApiError(
                "Tag not found",
                HttpStatusCode.NOT_FOUND,
                `Tag with id ${tagId} not found`
            );
        }

        const task = await this.taskRepository.get(taskId);

        if (!task) {
            throw new ApiError(
                "Task not found",
                HttpStatusCode.NOT_FOUND,
                `Task with id ${taskId} not found`
            );
        }

        if (task.user != userId) {
            throw new ApiError(
                "Unauthorized",
                HttpStatusCode.UNAUTHORIZED,
                "You are not authorized to access this resource"
            );
        }

        return await this.taskRepository.removeTag(taskId, tagId);
    }

    async getTasksByTags(userId: string, tagIds: string[]): Promise<TaskDTO[]> {
        return await this.taskRepository.getAllByTags(userId, tagIds);
    }

    async getTagsByTask(userId: string, taskId: string): Promise<TaskDTO> {
        return await this.taskRepository.getAllTags(userId, taskId);
    }
}