import { Server } from "./presentation/server";
import { envs } from "./config/plugins/env.plugin";
import "dotenv/config";
import { MongoDataBase } from "./data/mongo";
(async () => {
  main();
})();

async function main() {
  await MongoDataBase.connect({
    mongoUrl: envs.MOGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });
  // Server.start();
  //   console.log(envs);
}
