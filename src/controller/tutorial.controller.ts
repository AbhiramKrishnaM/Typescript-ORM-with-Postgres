import { Request, Response } from "express";
import Tutorial from "../models/tutorial.model";
import tutorialRepository from "../repository/tutorial.repository";

export default class TutorialController {
  /**
   * Create
   * findAll
   * findOne
   * update
   * delete
   * deleteAll
   * findAllPublished
   */

  async create(req: Request, res: Response) {}

  async findAll(req: Request, res: Response) {}

  async findOne(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}

  async deleteAll(req: Request, res: Response) {}

  async findAllPublished(req: Request, res: Response) {}
}
