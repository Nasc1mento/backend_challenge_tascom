import { TaskDTO } from "../../dto/task/task.dto";
import { IRepository } from "../repository.interface";

export interface ITaskRepository extends IRepository<TaskDTO> {
    addTag(taskId: string, tagId: string): Promise<TaskDTO>;
    removeTag(taskId: string, tagId: string): Promise<TaskDTO>;
    removeTagFromAllTasks(tagId: string): Promise<any>;
    getAllByTags(tagIds: string[]): Promise<TaskDTO[]>;
}