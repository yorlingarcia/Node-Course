
import { SaveFile } from "./save-file.use-case"
import fs from 'fs'


describe('use-cases\save-file.use-case.ts', () => {

    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table-name'
    }
    
    // beforeEach( () => {
    //     jest.clearAllMocks()
    // })

    afterEach(() => {
        const outputFolderExist = fs.existsSync('outputs')
        if (outputFolderExist) fs.rmSync('outputs', {recursive: true})

        const customOutpuFolderExist = fs.existsSync(customOptions.fileDestination)
        if(customOutpuFolderExist) {
            fs.rmSync(customOptions.fileDestination, {recursive: true})
        }
    })

    test('should save file with defauls values', () => {

        const saveFile = new SaveFile();
        const options = {
            fileContent: 'test-content',

        }
        const result = saveFile.execute(options)
        const filePath = 'outputs/table.txt'
        const checkFile = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'})

        expect(result).toBe(true)
        expect(checkFile).toBe(true)
        expect(fileContent).toBe(options.fileContent)

    })

    test('should save file with custom values', () => {

        const options = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs/file-destination',
            fileName: 'custom-table-name'
        }

        const saveFile = new SaveFile();
        const result = saveFile.execute(options)
        const filePath = `${options.fileDestination}/${options.fileName}.txt`
        
        const checkFile = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'})

        expect(result).toBe(true)
        expect(checkFile).toBe(true)
        expect(fileContent).toBe(options.fileContent)
    })

    test('should return false if directory could not be created', () => {
        const saveFile = new SaveFile()
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation( () => {
            throw new Error('This is a custom error message from testing')
        })

        const result = saveFile.execute(customOptions)
        expect(result).toBe(false)

        mkdirSpy.mockRestore()
    })

    test('should return false if file could not be created', () => {
        const saveFile = new SaveFile()

        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
            throw new Error('This is a custom writing error message from testing');
        });

        const result = saveFile.execute({ fileContent: 'Hola' });
        expect(result).toBe(false);

        writeFileSpy.mockRestore();

    })
})