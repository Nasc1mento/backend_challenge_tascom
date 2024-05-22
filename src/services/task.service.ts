import { CreateTaskDTO } from "../dto/task/create.task.dto";
import { TaskDTO } from "../dto/task/task.dto";
import { UpdateTaskDTO } from "../dto/task/update.task.dto";
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

    async getById(id: string): Promise<TaskDTO> {
        return await this.taskRepository.get(id);
    }

    async getAll(): Promise<TaskDTO[]> {
        return await this.taskRepository.getAll();
    }

    async update(id: string, tag: UpdateTaskDTO): Promise<TaskDTO> {
        return await this.taskRepository.update(id, tag);
    }

    async deleteById(id: string): Promise<TaskDTO> {
        return await this.taskRepository.delete(id);
    }

    async addTagToTask(taskId: string, tagId: string): Promise<TaskDTO> {
        const tag = await this.tagRepository.get(tagId);
        
        if (!tag) {
            throw new Error("Tag not found");
        }
        
        return await this.taskRepository.addTag(taskId, tagId);
    }

    async removeTagFromTask(id: string, tag: string): Promise<TaskDTO> {
        return await this.taskRepository.removeTag(id, tag);
    }

    async getTasksByTags(tagIds: string[]): Promise<TaskDTO[]> {
        return await this.taskRepository.getAllByTags(tagIds);
    }

    async getTagsByTask(taskId: string): Promise<TaskDTO> {
        return await this.taskRepository.getAllTags(taskId);
    }
}