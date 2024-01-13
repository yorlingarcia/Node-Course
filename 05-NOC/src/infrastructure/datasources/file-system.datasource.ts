import { LogDataSource } from "../../domain/dataSources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class FileSystme implements LogDataSource {
  saveLog(log: LogEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    throw new Error("Method not implemented.");
  }
}
