import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.ropository-impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
  // new PostgresSQLLogDataSource()
);

export class Server {
  public static start() {
    console.log("Server started...");
    // ToDo: HAcer Email
    // CronService.createJob("*/5 * * * * *", () => {
    //     const date = new Date();
    //     console.log("5 seconds", date);
    //   const url = "http://google.com";
    //   const url = "http://localhost:3000";
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(`${url} is ok`),
    //     (error) => console.log(error)
    //   ).execute(url);
    //     new CheckService().execute("http://localhost:3000");
    // });
  }
}
