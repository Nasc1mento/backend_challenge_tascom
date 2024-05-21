import { CreateTaskDTO } from "../dto/task/create.task.dto";
import { TaskDTO } from "../dto/task/task.dto";
import { UpdateTaskDTO } from "../dto/task/update.task.dto";
import { TaskService } from "../services/task.service"
import { Request, Response } from "express";

export class TaskController {

    private service: TaskService;

    constructor() {
        this.service = new TaskService();
    }

    async findById( req: Request, res: Response) : Promise<Response<TaskDTO>> {
        const id = req.params.id;
        const task = await this.service.getById(id);
        return res.status(200).json(task);
    }
    
    async create( req: Request, res: Response) : Promise<Response<TaskDTO>> {
        const task: CreateTaskDTO = req.body;
        const newTask = await this.service.create(task);
        return res.status(201).json(newTask);
    }

    async update( req: Request, res: Response) : Promise<Response<TaskDTO>> {
        const task: UpdateTaskDTO = req.body;
        const id = req.params.id;
        const updatedTask = await this.service.update(id, task);
        return res.status(200).json(updatedTask);
    }

    async delete( req: Request, res: Response) : Promise<Response<TaskDTO>> {
        const id = req.params.id;
        const deletedTask = await this.service.deleteById(id);
        return res.status(200).json(deletedTask);
    }

    async findAll( req: Request, res: Response) : Promise<Response<TaskDTO[]>> {
        const tasks:TaskDTO[]  = await this.service.getAll();
        return res.status(200).json(tasks);
    }

    async addTagsToTask( req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const taskId: string = req.params.taskId;
            const tagId: string = req.params.tagId;
            const task: TaskDTO = await this.service.addTagToTask(taskId, tagId);
            return res.status(200).json(task);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async removeTagFromTask( req: Request, res: Response) : Promise<Response<TaskDTO>> {
        const taskId = req.params.taskId;
        const tagId = req.params.tagId;
        const task: TaskDTO = await this.service.removeTagFromTask(taskId, tagId);
        return res.status(200).json(task);
    }

    async getTasksByTags( req: Request, res: Response) : Promise<Response<TaskDTO>> {
        const tags = req.params.tagIds.split(",");
        const tasks: TaskDTO[] = await this.service.getTasksByTags(tags);
        return res.status(200).json(tasks);
    }
}