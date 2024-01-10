import { ServerApp } from "./presentation/server-app"



describe('test App.ts', () => {


    test('should call server.run with values', async () => {
        
        const serverRunMock = jest.fn()
        
        ServerApp.run = serverRunMock;
        
        process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-n', 'test-file', '-d', 'test-dir']

        await import('./app')

        expect(serverRunMock).toHaveBeenCalledWith({
            "base": 10, 
            "fileDestination": "test-dir", 
            "fileName": "test-file", 
            "limit": 5, 
            "showTable": true
        })
    })
})