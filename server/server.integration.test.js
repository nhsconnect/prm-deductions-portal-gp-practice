const portscanner = require("portscanner");

let TEST_PORT;
if (process.env.USE_HTTP === 'true') {
  TEST_PORT = 3000;
}
else {
  TEST_PORT = 443;
}
const TEST_HOST = "127.0.0.1";

describe("server.js", () => {

    let stopServer;

    it("should stop the created service", () => {

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
