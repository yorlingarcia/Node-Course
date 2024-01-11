import { CronJob } from "cron";



export class Server {

    public static start() {
        console.log('Server started...');
        
        const job = new CronJob(
            '*/3 * * * * *',
            () => {
                const date = new Date();
                console.log(date);
                
            },
        );
        job.start()
    }
}