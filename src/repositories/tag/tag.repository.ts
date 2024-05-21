import { Tag } from "../../models/tag/tag.model";
import { ITag } from "../../models/tag/tag.model.interface";
import { TagEntity } from "../../entities/tag.entity";
import { ITagRepository } from "./tag.repository.interface";


export class TagRepository implements ITagRepository {
    private model: typeof Tag;

    constructor() {
        this.model = Tag;
    }

    async save(tag: ITag): Promise<ITag> {
        return new Promise<ITag>(async(resolve, reject) => {
            await this.model.create(new TagEntity(tag))
            .then((tag) => {
                resolve(tag);
            }).catch((err) => reject(err));
        });
    }

    async getAll(): Promise<ITag[]> {
        return new Promise<ITag[]>(async(resolve, reject) => {
            await this.model.find().then((tags) => {
                resolve(tags);
            }).catch((error) => reject(error));
        });
    }

    async update(id: string, tag: ITag): Promise<ITag> {
        return new Promise<ITag>(async(resolve, reject) => {
            await this.model.findByIdAndUpdate(id, tag, {new: true}).then((tag) => {
                resolve(tag);
            }).catch((error) => {
                reject(error);
            })
        });
    }

    async delete(id: string): Promise<ITag> {
        return new Promise<ITag>(async(resolve, reject) => {
            await this.model.findByIdAndDelete(id).then((tag) => {
                resolve(tag);
            }).catch((err) => {
                reject(err);
            })
        });
    }

    async get(id: string): Promise<ITag> {
        return new Promise<ITag>(async(resolve, reject) => {
            await this.model.findById(id).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            })
        });
    }
}