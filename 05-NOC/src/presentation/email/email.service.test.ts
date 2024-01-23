import nodemailer from "nodemailer";
import { EmailService, SendEmailOptions } from "./email.service";

describe("email.service.test.ts", () => {
  const mockSendEmail = jest.fn();
  nodemailer.createTransport = jest.fn().mockReturnValue({
    sendMail: mockSendEmail,
  });
  const emailService = new EmailService();

  test("should send email", async () => {
    const options: SendEmailOptions = {
      to: "yorlingarcia@gmail.com",
      subject: "Test",
      htmlBody: "<h1>Test</h1>",
    };
    await emailService.sendEmail(options);
    // expect(emailSent).toBe(true);

    expect(mockSendEmail).toHaveBeenCalledWith({
      attachments: expect.any(Array),
      html: "<h1>Test</h1>",
      subject: "Test",
      to: "yorlingarcia@gmail.com",
    });
  });

  test("should send email with attachements", async () => {
    const email = "yorlingarcia@gmail.com";
    emailService.sendEmailWithFileSystemLogs("yorlingarcia@gmail.com");

    expect(mockSendEmail).toHaveBeenCalledWith({
      to: email,
      subject: "Logs del servidor",
      html: expect.any(String),
      attachments: expect.arrayContaining([
        { fileName: "logs-all.log", path: "./logs/logs-all.log" },
        { fileName: "logs-medium.log", path: "./logs/logs-medium.log" },
        { fileName: "logs-high.log", path: "./logs/logs-high.log" },
      ]),
    });
  });
});
