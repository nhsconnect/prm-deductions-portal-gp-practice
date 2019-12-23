import portscanner from "portscanner";

const TEST_PORT = 5000;
const TEST_HOST = "127.0.0.1";

describe("server.js", () => {

    let stopServer;

    it("should stop the created service on port 5000", () => {

        stopServer = require("./server");

        return portscanner.checkPortStatus(TEST_PORT, TEST_HOST)
            .then(status => {
                expect(status).toMatch("open");
                stopServer();
            })
            .catch(err => {
                throw err;
            })
            .finally(() => {
                return expect(portscanner.checkPortStatus(TEST_PORT, TEST_HOST)).resolves.toEqual("closed");
            });
    });
});