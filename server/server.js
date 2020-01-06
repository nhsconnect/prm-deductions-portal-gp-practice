const app  = require("./app.js");
const https = require('https');
const fs = require('fs');

// Convenience method for testing should be used afterAll to ensure the service is torn down
const stopServer = () => {
    server.close();
};

const server = https.createServer({
    key: fs.readFileSync('deductions.nhs.uk.key'),
    cert: fs.readFileSync('deductions.nhs.uk.crt')
}, app).listen(443);

module.exports = stopServer;