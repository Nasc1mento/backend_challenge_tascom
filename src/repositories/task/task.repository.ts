import { Task } from "../../models/task/task.model";
import { ITask } from "../../models/task/task.model.interface";
import { TaskEntity } from "../../entities/task.entity";
import { ITaskRepository } from "./task.repository.interface";


export class TaskRepository implements ITaskRepository {

    private model: typeof Task;

    constructor() {
        this.model = Task;
    }

    async save(task: ITask): Promise<ITask> {
        return new Promise<ITask>(async(resolve, reject) => {
            await this.model.create(new TaskEntity(task)).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    async getAll(): Promise<ITask[]> {
        return new Promise<ITask[]>(async(resolve, reject) => {
            await this.model.find().then((tasks) => {
                resolve(tasks);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    async update(id: string, task: ITask): Promise<ITask> {
        return new Promise<ITask>(async (resolve, reject) => {
            await this.model.findByIdAndUpdate(id, task, {new: true}).then((task) => {
                    resolve(task);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    async delete(id: string): Promise<ITask> {
        return new Promise<ITask>(async(resolve, reject) => {
            this.model.findByIdAndDelete(id).then((task) => {
                resolve(task)
            }).catch((error) => {
                reject(error);
            })
        });
    }

    async get(id: string): Promise<ITask> {
        return new Promise<ITask>(async(resolve, reject) => {
            await this.model.findById(id).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    async addTag(taskId: string, tagId: string): Promise<ITask> {
        return new Promise<ITask>(async(resolve, reject) => {
            await this.model.findByIdAndUpdate(taskId, {$addToSet: {tags: tagId}}, {new: true}).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            })
        });
    }

    async removeTag(taskId: string, tagId: string): Promise<ITask> {
        return new Promise<ITask>(async(resolve, reject) => {
            await this.model.findByIdAndUpdate(taskId, {$pull: {tags: tagId}}, {new: true}).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    
    async getAllByTags(tagIds: string[]): Promise<ITask[]> {
        return new Promise<ITask[]>(async(resolve, reject) => {
            await this.model.find({tags: {$in: tagIds}}).then((tasks) => {
                resolve(tasks);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    async removeTagFromAllTasks(tagId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.model.updateMany({tags: tagId}, {$pull: {tags: tagId}}).then((tasks) => {
                resolve(tasks);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}