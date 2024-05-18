import { Task } from "../../models/task";
import { ITaskCreateDto, ITaskDto, ITaskUpdateDto } from "./task.service.dto";


export class TaskService {

    private model: typeof Task;

    constructor() {
        this.model = Task;
    }

    async createTask(task: ITaskCreateDto): Promise<ITaskDto> {
        return;
    }

    async getTasks(): Promise<ITaskDto[]> {
        return;
    }

    async updateTask(id: string, task: ITaskUpdateDto): Promise<ITaskDto> {
        return;
    }

    async deleteTask(id: string): Promise<ITaskDto> {
        return;
    }
}