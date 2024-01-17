import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  fileName: string;
  path: string;
}

export class EmailService {
  constructor() {}

  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendEmailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;
    try {
      const sentInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachments,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  sendEmailWithFileSystemLogs(to: string | string[]) {
    const subject = "Losgs del servidor";
    const htmlBody = `
    <h3>Logs del sistema</h3>
    <p>Mensaje de prueba</p>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus posuere diam, sed finibus sapien mattis in. Sed fringilla tincidunt commodo. </p>
    <a href="" target ="_blanck">Ver logs adjuntos</a>
    `;

    const attachments: Attachment[] = [
      { fileName: "logs-all.log", path: "./logs/logs-all.log" },
      { fileName: "logs-medium.log", path: "./logs/logs-medium.log" },
      { fileName: "logs-high.log", path: "./logs/logs-high.log" },
    ];

    return this.sendEmail({ to, subject, attachments, htmlBody });
  }
}
