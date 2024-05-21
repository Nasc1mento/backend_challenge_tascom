import { TagDTO } from "../dto/tag/tag.dto";
import { ITag } from "../models/tag/tag.model.interface";
import { TagRepository } from "../repositories/tag";
import { TaskRepository } from "../repositories/task";


export class TagService {

    private tagRepository: TagRepository;
    private taskRepository: TaskRepository;

    constructor() {
        this.tagRepository = new TagRepository;
        this.taskRepository = new TaskRepository;
    }

    async create(tag: ITag) :Promise<TagDTO> {
        return await this.tagRepository.save(tag);
    }

    async getById(id: string): Promise<TagDTO> {
        return await this.tagRepository.get(id);
    }

    async getAll(): Promise<TagDTO[]> {
        return await this.tagRepository.getAll();
    }

    async update(id: string, tag: ITag): Promise<TagDTO> {
        return await this.tagRepository.update(id, tag);
    }

    async deleteById(id: string): Promise<TagDTO> {
        this.taskRepository.removeTagFromAllTasks(id);
        return this.tagRepository.delete(id);
    }
}