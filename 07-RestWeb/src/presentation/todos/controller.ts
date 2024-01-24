import { Request, Response } from "express";

const toDos = [
  { id: 1, text: "Buy milk", createdAt: new Date() },
  { id: 2, text: "Buy tea", createdAt: new Date() },
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
    const body = req.body;
    res.json({ message: "Create toDo!", body: body });
  };
}
