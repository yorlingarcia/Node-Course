import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

const toDos = [
  { id: 1, text: "Buy milk", completedAt: new Date() },
  { id: 2, text: "Buy tea", completedAt: null },
  { id: 3, text: "Buy coffe", completedAt: new Date() },
];
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
    const toDo = await prisma.toDo.findMany({
      where: {
        id,
      },
    });
    toDo.length > 0
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

  public updateToDo = (req: Request, res: Response) => {
    const id = +req.params.id;

    if (isNaN(id))
      return res.status(400).json({ error: `ID argument is not a number` });
    const toDo = toDos.find((todo) => todo.id === id);
    if (!toDo)
      return res.status(404).json({ error: `ToDo with id ${id} not found` });

    const { text, completedAt } = req.body;
    // if (!text)
    //   return res.status(400).json({ Error: "Text property is required" });
    toDo.text = text || toDo.text;
    completedAt === "null"
      ? (toDo.completedAt = null)
      : (toDo.completedAt = new Date(completedAt || toDo.completedAt));
    res.json(toDo);
  };

  public deleteToDo = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: `ID argument is not a number` });

    const toDoIndex = toDos.findIndex((toDo) => toDo.id === id);
    if (!toDoIndex)
      return res.status(404).json({ error: `ToDo with id ${id} not found` });
    toDos.splice(toDoIndex, 1);
    res.json({ Message: "ToDo eliminado correctamente!" });
  };
}
