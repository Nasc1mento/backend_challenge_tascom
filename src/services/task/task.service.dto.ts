export interface ITaskCreateDto {
    title: string;
    description: string;
    dueDate: Date;
    tags: string[];
}


export interface ITaskUpdateDto {
    title?: string;
    description?: string;
    dueDate?: Date;
    tags?: string[];
}

export interface ITaskDto extends ITaskCreateDto{
    id: string,
}
