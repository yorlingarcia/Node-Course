import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

export class TodosController {
  //* DI
  constructor() {}

  public getTodos = async (req: Request, res: Response) => {
    const toDos = await prisma.toDo.findMany();
    res.json(toDos);
  };

  public getToDoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: `ID argument is not a number` });
    const toDo = await prisma.toDo.findUnique({
      where: {
        id,
      },
    });

    toDo
      ? res.json(toDo)
      : res.status(404).json({ error: `ToDo with id ${id} not found` });
  };

  public createToDo = async (req: Request, res: Response) => {
    const { text } = req.body;
    if (!text)
      return res.status(400).json({ Error: "Text property is required" });

    const toDo = await prisma.toDo.create({
      data: { text },
    });

    res.json(toDo);
  };

  public updateToDo = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (isNaN(id))
      return res.status(400).json({ error: `ID argument is not a number` });

    try {
      const { text, completedAt } = req.body;
      if (!text)
        return res.status(400).json({ Error: "Text property is required" });
      const toDo = await prisma.toDo.update({
        where: { id },
        data: { text, completedAt },
      });
      res.json(toDo);
    } catch (error) {
      res.status(404).json({ Error: `ToDo with id ${id} not found` });
    }

    // const toDo = toDos.find((todo) => todo.id === id);
    // if (!toDo)
    //   return res.status(404).json({ error: `ToDo with id ${id} not found` });

    // const { text, completedAt } = req.body;
    // if (!text)
    //   return res.status(400).json({ Error: "Text property is required" });
    // toDo.text = text || toDo.text;
    // completedAt === "null"
    //   ? (toDo.completedAt = null)
    //   : (toDo.completedAt = new Date(completedAt || toDo.completedAt));
  };

  public deleteToDo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: `ID argument is not a number` });

    // const toDoIndex = toDos.findIndex((toDo) => toDo.id === id);
    // if (!toDoIndex)
    //   return res.status(404).json({ error: `ToDo with id ${id} not found` });
    // toDos.splice(toDoIndex, 1);
    try {
      const toDoDelete = await prisma.toDo.delete({
        where: {
          id,
        },
      });
      res.json({ Message: "ToDo eliminado correctamente!" });
    } catch (error) {
      res.status(404).json({ error: `ToDo with id ${id} not found` });
    }
  };
}
