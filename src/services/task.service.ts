import { ITask } from "../models/task/task.model.interface";
import { TaskRepository } from "../repositories/task";


export class TaskService {
    private repository: TaskRepository;

    constructor() {
        this.repository = new TaskRepository;
    }

    async create(tag: ITask) :Promise<ITask> {
        return await this.repository.save(tag);
    }

    async getById(id: string): Promise<ITask> {
        return await this.repository.get(id);
    }

    async getAll(): Promise<ITask[]> {
        return await this.repository.getAll();
    }

    async update(id: string, tag: ITask): Promise<ITask> {
        return await this.repository.update(id, tag);
    }

    async deleteById(id: string): Promise<ITask> {
        return await this.repository.delete(id);
    }

    async addTagToTask(taskId: string, tagId: string): Promise<ITask> {
        return await this.repository.addTag(taskId, tagId);
    }

    async removeTagFromTask(id: string, tag: string): Promise<ITask> {
        return await this.repository.removeTag(id, tag);
    }

    async getTasksByTags(tagIds: string[]): Promise<ITask[]> {
        return await this.repository.getAllByTags(tagIds);
    }
}