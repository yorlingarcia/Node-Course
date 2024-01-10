import fs from 'fs'

export interface SavefileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    fileDestination?: string 
    fileName?: string
}

export class SaveFile implements SavefileUseCase {

    constructor() {}

    execute ({fileContent, fileDestination = 'outputs', fileName='table'}: SaveFileOptions): boolean {
        
        try {
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true
        } catch (error) {
            console.error('Error en la creacion del archivo: ', error)
            return false
        }
    }
}