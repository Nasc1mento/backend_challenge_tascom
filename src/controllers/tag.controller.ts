import { Request, Response, Next } from "express";
import { TagService } from "../services/tag.service";
import { TagDTO } from "../dto/tag/tag.dto";
import { CreateTagDTO, createTagDTO } from "../dto/tag/create.tag.dto";
import { apiErrorHandler } from "../utils/api.error.handler";

export class TagController {

    private service: TagService;

    constructor() {
        this.service = new TagService();
    }

    async findById(req: Request, res: Response): Promise<Response<TagDTO>> {
        try {
            const id = req.params.id;
            const tag = await this.service.getById(id);
            return res.status(200).json(tag); 
        } catch (error: any) {
            apiErrorHandler (error, req, res, "Fetch Tag Failed");
        }
    }

    async create(req: Request, res: Response): Promise<Response<TagDTO>> {
        try {
            const tag: CreateTagDTO = createTagDTO.parse(req.body);
            const newTag: TagDTO = await this.service.create(tag);
            return res.status(200).json(newTag);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Create Tag Failed");
        }
    }

    async update(req: Request, res: Response): Promise<Response<TagDTO>> {
        try {
            const tag: TagDTO = req.body;
            const id = req.params.id;
            const updatedTag: TagDTO = await this.service.update(id, tag);
            return res.status(200).json(updatedTag);
        } catch(error: any) {
            apiErrorHandler(error, req, res, "Update Tag Failed");
        }
    }

    async deleteById(req: Request, res: Response): Promise<Response<TagDTO>> {
        try {
            const id = req.params.id;
            const deletedTag: TagDTO = await this.service.deleteById(id);
            return res.status(200).json(deletedTag);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Delete Tag Failed");
        }
    } 
    
    async findAll(req: Request, res: Response): Promise<Response<TagDTO[]>> {
        try {
            const tags:TagDTO[] = await this.service.getAll();
            return res.status(200).json(tags);
        } catch (error: any) {
            apiErrorHandler(error, req, res, "Fetch Tags Failed");
        }
    }
}