import { Request, Response } from "express";

export class TodosController {
  //* DI
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    res.json([
      { id: 1, text: "Buy milk", createdAt: new Date() },
      { id: 2, text: "Buy tea", createdAt: new Date() },
      { id: 3, text: "Buy coffe", createdAt: new Date() },
    ]);
  };
}
