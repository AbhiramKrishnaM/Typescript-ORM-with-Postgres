import { Router } from "express";
import TutorialController from "../controller/tutorial.controller";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", this.controller.create);

    this.router.delete("/delete", this.controller.delete);

    this.router.delete("/delete-all", this.controller.deleteAll);

    this.router.post("/find-all", this.controller.findAll);

    this.router.post("/find-published", this.controller.findAllPublished);

    this.router.post("/find-one", this.controller.findOne);

    this.router.put("/update", this.controller.update);
  }
}

export default new TutorialRoutes().router;
