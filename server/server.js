const app  = require("./app.js");
const https = require('https');
const fs = require('fs');

if (process.env.USE_HTTP === 'true') {
  console.log('USE_HTTP is set to true, listening on 3000')
  const server = app.listen(3000);
}
else {
  console.log('USE_HTTP is not true, listening for https on 443')
  const server = https.createServer({
      key: fs.readFileSync('deductions.nhs.uk.key'),
      cert: fs.readFileSync('deductions.nhs.uk.crt')
  }, app).listen(443);
}

// Convenience method for testing should be used afterAll to ensure the service is torn down
const stopServer = () => {
    server.close();
};

module.exports = stopServer;
