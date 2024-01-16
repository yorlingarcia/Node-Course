import { Server } from "./presentation/server";
import { envs } from "./config/plugins/env.plugin";
import "dotenv/config";
import { LogModel, MongoDataBase } from "./data/mongo";
(async () => {
  main();
})();

async function main() {
  await MongoDataBase.connect({
    mongoUrl: envs.MOGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // Crear una coleccion = tablas, documentos =  registros
  // const newLog = await LogModel.create({
  //   message: "Test message desde Mongo",
  //   origin: "App.ts",
  //   level: "low",
  // });

  // await newLog.save();

  // console.log(newLog);

  // const logs = await LogModel.find();
  // console.log(logs);

  Server.start();
  //   console.log(envs);
}
