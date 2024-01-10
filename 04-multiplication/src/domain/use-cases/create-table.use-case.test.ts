import { CreateTable } from "./create-table.use-case"


describe('use-cases\create-table.use-case.ts',() =>{

    test("should create table with default values", () => {

        const createTable = new CreateTable();
        expect( createTable).toBeInstanceOf(CreateTable)

        const table = createTable.execute({base:2})
        expect(table).toContain('2 x 1 = 2')
        expect(table).toContain('2 x 10 = 20')

        const rows = table.split('\n').length;
        expect(rows).toBe(10)
    })

    test('should create table wiht custom values', () => {
        const options = {
            base: 3,
            limit: 20
        };
        const createTable = new CreateTable();

        const table = createTable.execute(options)
        expect(table).toContain('3 x 1 = 3')
        expect(table).toContain('3 x 10 = 30')
        expect(table).toContain('3 x 20 = 60')

        const rows = table.split('\n').length;
        expect(rows).toBe(options.limit)


    })

}
)