import { Request, Response } from "express";
import { TagService } from "../services/tag.service";
import { ITag } from "../models/tag/tag.model.interface";


export class TagController {

    private service: TagService;

    constructor() {
        this.service = new TagService();
    }

    async findById(req: Request, res: Response): Promise<Response<ITag>> {
        const id = req.params.id;
        const tag = await this.service.getById(id);
        return res.status(200).json(tag);  
    }

    async create(req: Request, res: Response): Promise<Response<ITag>> {
        const tag: ITag = req.body;
        const newTag = await this.service.create(tag);
        return res.status(201).json(newTag);
    }

    async update(req: Request, res: Response): Promise<Response<ITag>> {
        const tag: ITag = req.body;
        const id = req.params.id;
        const updatedTag = await this.service.update(id, tag);
        return res.status(200).json(updatedTag);
    }

    async deleteById(req: Request, res: Response): Promise<Response<ITag>> {
        const id = req.params.id;
        const deletedTag = await this.service.deleteById(id);
        return res.status(200).json(deletedTag);
    } 
    
    async findAll(req: Request, res: Response): Promise<Response<ITag>> {
        const tags = await this.service.getAllT();
        return res.status(200).json(tags);
    }
}