import { ITag } from "../models/tag/tag.model.interface";
import { TagRepository } from "../repository/tag/tag.repository";



export class TagService {

    private repository: TagRepository;

    constructor() {
        this.repository = new TagRepository;
    }

    createTask(tag: ITag) :Promise<ITag> {
        return this.repository.save(tag);
    }

    getTaskById(id: string): Promise<ITag> {
        return this.repository.get(id);
    }

    getAllTasks(): Promise<ITag[]> {
        return this.repository.getAll();
    }

    updateTask(id: string, tag): Promise<ITag> {
        return this.repository.update(id, tag);
    }

    deleteById(id: string): Promise<ITag> {
        return this.repository.delete(id);
    }
}