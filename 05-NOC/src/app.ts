import { Server } from "./presentation/server";
import { envs } from "./config/plugins/env.plugin";
import "dotenv/config";
import { LogModel, MongoDataBase } from "./data/mongo";
import { PrismaClient } from "@prisma/client";
(async () => {
  main();
})();

async function main() {
  await MongoDataBase.connect({
    mongoUrl: envs.MOGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  const prisma = new PrismaClient();
  // const newLog = await prisma.logModel.create({
  //   data: {
  //     level: "HIGH",
  //     message: "Test message",
  //     origin: "app.ts",
  //   },
  // });
  // console.log(newLog);
  const logs = await prisma.logModel.findMany({
    where: {
      level: "LOW",
    },
  });

  console.log(logs);

  // Server.start();
  //   console.log(envs);
}
