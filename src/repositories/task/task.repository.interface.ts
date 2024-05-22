import { TaskDTO } from "../../dto/task/task.dto";
import { IRepository } from "../repository.interface";

export interface ITaskRepository extends IRepository<TaskDTO> {
    addTag(taskId: string, tagId: string): Promise<TaskDTO>;
    removeTag(taskId: string, tagId: string): Promise<TaskDTO>;
    removeTagFromAllTasks(tagId: string): Promise<any>;
    getAllByTags(userId: string, tagIds: string[]): Promise<TaskDTO[]>;
    getAllTags(userId: string, tagId: string): Promise<TaskDTO>;
}