import { CreateTagDTO } from "../../dto/tag/create.tag.dto";
import { UpdateTagDto } from "../../dto/tag/update.tag.dto";
import { TaskDTO } from "../../dto/task/task.dto";
import { Tag } from "../../models/tag/tag.model";
import { ITagRepository } from "./tag.repository.interface";


export class TagRepository implements ITagRepository {
    
    private model: typeof Tag;

    constructor() {
        this.model = Tag;
    }

    async save(tag: CreateTagDTO): Promise<TaskDTO> {
        return new Promise<TaskDTO>(async(resolve, reject) => {
            await this.model.create(tag)
            .then((tag) => {
                resolve(tag);
            }).catch((err) => reject(err));
        });
    }

    async getAll(): Promise<TaskDTO[]> {
        return new Promise<TaskDTO[]>(async(resolve, reject) => {
            await this.model.find().then((tags) => {
                resolve(tags);
            }).catch((error) => reject(error));
        });
    }

    async update(id: string, tag: UpdateTagDto): Promise<TaskDTO> {
        return new Promise<TaskDTO>(async(resolve, reject) => {
            await this.model.findByIdAndUpdate(id, tag, {new: true}).then((tag) => {
                resolve(tag);
            }).catch((error) => {
                reject(error);
            })
        });
    }

    async delete(id: string): Promise<TaskDTO> {
        return new Promise<TaskDTO>(async(resolve, reject) => {
            await this.model.findByIdAndDelete(id).then((tag) => {
                resolve(tag);
            }).catch((err) => {
                reject(err);
            })
        });
    }

    async get(id: string): Promise<TaskDTO> {
        return new Promise<TaskDTO>(async(resolve, reject) => {
            await this.model.findById(id).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            })
        });
    }
}