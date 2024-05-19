import { TaskService } from "../services/task.service"

export class TaskController {

    private service: TaskService;

    constructor() {
        this.service = new TaskService();
    }

    async findById( req: Request, res: Response) : Promise<void> {
        
    }
    
    async create( req: Request, res: Response) : Promise<void> {
        
    }

    async update( req: Request, res: Response) : Promise<void> {
        
    }

    async delete( req: Request, res: Response) : Promise<void> {
        
    }

    async findAll( req: Request, res: Response) : Promise<void> {
        
    }
}