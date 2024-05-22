import { Request, Response } from "express";

import { CreateTaskDTO, createTaskDTOSchema } from "../dto/task/create.task.dto";
import { TaskDTO } from "../dto/task/task.dto";
import { UpdateTaskDTO, updateTaskDTOSchema } from "../dto/task/update.task.dto";
import { apiErrorHandler } from "../utils/api.error.handler";
import { TaskService } from "../services/task.service"
import { HttpStatusCode } from "../errors/error";

export class TaskController {

    private service: TaskService;

    constructor() {
        this.service = new TaskService();
    }

    async findById(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const id = req.params.id;
            const userId = req.user.payload._id;
            const task: TaskDTO = await this.service.getById(userId, id);
            return res.status(HttpStatusCode.OK).json(task);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }
    
    async create(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const body = {...req.body, user: req.user.payload._id}
            const task: CreateTaskDTO = createTaskDTOSchema.parse(body);
            const newTask: TaskDTO = await this.service.create(task);
            return res.status(HttpStatusCode.CREATED).json(newTask);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }

    async update(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const taskId = req.params.id;
            const userId = req.user.payload._id;
            const task: UpdateTaskDTO = updateTaskDTOSchema.parse(req.body);
            const updatedTask = await this.service.update(userId, taskId, task);
            return res.status(HttpStatusCode.OK).json(updatedTask);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }

    async delete(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const taskId = req.params.id;
            const userId = req.user.payload._id;
            const deletedTask: TaskDTO = await this.service.deleteById(userId, taskId);
            return res.status(HttpStatusCode.OK).json(deletedTask);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }

    async findAll(req: Request, res: Response) : Promise<Response<TaskDTO[]>> {
        try {
            const id: string = req.user.payload._id;
            const tasks:TaskDTO[]  = await this.service.getAll(id);
            return res.status(HttpStatusCode.OK).json(tasks);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }

    async addTagsToTask(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const taskId: string = req.params.taskId;
            const tagId: string = req.params.tagId;
            const userId: string = req.user.payload._id;
            const task: TaskDTO = await this.service.addTagToTask(userId, taskId, tagId);
            return res.status(HttpStatusCode.OK).json(task);
        } catch (error) {
            apiErrorHandler(error, req, res);
        }
    }

    async removeTagFromTask(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const taskId = req.params.taskId;
            const tagId = req.params.tagId;
            const userId = req.user.payload._id;
            const task: TaskDTO = await this.service.removeTagFromTask(userId, tagId, taskId);
            return res.status(HttpStatusCode.OK).json(task);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }

    async getTasksByTags(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const tagIds = req.params.tagIds.split(",");
            const userId = req.user.payload._id;
            const tasks: TaskDTO[] = await this.service.getTasksByTags(userId, tagIds);
            return res.status(HttpStatusCode.OK).json(tasks);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }

    async getTagsFromTask(req: Request, res: Response) : Promise<Response<TaskDTO>> {
        try {
            const taskId = req.params.id;
            const userId = req.user.payload._id;
            const task: TaskDTO = await this.service.getTagsByTask(userId, taskId);
            return res.status(HttpStatusCode.OK).json(task.tags);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }
}