import { GithubIssuePayload, GithubStarPayload } from "../../interfaces";

export class GithubService {
  constructor() {}
  onStar(payload: GithubStarPayload): string {
    let message: string = "";

    const { action, sender, repository } = payload;

    message = `User ${sender.login} ${action} star on ${repository.full_name}`;

    return message;
  }

  onIssue(payload: GithubIssuePayload) {
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
  }
}
