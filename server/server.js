const app  = require("./app.js");

// Convenience method for testing should be used afterAll to ensure the service is torn down
const stopServer = () => {
    server.close();
};

const server = app.listen(5000);

module.exports = stopServer;