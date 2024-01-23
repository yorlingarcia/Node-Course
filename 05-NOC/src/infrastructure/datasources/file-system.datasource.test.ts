import fs from "fs";
import path from "path";
import { FileSystemDataSource } from "./file-system.datasource";

describe("file-system.datasoruce.test.ts", () => {
  const logPath = path.join(__dirname, "../../../logs");
  console.log(logPath);

  beforeEach(() => {
    fs.rmSync(logPath, { recursive: true, force: true });
  });

  test("should create log files if they do not exist", () => {
    new FileSystemDataSource();

    const files = fs.readdirSync(logPath);

    expect(files).toEqual(["logs-all.log", "logs-high.log", "logs-medium.log"]);
  });
});
