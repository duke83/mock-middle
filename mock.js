var fs = require("fs");

var path = require("path");

var Drydock = require("drydock");

var createMock = function (options) {
  options = options ? options : {};
  var mock = new Drydock({
    port: options.port || 1337,
    ip: options.ip || "0.0.0.0",
    verbose: !!options.verbose,
    initialState: {},
    cors: true
  });
  mock.jsonRoute({
    name: "POST-localhost/typeAheadService",
    method: "POST",
    path: "/typeAheadService",
    hostname: "localhost",
    handlers: {
      "0-POST-localhost/typeAheadService": {
        description: "0-POST-localhost/typeAheadService",
        handler: function (request) {
          return require("./fixtures/0-POST-localhost%2FtypeAheadService.json");
        }
      },
      "1-POST-localhost/typeAheadService": {
        description: "1-POST-localhost/typeAheadService",
        handler: function (request) {
          return require("./fixtures/1-POST-localhost%2FtypeAheadService.json");
        }
      },
      "2-POST-localhost/typeAheadService": {
        description: "2-POST-localhost/typeAheadService",
        handler: function (request) {
          return require("./fixtures/2-POST-localhost%2FtypeAheadService.json");
        }
      }
    }
  });
  return mock;
};

if (require.main === module) {
  createMock(require("yargs").argv).start();
} else {
  module.exports = createMock;
}