import request from "supertest";
import { testServer } from "../../test-server";
import { prisma } from "../../../src/data/postgres";

describe("Todo route testing", () => {
  beforeAll(async () => {
    await testServer.start();
  });

  afterAll(() => {
    testServer.close();
  });

  beforeEach(async () => {
    await prisma.toDo.deleteMany();
  });

  const todo1 = { text: "Hola mundo 1" };
  const todo2 = { text: "Hola mundo 2" };
  test("sould return TODOs api/todos", async () => {
    await prisma.toDo.createMany({
      data: [todo1, todo2],
    });
    const { body } = await request(testServer.app).get("/api/todos");
    expect(body).toBeInstanceOf(Array);
    expect(body.length).toBe(2);
    expect(body[0].text).toBe(todo1.text);
    expect(body[1].text).toBe(todo2.text);
    expect(body[0].completedAt).toBeNull();
  });

  test("should return a TODO api/todos/:id", async () => {
    const todo = await prisma.toDo.create({
      data: todo1,
    });

    const { body } = await request(testServer.app)
      .get(`/api/todos/${todo.id}`)
      .expect(200);
    expect(body).toEqual({
      id: todo.id,
      text: todo1.text,
      completedAt: null,
    });
  });

  test("should return a 404 NotFound api/todos/:id", async () => {
    const todoId = 999;
    const { body } = await request(testServer.app)
      .get(`/api/todos/${todoId}`)
      .expect(400);
    expect(body).toEqual({ error: `Todo with id ${todoId} not found` });
  });
});
