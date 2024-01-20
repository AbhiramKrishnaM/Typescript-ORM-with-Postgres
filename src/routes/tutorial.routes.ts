import { Router } from "express";
import TutorialController from "../controller/tutorial.controller";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/", this.controller.findAll);
  }
}

export default new TutorialRoutes().router;
