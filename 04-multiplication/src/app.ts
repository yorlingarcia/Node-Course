import { yarg } from "./config/plugins/yargs.olugin";
import { ServerApp } from "./presentation/server-app";

(async () => {
    await main()
})()

async function main() {
    console.log(yarg);
    
    ServerApp.run()
}

