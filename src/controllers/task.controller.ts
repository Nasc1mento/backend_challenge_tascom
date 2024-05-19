import { ITask } from "../models/task/task.model.interface";
import { TaskService } from "../services/task.service"
import { Request, Response } from "express";

export class TaskController {

    private service: TaskService;

    constructor() {
        this.service = new TaskService();
    }

    async findById( req: Request, res: Response) : Promise<void> {
        const id = req.params.id;
        const task = await this.service.getById(id);
        res.status(200).json(task);
    }
    
    async create( req: Request, res: Response) : Promise<void> {
        const task: ITask = req.body;
        const newTask = await this.service.create(task);
        console.log(newTask);
        res.status(201).json(newTask);
    }

    async update( req: Request, res: Response) : Promise<void> {
        const task: ITask = req.body;
        const id = req.params.id;
        const updatedTask = await this.service.update(id, task);
        res.status(200).json(updatedTask);
    }

    async delete( req: Request, res: Response) : Promise<void> {
        const id = req.params.id;
        const deletedTask = await this.service.deleteById(id);
        res.status(200).json(deletedTask);
    }

    async findAll( req: Request, res: Response) : Promise<void> {
        const tasks = await this.service.getAll();
        res.status(200).json(tasks);
    }
}