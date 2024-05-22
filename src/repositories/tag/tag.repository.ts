import { CreateTagDTO } from "../../dto/tag/create.tag.dto";
import { TagDTO } from "../../dto/tag/tag.dto";
import { UpdateTagDto } from "../../dto/tag/update.tag.dto";
import { TaskDTO } from "../../dto/task/task.dto";
import { Tag } from "../../models/tag/tag.model";
import { ITagRepository } from "./tag.repository.interface";


export class TagRepository implements ITagRepository {
    
    private model: typeof Tag;

    constructor() {
        this.model = Tag;
    }

    async save(tag: CreateTagDTO): Promise<TagDTO> {
        return this.model.create(tag);
    }

    async getAll(userId: string): Promise<TagDTO[]> {
        return this.model.find({user: userId});
    }

    async update(tagId: string, tag: UpdateTagDto): Promise<TagDTO> {
        return this.model.findByIdAndUpdate(tagId, tag, {new: true});
    }

    async delete(id: string): Promise<TagDTO> {
        return this.model.findByIdAndDelete(id);
    }

    async get(id: string): Promise<TagDTO> {
        return this.model.findById(id);
    }
}