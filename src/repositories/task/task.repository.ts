import { Task } from "../../models/task/task.model";
import { ITaskRepository } from "./task.repository.interface";
import { CreateTaskDTO } from "../../dto/task/create.task.dto";
import { TaskDTO } from "../../dto/task/task.dto";
import { UpdateTaskDTO } from "../../dto/task/update.task.dto";


export class TaskRepository implements ITaskRepository {

    private model: typeof Task;

    constructor() {
        this.model = Task;
    }

    async save(task: CreateTaskDTO): Promise<TaskDTO> {
        return this.model.create(task);
    }

    async getAll(userId: string): Promise<TaskDTO[]> {
        return this.model.find({user: userId});
    }

    async update(taskId: string, task: UpdateTaskDTO): Promise<TaskDTO> {
        return this.model.findByIdAndUpdate(taskId, task, {new: true});
    }

    async delete(id: string): Promise<TaskDTO> {
        return this.model.findByIdAndDelete(id);
    }

    async get(id: string): Promise<TaskDTO> {
        return this.model.findById(id);
    }

    async addTag(taskId: string, tagId: string): Promise<TaskDTO> {
        return this.model.findByIdAndUpdate(taskId, {$addToSet: {tags: tagId}}, {new: true});
    }

    async removeTag(taskId: string, tagId: string): Promise<TaskDTO> {
        return this.model.findByIdAndUpdate(taskId, {$pull: {tags: tagId}}, {new: true});
    }
    
    async getAllByTags(userId: string, tagIds: string[]): Promise<TaskDTO[]> {
        return this.model.find({user: userId, tags: {$in: tagIds}});
    }

    async removeTagFromAllTasks(tagId: string): Promise<any> {
        return this.model.updateMany({tags: tagId}, {$pull: {tags: tagId}});
    }

    async getAllTags(userId: string, taskId: string): Promise<TaskDTO> {
        return this.model.findOne({user: userId, _id: taskId}).populate("tags");
    }
}