import { Tag } from "../../models/tag/tag.model";
import { ITag } from "../../models/tag/tag.model.interface";
import { IRepository } from "../repository.interface";
import { TagEntity } from "../../entities/tag.entity";


export class TagRepository implements IRepository<ITag>{

    private model: typeof Tag;

    constructor() {
        this.model = Tag;
    }

    async save(tag: ITag): Promise<ITag> {
        const newtag =  new Promise<ITag>(async(resolve, reject) => {
            await this.model.create(new TagEntity(tag))
            .then((tag) => {
                resolve(tag);
            }).catch((err) => reject(err));
        });

        return newtag;
    }

    async getAll(): Promise<ITag[]> {
        const collectedTags = new Promise<ITag[]> (async(resolve, reject) => {
            await this.model.find().then((tags) => {
                resolve(tags);
            }).catch((error) => reject(error));
        });

        return collectedTags;
    }

    async update(id: string, tag: ITag): Promise<ITag> {
        const tagUpdated = new Promise<ITag>(async(resolve, reject) => {
            await this.model.findByIdAndUpdate(id, tag, {new: true}).then((tag) => {
                resolve(tag);
            }).catch((error) => {
                reject(error);
            })
        });

        return tagUpdated;
    }

    async delete(id: string): Promise<ITag> {
        const deletedTag = new Promise<ITag> (async(resolve, reject) => {
            await this.model.findByIdAndDelete(id).then((tag) => {
                resolve(tag);
            }).catch((err) => {
                reject(err);
            })
        });

        return deletedTag;
    }

    async get(id: string): Promise<ITag> {
        const tagCollected = new Promise<ITag>(async(resolve, reject) => {
            await this.model.findById(id).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            })
        });

        return tagCollected;
    }
}