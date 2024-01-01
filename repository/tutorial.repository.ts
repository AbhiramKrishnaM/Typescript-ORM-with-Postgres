import { describe } from "node:test";
import Tutorial from "../models/tutorial.model";

interface ITutorialRepository {
  save(tutorial: Tutorial): Promise<Tutorial>;

  retrieveAll(searchParams: {
    title: String;
    published: Boolean;
  }): Promise<Tutorial[]>;

  retrieveById(tutorialId: number): Promise<Tutorial | null>;

  update(tutorial: Tutorial): Promise<number>;

  delete(tutorialId: number): Promise<number>;

  deleteAll(): Promise<number>;
}

class TutorialRepository implements ITutorialRepository {
  async save(tutorial: Tutorial): Promise<Tutorial> {
    try {
      return await Tutorial.create({
        title: tutorial.title,
        description: tutorial.description,
        published: tutorial.published,
      });
    } catch (error) {
      throw new Error("Failed to create Tutorial!");
    }
  }

  async retrieveAll(searchParams: {
    title: String;
    published: Boolean;
  }): Promise<Tutorial[]> {
    try {
    } catch (error) {}
  }

  async retrieveById(tutorialId: number): Promise<Tutorial | null> {}

  async update(tutorial: Tutorial): Promise<number> {}

  async delete(tutorialId: number): Promise<number> {}

  async deleteAll(): Promise<number> {}
}

export default new TutorialRepository();
