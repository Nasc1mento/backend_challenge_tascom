import { Tag } from "../../models/tag";
import { ITagDto, ITagCreateDto, ITagUpdateDto } from "./tag.service.dto";


export class TaskService {

    private model: typeof Tag;

    constructor() {
        this.model = Tag;
    }

    async createTask(task: ITagCreateDto): Promise<ITagDto> {
        return;
    }

    async getTasks(): Promise<ITagDto[]> {
        return;
    }

    async updateTask(id: string, task: ITagUpdateDto): Promise<ITagDto> {
        return;
    }

    async deleteTask(id: string): Promise<ITagDto> {
        return;
    }
}