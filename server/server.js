const app  = require("./app.js");
const https = require('https');
const fs = require('fs');

let server;
if (process.env.USE_HTTPS === 'true') {
  console.log('USE_HTTPS is true, listening for https on 443');
  server = https.createServer({
      key: fs.readFileSync('dev.patient-deductions.nhs.uk.key'),
      cert: fs.readFileSync('dev.patient-deductions.nhs.uk.crt')
  }, app).listen(443);
}
else {
  console.log('USE_HTTPS is not true, listening on 3000');
  server = app.listen(3000);
}

// Convenience method for testing should be used afterAll to ensure the service is torn down
const stopServer = () => {
    server.close();
};

module.exports = stopServer;
