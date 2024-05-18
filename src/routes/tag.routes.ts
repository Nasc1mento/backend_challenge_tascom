import {Router, Request, Response} from "express"; 

export class TagRoutes {
    private routes: Router;

    constructor(routes: Router) {
        this.routes = routes;
    }

    setRoutes(): void {

        this.routes.get("/tags", (req: Request, res: Response) => {
            res.send({message: "GET /tags"});
        });

        this.routes.post("/tags", (req: Request, res: Response) => {
            
        });

        this.routes.put("/tags/:id", (req: Request, res: Response) => {
            
        });

        this.routes.delete("/tags/:id", (req: Request, res: Response) => {
            
        });
    }

}