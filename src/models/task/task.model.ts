import {Schema, model} from "mongoose";
import { ITask } from "../../models/task/task.model.interface";

export const taskSchema = new Schema <ITask>(
    {
        title: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["ongoing", "completed"],
            default: "ongoing",
            required: true,
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
        tags: [
            {
                type: Schema.Types.ObjectId,
                ref: "Tag",
            }
        ],
        user:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    })

export const Task = model("Task", taskSchema);