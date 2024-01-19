import mongoose, { mongo } from "mongoose";
import { MongoDataBase } from "../init";
import { envs } from "../../../config/plugins/envs.plugin";
import { LogModel } from "./log.model";

describe("log.model.test.ts", () => {
  beforeAll(async () => {
    await MongoDataBase.connect({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME,
    });
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  test("should return LogModel", async () => {
    const logData = {
      origin: "log.model.test.ts",
      message: "test-message",
      level: "low",
    };

    const log = await LogModel.create(logData);
    // console.log(log);

    expect(log).toEqual(
      expect.objectContaining({
        ...logData,
        createdAt: expect.any(Date),
        id: expect.any(String),
      })
    );
  });

  test("", () => {});
});
