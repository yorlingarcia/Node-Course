import { buildLogger, logger as log } from "../../src/plugins/logger.plugin";

describe("plugins/logger.plugin.ts", () => {
  test("buildLogger should return a funtion logger", () => {
    const logger = buildLogger("test");
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    const winstonLoggerMock = jest.spyOn(log, "log");
    const service = "test service";
    const message = "test message";

    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });
});
