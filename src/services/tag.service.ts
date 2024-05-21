import { ITag } from "../models/tag/tag.model.interface";
import { TagRepository } from "../repositories/tag";
import { TaskRepository } from "../repositories/task";



export class TagService {

    private repository: TagRepository;
    private taskRepository: TaskRepository;

    constructor() {
        this.repository = new TagRepository;
        this.taskRepository = new TaskRepository;
    }

    async create(tag: ITag) :Promise<ITag> {
        return await this.repository.save(tag);
    }

    async getById(id: string): Promise<ITag> {
        return await this.repository.get(id);
    }

    async getAll(): Promise<ITag[]> {
        return await this.repository.getAll();
    }

    async update(id: string, tag: ITag): Promise<ITag> {
        return await this.repository.update(id, tag);
    }

    async deleteById(id: string): Promise<ITag> {
        this.taskRepository.removeTagFromAllTasks(id);
        return this.repository.delete(id);
    }
}