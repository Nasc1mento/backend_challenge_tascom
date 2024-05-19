import { ITask } from "../models/task/task.model.interface";
import { TaskRepository } from "../repository/task/task.repository";


export class TaskService {
    private repository: TaskRepository;

    constructor() {
        this.repository = new TaskRepository;
    }

    create(tag: ITask) :Promise<ITask> {
        return this.repository.save(tag);
    }

    getById(id: string): Promise<ITask> {
        return this.repository.get(id);
    }

    getAll(): Promise<ITask[]> {
        return this.repository.getAll();
    }

    update(id: string, tag): Promise<ITask> {
        return this.repository.update(id, tag);
    }

    deleteById(id: string): Promise<ITask> {
        return this.repository.delete(id);
    }
}