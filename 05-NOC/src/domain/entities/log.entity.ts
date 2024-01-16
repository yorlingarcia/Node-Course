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
  public createAt: Date;
  public origin: string;

  constructor(options: LogEntityOptions) {
    const { message, level, origin, createdAt = new Date() } = options;
    this.message = message;
    this.level = level;
    this.createAt = new Date();
    this.origin = origin;
  }

  static fromJson = (jsonData: string): LogEntity => {
    const { message, level, createdAt, origin } = JSON.parse(jsonData);

    const log = new LogEntity({
      message,
      level,
      createdAt,
      origin,
    });

    log.createAt = new Date(createdAt);

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
