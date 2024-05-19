import { TagService } from "../services/tag.service";


export class TagController {

    private service: TagService;

    constructor() {
        this.service = new TagService();
    }


    async findById(req: Request, res: Response): Promise<void> {
       
    }

    async create(req: Request, res: Response): Promise<void> {

    }

    async update(req: Request, res: Response): Promise<void> {
        
    }

    async deleteById(req: Request, res: Response): Promise<void> {
        
    } 
    
    async findAll(req: Request, res: Response): Promise<void> {
        
    }
}