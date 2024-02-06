import { Request, Response } from "express";
import { GithubService } from "../services/github.service";

export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  webhookHandler = (req: Request, res: Response) => {
    const githubEvent = req.header("x-github-event") ?? "unknow";
    const signature = req.header("x-hub-signature-256") ?? "unknow";
    const payload = req.body;
    let message: string;

    switch (githubEvent) {
      case "star":
        message = this.githubService.onStar(payload);
        break;
      case "issues":
        message = this.githubService.onIssue(payload);
        break;
      default:
        message = `Unknow event ${githubEvent}`;
    }
    console.log({ message });

    res.status(202).json("Accepted");
  };
}
