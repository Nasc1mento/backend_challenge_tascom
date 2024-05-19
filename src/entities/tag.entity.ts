import { ITag } from "../models/tag/tag.model.interface";

type TagProps = Pick<ITag, "name" | "color">;

export class TagEntity {
    id: string;
    name: string;
    color: string;
    
    constructor(props: TagProps) {
        Object.assign(this, props);
    }
}