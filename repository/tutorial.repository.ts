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
  async save(tutorial: Tutorial): Promise<Tutorial> {}

  async retrieveAll(searchParams: {
    title: String;
    published: Boolean;
  }): Promise<Tutorial[]> {}

  async retrieveById(tutorialId: number): Promise<Tutorial | null> {}

  async update(tutorial: Tutorial): Promise<number> {}

  async delete(tutorialId: number): Promise<number> {}

  async deleteAll(): Promise<number> {}
}