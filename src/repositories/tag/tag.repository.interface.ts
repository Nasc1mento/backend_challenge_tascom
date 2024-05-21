import { TagDTO } from "../../dto/tag/tag.dto";
import { IRepository } from "../repository.interface";

export interface ITagRepository extends IRepository<TagDTO> {}