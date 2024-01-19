import { LogEntity } from "../../entities/log.entity";
import { CheckService } from "./check-service";
import { CheckServiceMultiple } from "./check-service-multiple";

describe("check-service-multiple.test.ts", () => {
  const mockRepo1 = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };
  const mockRepo2 = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };
  const mockRepo3 = {
    saveLog: jest.fn(),
    getLogs: jest.fn(),
  };

  const successCallback = jest.fn();
  const errorCallback = jest.fn();

  const checkServiceMultiple = new CheckServiceMultiple(
    [mockRepo1, mockRepo2, mockRepo3],
    successCallback,
    errorCallback
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should call succes callkback when fetch returns true", async () => {
    const wasOk = await checkServiceMultiple.execute("https://google.com");
    expect(wasOk).toBe(true);

    expect(successCallback).toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();
    expect(mockRepo1.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockRepo2.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockRepo3.saveLog).toBeCalledWith(expect.any(LogEntity));
  });

  test("should call error callkback when fetch returns false", async () => {
    const wasOk = await checkServiceMultiple.execute(
      "https://gooakjsdlkajsdlkjgle.com"
    );
    expect(wasOk).toBe(false);

    expect(successCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
    expect(mockRepo1.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockRepo2.saveLog).toBeCalledWith(expect.any(LogEntity));
    expect(mockRepo3.saveLog).toBeCalledWith(expect.any(LogEntity));
  });
});
