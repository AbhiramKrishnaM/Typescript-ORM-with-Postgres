import { Op } from "sequelize";
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
      let condition: SearchCondition = {};

      if (searchParams?.published) condition.published = true;

      if (searchParams?.title)
        condition.title = { [Op.like]: `%${searchParams.title}` };

      return await Tutorial.findAll({ where: condition });
    } catch (error) {
      throw new Error("Failed to retrieve tutorials");
    }
  }

  async retrieveById(tutorialId: number): Promise<Tutorial | null> {
    try {
      return await Tutorial.findByPk(tutorialId);
    } catch (error) {
      throw new Error("Failed to retrieve tutorials");
    }
  }

  async update(tutorial: Tutorial): Promise<number> {
    const { id, title, description, published } = tutorial;

    try {
      const affectedRows = await Tutorial.update(
        { title, description, published },
        { where: { id: id } }
      );

      return affectedRows[0];
    } catch (error) {
      throw new Error("Failed to update tutorial");
    }
  }

  async delete(tutorialId: number): Promise<number> {
    try {
      const affectedRows = await Tutorial.destroy({
        where: { id: tutorialId },
      });

      return affectedRows;
    } catch (error) {
      throw new Error("Failed to delete tutorial!");
    }
  }

  async deleteAll(): Promise<number> {
    try {
      return await Tutorial.destroy({ where: {}, truncate: false });
    } catch (error) {
      throw new Error("Failed to delete Tutorials!");
    }
  }
}

export default new TutorialRepository();
