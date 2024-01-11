import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    console.log("Server started...");
    CronService.createJob("*/5 * * * * *", () => {
      //   const date = new Date();
      //   console.log("5 seconds", date);
      new CheckService().execute("https://google.com");
    });
  }
}
