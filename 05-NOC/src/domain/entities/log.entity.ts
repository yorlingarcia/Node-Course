export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  level: LogSeverityLevel;
  message: string;
  origin: string;
  createdAt?: Date;
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { message, level, origin, createdAt = new Date() } = options;
    this.message = message;
    this.level = level;
    this.createdAt = new Date();
    this.origin = origin;
  }

  static fromJson = (jsonData: string): LogEntity => {
    jsonData = jsonData === "" ? "{}" : jsonData;
    const { message, level, createdAt, origin } = JSON.parse(jsonData);

    const log = new LogEntity({
      message,
      level,
      createdAt: new Date(createdAt),
      origin,
    });

    log.createdAt = new Date(createdAt);

    return log;
  };

  static fromObject = (object: { [key: string]: any }) => {
    const { message, level, createdAt, origin } = object;
    const log = new LogEntity({
      message,
      level,
      origin,
      createdAt,
    });
    return log;
  };
}
