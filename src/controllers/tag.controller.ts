import { Request, Response } from "express";
import { TagService } from "../services/tag.service";
import { ITag } from "../models/tag/tag.model.interface";

export class TagController {

    private service: TagService;

    constructor() {
        this.service = new TagService();
    }

    async findById(req: Request, res: Response): Promise<Response<ITag>> {
        try {
            const id = req.params.id;
            const tag = await this.service.getById(id);
            return res.status(200).json(tag); 
        } catch (error: any) {
            return res.status(404).json({message: error.message});
        }
    }

    async create(req: Request, res: Response): Promise<Response<ITag>> {
        try {
            const tag: ITag = req.body;
            const newTag = await this.service.create(tag);
            return res.status(201).json(newTag);
        } catch (error: any) {
            return res.status(400).json({message: error.message});
        }
    }

    async update(req: Request, res: Response): Promise<Response<ITag>> {
        try {
            const tag: ITag = req.body;
            const id = req.params.id;
            const updatedTag = await this.service.update(id, tag);
            return res.status(200).json(updatedTag);
        } catch(error: any) {
            return res.status(400).json({message: error.message});
        }
    }

    async deleteById(req: Request, res: Response): Promise<Response<ITag>> {
        try {
            const id = req.params.id;
            const deletedTag = await this.service.deleteById(id);
            return res.status(200).json(deletedTag);
        } catch (error: any) {
            return res.status(400).json({message: error.message});
        }
    } 
    
    async findAll(req: Request, res: Response): Promise<Response<ITag>> {
        try {
            const tags = await this.service.getAll();
            return res.status(200).json(tags);
        } catch (error: any) {
            return res.status(400).json({message: error.message});
        }
    }
}