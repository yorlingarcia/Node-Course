import { LogEntity } from "../../entities/log.entity";
import { CheckService } from "./check-service";

describe("check-service.test.ts", () => {
  const mockRepository = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };

  const successCallback = jest.fn();
  const errorCallback = jest.fn();

  const checkService = new CheckService(
    mockRepository,
    successCallback,
    errorCallback
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should call succes callkback when fetch returns true", async () => {
    const wasOk = await checkService.execute("https://google.com");
    expect(wasOk).toBe(true);

    expect(successCallback).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();
    expect(mockRepository.saveLog).toBeCalledWith(expect.any(LogEntity));
  });

  test("should call error callkback when fetch returns false", async () => {
    const wasOk = await checkService.execute("https://google.com");
    expect(wasOk).toBe(true);

    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(mockRepository.saveLog).toBeCalledWith(expect.any(LogEntity));
  });
});
