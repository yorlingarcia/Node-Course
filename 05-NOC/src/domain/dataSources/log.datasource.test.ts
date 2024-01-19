import { LogEntity, LogSeverityLevel } from "../entities/log.entity";
import { LogDataSource } from "./log.datasource";

describe("log.datasource.test.ts", () => {
  const newLog = new LogEntity({
    origin: "log.datasoyrce.test.ts",
    message: "Log datasource test message",
    level: LogSeverityLevel.low,
  });

  class MockLogDataSource implements LogDataSource {
    async saveLog(log: LogEntity): Promise<void> {
      return;
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
      return [newLog];
    }
  }
  test("should test the abstract class", async () => {
    const mockLogDataSource = new MockLogDataSource();
    expect(mockLogDataSource).toBeInstanceOf(MockLogDataSource);
    expect(typeof mockLogDataSource.getLogs).toBe("function");
    expect(typeof mockLogDataSource.saveLog).toBe("function");

    // expect(mockLogDataSource).toHaveProperty("getLogs");

    await mockLogDataSource.saveLog(newLog);
    const logs = await mockLogDataSource.getLogs(LogSeverityLevel.high);
    expect(logs).toHaveLength(1), expect(logs[0]).toBeInstanceOf(LogEntity);
  });
});
