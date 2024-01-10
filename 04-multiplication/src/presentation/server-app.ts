import { SaveFile, SaveFileOptions } from '../domain/use-cases/save-file.use-case'
import { Createtable } from "../domain/use-cases/create-table.use-case";

interface RunOptions  {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string
}

export class ServerApp {
    static run({base, limit, showTable, fileName, fileDestination}: RunOptions) {
        console.log('Server running...');
        const table = new Createtable().execute({base, limit})
        const wasCreated = new SaveFile().execute({fileContent: table, fileDestination, fileName})
        if(showTable) console.log(table);
        (wasCreated) ? console.log('Archivo creado'): console.log('Archivo no creado');
        ;   
    }
}