import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { GetTodos, TodoRepository } from "../../domain";

export class TodosController {
  //* DI
  constructor(private readonly todoRepository: TodoRepository) {}

  public getToDos = async (req: Request, res: Response) => {
    new GetTodos(this.todoRepository)
      .execute()
      .then((todos) => res.json(todos))
      .catch((error) => res.status(400).json({ error }));
  };

  public getToDoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const toDo = await this.todoRepository.finById(id);
      res.json(toDo);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createToDo = async (req: Request, res: Response) => {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);
    if (error) return res.status(400).json({ error });
    const toDo = await this.todoRepository.create(createTodoDto!);
    res.json(toDo);
  };

  public updateToDo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
    const updatedTodo = await this.todoRepository.updateById(updateTodoDto!);
    return res.json(updatedTodo);
  };

  public deleteToDo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedTodo = await this.todoRepository.deleteById(id);
    res.json(deletedTodo);
  };
}
