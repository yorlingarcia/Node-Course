import { Createtable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean
}

export class ServerApp {
    static run({base, limit, showTable}: RunOptions) {
        console.log('Server running...');
        const table = new Createtable().execute({base, limit})
        if(showTable) console.log(table);
        
    }
}