const app = require('./lib/app');

module.exports.run = app;

const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});