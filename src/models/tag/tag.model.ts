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
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    }
)

export const Tag = model("Tag", TagSchema);