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
    };
    swaggerAutogen(this.outputFile, this.routes, doc);
  }
}

new Swagger().init();

