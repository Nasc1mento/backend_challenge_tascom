import {Schema, model} from 'mongoose';
import { ITask } from './task.model.interface';


export const taskSchema = new Schema<ITask>(
    {
        title: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["ongoing", "completed"],
            default: "ongoing",
        },
        priority: {
            type: Number,
            min: 1,
            max: 10,
            required: true,
        },
        description: {
            type: String,
        },
        tags: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }]
    }
)

export const Task = model<ITask>("Task", taskSchema);