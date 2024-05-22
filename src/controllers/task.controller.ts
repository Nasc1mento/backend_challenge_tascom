import { CreateTaskDTO } from "../dto/task/create.task.dto";
import { TaskDTO } from "../dto/task/task.dto";
import { UpdateTaskDTO } from "../dto/task/update.task.dto";
import { apiErrorHandler } from "../utils/api.error.handler";
import { TaskService } from "../services/task.service"
import { Request, Response } from "express";

export class TaskController {

    private service: TaskService;

    constructor() {
        this.service = new TaskService();
    }

    async findById(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const id = req.params.id;
            const task: TaskDTO = await this.service.getById(id);
            return res.status(200).json(task);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Fetching task failed");
        }
    }
    
    async create(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const task: CreateTaskDTO = req.body;
            const newTask: TaskDTO = await this.service.create(task);
            return res.status(200).json(newTask);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Creating task failed");
        }
    }

    async update(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const task: UpdateTaskDTO = req.body;
            const id = req.params.id;
            const updatedTask = await this.service.update(id, task);
            return res.status(200).json(updatedTask);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Updating task failed");
        }
    }

    async delete(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const id = req.params.id;
            const deletedTask = await this.service.deleteById(id);
            return res.status(200).json(deletedTask);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Deleting task failed");
        }
    }

    async findAll(req: Request, res: Response) : Promise<Response<TaskDTO[]>> {
        try {
            const tasks:TaskDTO[]  = await this.service.getAll();
            return res.status(200).json(tasks);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Fetching tasks failed");
        }
    }

    async addTagsToTask(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const taskId: string = req.params.taskId;
            const tagId: string = req.params.tagId;
            const task: TaskDTO = await this.service.addTagToTask(taskId, tagId);
            return res.status(200).json(task);
        } catch (error) {
            apiErrorHandler(error, req, res, "Adding tag to task failed");
        }
    }

    async removeTagFromTask(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const taskId = req.params.taskId;
            const tagId = req.params.tagId;
            const task: TaskDTO = await this.service.removeTagFromTask(taskId, tagId);
            return res.status(200).json(task);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Removing tag from task failed");
        }
    }

    async getTasksByTags(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const tags = req.params.tagIds.split(",");
            const tasks: TaskDTO[] = await this.service.getTasksByTags(tags);
            return res.status(200).json(tasks);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Fetching tasks by tags failed");
        }
    }

    async getTagsFromTask(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const taskId = req.params.id;
            const task: TaskDTO = await this.service.getTagsByTask(taskId);
            return res.status(200).json(task.tags);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Fetching tags from task failed");
        }
    }
}