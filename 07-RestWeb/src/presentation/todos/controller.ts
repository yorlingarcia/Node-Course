import { Request, Response } from "express";

const toDos = [
  { id: 1, text: "Buy milk", createdAt: new Date() },
  { id: 2, text: "Buy tea", createdAt: null },
  { id: 3, text: "Buy coffe", createdAt: new Date() },
];
export class TodosController {
  //* DI
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    res.json(toDos);
  };

  public getToDoById = (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: `ID argument is not a number` });
    const toDo = toDos.find((todo) => todo.id === id);
    toDo
      ? res.json(toDo)
      : res.status(404).json({ error: `ToDo with id ${id} not found` });
  };

  public createToDo = (req: Request, res: Response) => {
    const { text } = req.body;
    if (!text)
      return res.status(400).json({ Error: "Text property is required" });
    const newToDo = {
      id: toDos.length + 1,
      text: text,
      createdAt: null,
    };
    toDos.push(newToDo);
    res.json(newToDo);
  };
}
