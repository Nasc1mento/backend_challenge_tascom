import { ITask } from "../models/task/task.model.interface";
import { TagRepository } from "../repositories/tag";
import { TaskRepository } from "../repositories/task";


export class TaskService {
    
    private taskRepository: TaskRepository;
    private tagRepository: TagRepository;

    constructor() {
        this.taskRepository = new TaskRepository;
        this.tagRepository = new TagRepository;
    }

    async create(tag: ITask) :Promise<ITask> {
        return await this.taskRepository.save(tag);
    }

    async getById(id: string): Promise<ITask> {
        return await this.taskRepository.get(id);
    }

    async getAll(): Promise<ITask[]> {
        return await this.taskRepository.getAll();
    }

    async update(id: string, tag: ITask): Promise<ITask> {
        return await this.taskRepository.update(id, tag);
    }

    async deleteById(id: string): Promise<ITask> {
        return await this.taskRepository.delete(id);
    }

    async addTagToTask(taskId: string, tagId: string): Promise<ITask> {
        const tag = await this.tagRepository.get(tagId);
        return tag ? await this.taskRepository.addTag(taskId, tagId) : null;
    }

    async removeTagFromTask(id: string, tag: string): Promise<ITask> {
        return await this.taskRepository.removeTag(id, tag);
    }

    async getTasksByTags(tagIds: string[]): Promise<ITask[]> {
        return await this.taskRepository.getAllByTags(tagIds);
    }
}