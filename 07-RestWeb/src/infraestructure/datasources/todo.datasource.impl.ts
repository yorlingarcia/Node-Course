import { prisma } from "../../data/postgres";
import {
  CreateTodoDto,
  TodoDatasource,
  TodoEntity,
  UpdateTodoDto,
} from "../../domain";

export class TodoDatasourceImpl implements TodoDatasource {
  create(creteTodoDto: CreateTodoDto): Promise<TodoEntity> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<TodoEntity[]> {
    const toDos = await prisma.toDo.findMany();
    return toDos.map(TodoEntity.fromObject);
  }
  finById(id: number): Promise<TodoEntity> {
    throw new Error("Method not implemented.");
  }
  updateById(updaqteTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<TodoEntity> {
    throw new Error("Method not implemented.");
  }
}
