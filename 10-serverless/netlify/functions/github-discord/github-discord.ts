import type { HandlerContext, HandlerEvent } from "@netlify/functions";

const notify = async (message: string) => {
  const body = {
    content: message,
    // embeds: [
    //   {
    //     image: {
    //       url: "https://arts.giphy.com/wp-content/uploads/2017/11/giphy-14.gif",
    //     },
    //   },
    // ],
  };

  const response = await fetch(process.env.DISCORD_WEBHOOK_URL ?? "", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.log("Error sending message to discord");
    return false;
  }
  return true;
};

const onStar = (payload: any): string => {
  let message: string = "";

  const { action, sender, repository } = payload;

  message = `User ${sender.login} ${action} star on ${repository.full_name}`;

  return message;
};

const onIssue = (payload: any) => {
  const { action, issue } = payload;
  if (action === "opened") {
    return `An issue was opened whit this title ${issue.title}`;
  }

  if (action === "closed") {
    return `An issue was closed by ${issue.user.login}`;
  }

  if (action === "reopened") {
    return `An issue was reopened by ${issue.user.login}`;
  }

  return `Unhandle action for the issue event ${action}`;
};

export const handler = async (event: HandlerEvent, context: HandlerContext) => {
  const githubEvent = event.headers["x-github-event"] ?? "unknow";
  const payload = JSON.parse(event.body ?? "");

  console.log(payload);

  let message: string;

  switch (githubEvent) {
    case "star":
      message = onStar(payload);
      break;
    case "issues":
      message = onIssue(payload);
      break;
    default:
      message = `Unknow event ${githubEvent}`;
  }

  await notify(message);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hola mundo!",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
