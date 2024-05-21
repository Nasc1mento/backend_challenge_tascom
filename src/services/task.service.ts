import { ITask } from "../models/task/task.model.interface";
import { TagRepository } from "../repositories/tag";
import { TaskRepository } from "../repositories/task";


export class TaskService {
    private repository: TaskRepository;
    private tagRepository: TagRepository;

    constructor() {
        this.repository = new TaskRepository;
        this.tagRepository = new TagRepository;
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
        const tag = await this.tagRepository.get(tagId);
        return tag ? await this.repository.addTag(taskId, tagId) : null;
    }

    async removeTagFromTask(id: string, tag: string): Promise<ITask> {
        return await this.repository.removeTag(id, tag);
    }

    async getTasksByTags(tagIds: string[]): Promise<ITask[]> {
        return await this.repository.getAllByTags(tagIds);
    }
}