import { LogDataSource } from "../../domain/dataSources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImpl implements LogRepository {
  constructor(private readonly logDataSource: LogDataSource) {}
  saveLog(log: LogEntity): Promise<void> {
    return this.logDataSource.saveLog(log);
  }
  getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    return this.logDataSource.getLogs(severityLevel);
  }
}
