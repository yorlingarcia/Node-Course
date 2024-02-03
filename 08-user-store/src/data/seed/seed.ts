import { envs } from "../../config";
import { MongoDataBase } from "../mongo/mongo-database";

(async () => {
  await MongoDataBase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });

  await main();

  await MongoDataBase.disconnect();
})();

async function main() {}
