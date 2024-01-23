import { LogDataSource } from "../../domain/dataSources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepositoryImpl } from "./log.repository-impl";

describe("log.respository-impl.test.ts", () => {
  const mockDataSource = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };
  const logDataSource = new LogRepositoryImpl(mockDataSource);

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("saveLog should call the datasource with arguments", async () => {
    const log = new LogEntity({
      message: "test-message",
      level: LogSeverityLevel.low,
      origin: "log.repository-impl.test.ts",
    });

    await logDataSource.saveLog(log);

    expect(mockDataSource.saveLog).toHaveBeenCalledWith(log);
  });
  test("getLogs should call the datasource with arguments", async () => {
    await logDataSource.getLogs(LogSeverityLevel.low);
    expect(mockDataSource.getLogs).toHaveBeenCalledWith(LogSeverityLevel.low);
  });
});
