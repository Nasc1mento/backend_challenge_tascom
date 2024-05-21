import swaggerAutogen from "swagger-autogen"

class Swagger {

    private outputFile: string;
    private routes: string[];

    constructor() {
      this.outputFile = "./swagger.json";
      this.routes = ["../routes/*routes.ts"];
    }

    init() {
      const doc = {
      info: {
        title: 'TODO API',
        description: 'BackEnd Challenge Tascom'
      },
      definitions: {
        CreateTaskDTO: {
          title: "string",
          status: "string",
          priority: "number",
          description: "string"
        },
        TaskDTO: {
          _id: "string",
          title: "string",
          status: "string",
          priority: "number",
          description: "string",
          tags: "array"
        },
        UpdateTaskDTO: {
          title: "string",
          status: "string",
          priority: "number",
          description: "string"
        },
        TagDTO: {
          _id: "string",
          name: "string",
          color: "string"
        },
        CreateTagDTO: {
          name: "string",
          color: "string"
        },
        UpdateTagDTO: {
          name: "string",
          color: "string"
        }
      }
    };
    swaggerAutogen(this.outputFile, this.routes, doc);
  }
}

new Swagger().init();

