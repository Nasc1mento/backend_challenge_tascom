import { Tag } from "../../models/tag";
import { ITag } from "../../models/tag/tag.model.interface";
import { TagEntity } from "./tag.entity";


export class TagService {

    private model: typeof Tag;

    constructor() {
        this.model = Tag;
    }

    async createTag(tag: ITag): Promise<ITag> {
        const newtag =  new Promise<ITag>(async(resolve, reject) => {
            await this.model.create(new TagEntity(tag))
            .then((tag) => {
                resolve(tag);
            }).catch((err) => reject(err));
        });

        return newtag;
    }

    async getTags(): Promise<ITag[]> {
        const collectedTags = new Promise<ITag[]> (async(resolve, reject) => {
            await this.model.find().then((tags) => {
                resolve(tags);
            }).catch((error) => reject(error));
        });

        return collectedTags;
    }

    async updateTag(id: string, tag: ITag): Promise<ITag> {
        const tagUpdated = new Promise<ITag>(async(resolve, reject) => {
            await this.model.findByIdAndUpdate(id, tag, {new: true}).then((tag) => {
                resolve(tag);
            }).catch((error) => {
                reject(error);
            })
        });

        return tagUpdated;
    }

    async deleteTag(id: string): Promise<ITag> {
        const deletedTag = new Promise<ITag> (async(resolve, reject) => {
            await this.model.findByIdAndDelete(id).then((tag) => {
                resolve(tag);
            }).catch((err) => {
                reject(err);
            })
        });

        return deletedTag;
    }
}