export interface ITagCreateDto {
    name: string;
    color: string;
}

export interface ITagUpdateDto {
    name?: string;
    color?: string;
}

export interface ITagDto extends ITagCreateDto {
    id: string;
}