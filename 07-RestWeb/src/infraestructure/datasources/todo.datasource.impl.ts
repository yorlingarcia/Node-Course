import { prisma } from "../../data/postgres";
import {
  CreateTodoDto,
  TodoDatasource,
  TodoEntity,
  UpdateTodoDto,
} from "../../domain";
import { CustomErrors } from "../../domain/errors/custom.error";

export class TodoDatasourceImpl implements TodoDatasource {
  async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    const toDo = await prisma.toDo.create({
      data: createTodoDto!,
    });

    return TodoEntity.fromObject(toDo);
  }
  async getAll(): Promise<TodoEntity[]> {
    const toDos = await prisma.toDo.findMany();
    return toDos.map(TodoEntity.fromObject);
  }
  async finById(id: number): Promise<TodoEntity> {
    const toDo = await prisma.toDo.findUnique({
      where: {
        id,
      },
    });
    if (!toDo) throw new CustomErrors(`Todo with id ${id} not found`, 404);
    return TodoEntity.fromObject(toDo);
  }
  async updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    await this.finById(updateTodoDto.id);

    const updateToDo = await prisma.toDo.update({
      where: { id: updateTodoDto.id },
      data: updateTodoDto!.values,
    });
    return TodoEntity.fromObject(updateToDo);
  }
  async deleteById(id: number): Promise<TodoEntity> {
    await this.finById(id);
    const deleted = await prisma.toDo.delete({
      where: { id },
    });
    return TodoEntity.fromObject(deleted);
  }
}
