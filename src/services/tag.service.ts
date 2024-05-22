import { CreateTagDTO } from "../dto/tag/create.tag.dto";
import { TagDTO } from "../dto/tag/tag.dto";
import { UpdateTagDto } from "../dto/tag/update.tag.dto";
import { ApiError } from "../errors/api.error";
import { HttpStatusCode } from "../errors/error";
import { TagRepository } from "../repositories/tag";
import { TaskRepository } from "../repositories/task";


export class TagService {

    private tagRepository: TagRepository;
    private taskRepository: TaskRepository;

    constructor() {
        this.tagRepository = new TagRepository;
        this.taskRepository = new TaskRepository;
    }

    async create(tag: CreateTagDTO) :Promise<TagDTO> {
        return await this.tagRepository.save(tag);
    }

    async getById(userId:string, tagId: string): Promise<TagDTO> {
        const tag = await this.tagRepository.get(tagId);

        if (!tag) {
            throw new ApiError(
                "Tag not found",
                HttpStatusCode.NOT_FOUND,
                `Tag with id ${tagId} not found`
            );
        }

        if (tag.user != userId) {
            throw new ApiError(
                "Unauthorized",
                HttpStatusCode.UNAUTHORIZED,
                "You are not authorized to access this resource"
            );
        }

        return tag;
    }

    async getAll(userId: string): Promise<TagDTO[]> {
        return await this.tagRepository.getAll(userId);
    }

    async update(userId: string, tagId:string, tag: UpdateTagDto): Promise<TagDTO> {
        const tagToUpdate = await this.tagRepository.get(tagId);

        if (!tagToUpdate) {
            throw new ApiError(
                "Tag not found",
                HttpStatusCode.NOT_FOUND,
                `Tag with id ${tagId} not found`
            );
        }

        if (tagToUpdate.user != userId) {
            throw new ApiError(
                "Unauthorized",
                HttpStatusCode.UNAUTHORIZED,
                "You are not authorized to access this resource"
            );
        }

        return await this.tagRepository.update(tagId, tag);
    }

    async deleteById(userId:string, tagId: string): Promise<TagDTO> {
        const tagToDelete = await this.tagRepository.get(tagId);

        if (!tagToDelete) {
            throw new ApiError(
                "Tag not found",
                HttpStatusCode.NOT_FOUND,
                `Tag with id ${tagId} not found`
            );
        }

        if (tagToDelete.user != userId) {
            throw new ApiError(
                "Unauthorized",
                HttpStatusCode.UNAUTHORIZED,
                "You are not authorized to access this resource"
            );
        }

        this.taskRepository.removeTagFromAllTasks(tagId);
        return await this.tagRepository.delete(tagId);
    }
}