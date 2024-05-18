import { Task } from "../../models/task";
import { ITask } from "../../models/task/task.model.interface";
import { TaskEntity } from "./task.entity";


export class TaskService {

    private model: typeof Task;

    constructor() {
        this.model = Task;
    }

    async createTask(task: ITask): Promise<ITask> {
        const newTask = new Promise<ITask>(async(resolve, reject) => {
            await this.model.create(new TaskEntity(task)).then((task) => {
                resolve(task);
            }).catch((error) => {
                reject(error);
            })
        });

        return newTask;
    }

    async getTasks(): Promise<ITask[]> {
        const tasksCollected = new Promise<ITask[]>(async(resolve, reject) => {
            await this.model.find().then((tasks) => {
                resolve(tasks);
            }).catch((error) => {
                reject(error);
            })
        });

        return tasksCollected;
    }

    async updateTask(id: string, task: ITask): Promise<ITask> {
        const updatedTask = new Promise<ITask>(async (resolve, reject) => {
            await this.model.findByIdAndUpdate(id, task, {new: true}).then((task) => {
                    resolve(task);
            }).catch((error) => {
                reject(error);
            })
        });

        return updatedTask;
    }

    async deleteTask(id: string): Promise<ITask> {
        const deletedTag = new Promise<ITask>(async(resolve, reject) => {
            this.model.findByIdAndDelete(id).then((task) => {
                resolve(task)
            }).catch((error) => {
                reject(error);
            })
        });

        return deletedTag;
    }
}