import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SenEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.ropository-impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { ProstgresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";

// const logRepository = new LogRepositoryImpl(
//   // new FileSystemDataSource()
//   // new MongoLogDataSource()
//   new ProstgresLogDataSource()
// );

const fsLogRepository = new LogRepositoryImpl(new FileSystemDataSource());

const mongoLogRepository = new LogRepositoryImpl(new MongoLogDataSource());

const postgresLogRepository = new LogRepositoryImpl(
  new ProstgresLogDataSource()
);

const emailService = new EmailService();

export class Server {
  public static async start() {
    console.log("Server started...");

    // ToDo: HAcer Email
    // console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY);
    // new SenEmailLogs(emailService, fileSystemLogRepository).execute([
    //   "yorlingarcia32@gmail.com",
    //   "yorlingarcia96@hotmail.com",
    // ]);
    // const logs = await logRepository.getLogs(LogSeverityLevel.low);
    // console.log(logs);

    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = "https://google.com";
    //   new CheckService(
    //     logRepository,
    //     () => console.log(`${url} is ok`),
    //     (error) => console.log("error desde server", error)
    //   ).execute(url);
    // });

    // CronService.createJob("*/5 * * * * *", () => {
    //   const url = "https://google.com";
    //   new CheckServiceMultiple(
    //     [fsLogRepository, mongoLogRepository, postgresLogRepository],
    //     () => console.log(`${url} is ok`),
    //     (error) => console.log("error desde server", error)
    //   ).execute(url);
    // });
  }
}
