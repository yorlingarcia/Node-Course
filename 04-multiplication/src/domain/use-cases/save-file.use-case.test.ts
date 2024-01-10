import { SaveFile } from "./save-file.use-case"
import fs from 'fs'


describe('use-cases\save-file.use-case.ts', () => {

        // beforeEach( () => {
        //     fs.rmSync('outputs', {recursive: true})
        // })

        afterEach(() => {
            fs.rmSync('outputs', {recursive: true})
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
})