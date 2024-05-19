import {Schema, model} from 'mongoose';
import { ITag } from './tag.model.interface';

const TagSchema = new Schema<ITag>(
    {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        }
    }
)

export const Tag = model("Tag", TagSchema);