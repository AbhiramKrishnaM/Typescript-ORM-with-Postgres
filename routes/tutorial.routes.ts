import { Router } from "express";
import TutorialController from "../controller/tutorial.controller";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {}
}
