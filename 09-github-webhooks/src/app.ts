import express from "express";
import { envs } from "./config";
import { GithubController } from "./presentation/github/controller";
import { GithubService } from "./presentation/services/github.service";
import { GithubSha256Middleware } from "./presentation/middlewares/github-sha256.middle4ware";

(() => {
  main();
})();

function main() {
  const app = express();

  const githubService = new GithubService();
  const controller = new GithubController(githubService);

  app.use(express.json());

  app.use(GithubSha256Middleware.verifySignature);

  app.post("/api/github", controller.webhookHandler);

  app.listen(envs.PORT, () => {
    console.log(`App runing in port: ${envs.PORT}`);
  });
}
