import { Request, Response, Next } from "express";

import { TagService } from "../services/tag.service";
import { TagDTO } from "../dto/tag/tag.dto";
import { CreateTagDTO, createTagDTOSchema } from "../dto/tag/create.tag.dto";
import { apiErrorHandler } from "../utils/api.error.handler";
import { UpdateTagDto, updateTagDTOSchema } from "../dto/tag/update.tag.dto";
import { HttpStatusCode } from "../errors/error";

export class TagController {

    private service: TagService;

    constructor() {
        this.service = new TagService();
    }

    async findById(req: Request, res: Response): Promise<Response<TagDTO>> {
        try {
            const userId = req.user.user._id;
            const tagId = req.params.id;
            const tag = await this.service.getById(userId, tagId);
            return res.status(HttpStatusCode.OK).json(tag); 
        } catch (error: any) {
            apiErrorHandler (error, req, res);
        }
    }

    async create(req: Request, res: Response): Promise<Response<TagDTO>> {
        try {
            const userId = req.user.user._id;
            const tag: CreateTagDTO = createTagDTOSchema.parse({...req.body, user: userId});
            const newTag: TagDTO = await this.service.create(tag);
            return res.status(HttpStatusCode.CREATED).json(newTag);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }

    async update(req: Request, res: Response): Promise<Response<TagDTO>> {
        try {
            const userId = req.user.user._id;
            const tagId = req.params.id;
            const tag: UpdateTagDto = updateTagDTOSchema.parse(req.body)
            const updatedTag: TagDTO = await this.service.update(userId, tagId, tag);
            return res.status(HttpStatusCode.OK).json(updatedTag);
        } catch(error: any) {
            apiErrorHandler(error, req, res);
        }
    }

    async deleteById(req: Request, res: Response): Promise<Response<TagDTO>> {
        try {
            const userId = req.user.user._id;
            const tagId = req.params.id;
            const deletedTag: TagDTO = await this.service.deleteById(userId, tagId);
            return res.status(HttpStatusCode.OK).json(deletedTag);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    } 
    
    async findAll(req: Request, res: Response): Promise<Response<TagDTO[]>> {
        try {
            const userId = req.user.user._id;
            const tags:TagDTO[] = await this.service.getAll(userId);
            return res.status(HttpStatusCode.OK).json(tags);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }
}