import { ITag } from "../models/tag/tag.model.interface";
import { TagRepository } from "../repository/tag/tag.repository";



export class TagService {

    private repository: TagRepository;

    constructor() {
        this.repository = new TagRepository;
    }

    async create(tag: ITag) :Promise<ITag> {
        return this.repository.save(tag);
    }

    getById(id: string): Promise<ITag> {
        return this.repository.get(id);
    }

    getAllT(): Promise<ITag[]> {
        return this.repository.getAll();
    }

    update(id: string, tag): Promise<ITag> {
        return this.repository.update(id, tag);
    }

    deleteById(id: string): Promise<ITag> {
        return this.repository.delete(id);
    }
}