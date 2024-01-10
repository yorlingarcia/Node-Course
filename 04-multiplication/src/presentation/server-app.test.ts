import { ServerApp } from "./server-app"



describe('server App', () => {


    test('should create serverAppp instance', () => {
        const serverApp = new ServerApp();

        expect(serverApp).toBeInstanceOf(ServerApp)
        expect(typeof ServerApp.run).toBe('function')
    })
})