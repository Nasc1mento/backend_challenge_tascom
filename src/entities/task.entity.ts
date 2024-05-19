import { ITask } from "../models/task/task.model.interface";

type TaskProps = Pick<ITask, "title" | "status" | "priority" | "description" | "tags">;

export class TaskEntity {
    id: string;
    title: string;
    priority: number;
    description: string;
    tags: string[];
    constructor(props: TaskProps) {
        Object.assign(this, props);
    }
}