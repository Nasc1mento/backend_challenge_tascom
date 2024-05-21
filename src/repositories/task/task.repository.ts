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
        const newTask = new Promise<ITask>(async(resolve, reject) => {
            await this.model.create(new TaskEntity(task)).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            });
        });
        return newTask;
    }

    async getAll(): Promise<ITask[]> {
        const tasksCollected = new Promise<ITask[]>(async(resolve, reject) => {
            await this.model.find().then((tasks) => {
                resolve(tasks);
            }).catch((error) => {
                reject(error);
            });
        });
        return tasksCollected;
    }

    async update(id: string, task: ITask): Promise<ITask> {
        const updatedTask = new Promise<ITask>(async (resolve, reject) => {
            await this.model.findByIdAndUpdate(id, task, {new: true}).then((task) => {
                    resolve(task);
            }).catch((error) => {
                reject(error);
            });
        });

        return updatedTask;
    }

    async delete(id: string): Promise<ITask> {
        const deletedTag = new Promise<ITask>(async(resolve, reject) => {
            this.model.findByIdAndDelete(id).then((task) => {
                resolve(task)
            }).catch((error) => {
                reject(error);
            })
        });

        return deletedTag;
    }

    async get(id: string): Promise<ITask> {
        const taskCollected = new Promise<ITask>(async(resolve, reject) => {
            await this.model.findById(id).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            });
        });

        return taskCollected;
    }

    async addTag(taskId: string, tagId: string): Promise<ITask> {
        const task = new Promise<ITask>(async(resolve, reject) => {
            await this.model.findByIdAndUpdate(taskId, {$addToSet: {tags: tagId}}, {new: true}).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            })
        });
        return task;
    }

    async removeTag(taskId: string, tagId: string): Promise<ITask> {
        const task = new Promise<ITask>(async(resolve, reject) => {
            await this.model.findByIdAndUpdate(taskId, {$pull: {tags: tagId}}, {new: true}).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            });
        });
        return task;
    }
    
    async getAllByTags(tagIds: string[]): Promise<ITask[]> {
        const tasks = new Promise<ITask[]>(async(resolve, reject) => {
            await this.model.find({tags: {$in: tagIds}}).then((tasks) => {
                resolve(tasks);
            }).catch((error) => {
                reject(error);
            });
        });
        return tasks;
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