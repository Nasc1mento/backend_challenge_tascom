import { ITask } from "../../models/task/task.model.interface";
import { IRepository } from "../repository.interface";

export interface ITaskRepository extends IRepository<ITask> {
    addTag(taskId: string, tagId: string): Promise<ITask>;
    removeTag(taskId: string, tagId: string): Promise<ITask>;
    removeTagFromAllTasks(tagId: string): Promise<any>;
    getAllByTags(tagIds: string[]): Promise<ITask[]>;
}