import { envs } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;
  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: "https://arts.giphy.com/wp-content/uploads/2017/11/giphy-14.gif",
          },
        },
      ],
    };

    const response = await fetch(this.discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log("Error sending message to discord");
      return false;
    }
    return true;
  }
}
