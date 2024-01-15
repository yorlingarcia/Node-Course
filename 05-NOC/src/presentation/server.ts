import { envs } from "../config/plugins/env.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SenEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.ropository-impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDataSource()
  // new PostgresSQLLogDataSource()
);

const emailService = new EmailService();

export class Server {
  public static start() {
    console.log("Server started...");

    // ToDo: HAcer Email
    // console.log(envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY);
    new SenEmailLogs(emailService, fileSystemLogRepository).execute([
      "yorlingarcia32@gmail.com",
      "yorlingarcia96@hotmail.com",
    ]);
    // emailService.sendEmailWithFileSystemLogs([
    //   "yorlingarcia32@gmail.com",
    //   "yorlingarcia96@hotmail.com",
    // ]);
    // emailService.sendEmail({
    //   to: "yorlingarcia32@gmail.com",
    //   subject: "Logs del sistema",
    //   htmlBody: `
    //   <h3>Logs del sistema - NOC</h3>
    //   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus posuere diam, sed finibus sapien mattis in. Sed fringilla tincidunt commodo. </p>
    //   <p>Ver logs adjuntos</p>
    //   `,
    // });

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
