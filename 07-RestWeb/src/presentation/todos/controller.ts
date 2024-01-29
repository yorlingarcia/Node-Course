import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { TodoRepository } from "../../domain";

export class TodosController {
  //* DI
  constructor(private readonly todoRepository: TodoRepository) {}

  public getToDos = async (req: Request, res: Response) => {
    const toDos = await prisma.toDo.findMany();
    return res.json(toDos);
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
    const [error, createTodoDto] = CreateTodoDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const toDo = await prisma.toDo.create({
      data: createTodoDto!,
    });

    res.json(toDo);
  };

  public updateToDo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
    try {
      const toDo = await prisma.toDo.update({
        where: { id },
        data: updateTodoDto!.values,
      });
      res.json(toDo);
    } catch (err) {
      res.status(404).json({ error });
    }
  };

  public deleteToDo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: `ID argument is not a number` });
    try {
      const toDoDelete = await prisma.toDo.delete({
        where: {
          id,
        },
      });
      res.json({ Message: "ToDo eliminado correctamente!", toDoDelete });
    } catch (error) {
      res.status(404).json({ error: `ToDo with id ${id} not found` });
    }
  };
}
