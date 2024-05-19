import { TaskRepository } from "../repository/task/task.repository";


export class TaskService {
    private repository: TaskRepository;

    constructor() {
        this.repository = new TaskRepository;
    }

    createTask(tag: ITag) :Promise<ITag> {
        return this.repository.save(tag);
    }

    getTaskById(id: string): Promise<ITag> {
        return this.repository.get(id);
    }

    getAllTasks(): Promise<ITag[]> {
        return this.repository.getAll();
    }

    updateTask(id: string, tag): Promise<ITag> {
        return this.repository.update(id, tag);
    }

    deleteById(id: string): Promise<ITag> {
        return this.repository.delete(id);
    }
}