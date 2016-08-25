var fs = require("fs");

var path = require("path");

var Drydock = require("./drydock");

var createMock = function (options) {
  options = options ? options : {};
  var mock = new Drydock({
    port: options.port || 1337,
    ip: options.ip || "0.0.0.0",
    verbose: true, //!!options.verbose,
    initialState: {},
    cors: true
  });
  mock.jsonRoute({
    name: "POST-localhost/summaryLevelService",
    method: "POST",
    path: "/summaryLevelService",
    hostname: "localhost",
  //  selectedHandler:"3-POST-localhost/summaryLevelService",
    handlers: {
      "0-POST-localhost/summaryLevelService": {
        description: "0-POST-localhost/summaryLevelService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"facets\\\":[\\\"summaryLevels\\\"],\\\"geoIds\\\":[],\\\"topics\\\":[],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-localhost%2FsummaryLevelService.json");
        }
      },
      "1-POST-localhost/summaryLevelService": {
        description: "1-POST-localhost/summaryLevelService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"facets\\\":[\\\"summaryLevels\\\"],\\\"geoIds\\\":[\\\"0100000US\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/1-POST-localhost%2FsummaryLevelService.json");
        }
      },
      "2-POST-localhost/summaryLevelService": {
        description: "2-POST-localhost/summaryLevelService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"facets\\\":[\\\"summaryLevels\\\"],\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/2-POST-localhost%2FsummaryLevelService.json");
        }
      },
      "3-POST-localhost/summaryLevelService": {
        description: "3-POST-localhost/summaryLevelService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"facets\\\":[\\\"summaryLevels\\\"],\\\"geoIdsxxx\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\",\\\"1600000US4967000\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/3-POST-localhost%2FsummaryLevelService.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-localhost/facetService",
    method: "POST",
    path: "/facetService",
    hostname: "localhost",
    //selectedHandler : "1-POST-localhost/facetService",
    handlers: {
      "0-POST-localhost/facetService": {
        description: "0-POST-localhost/facetService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\"],\\\"topics\\\":[],\\\"naicsCodes\\\":[],\\\"facets\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-localhost%2FfacetService.json");
        }
      },
      "1-POST-localhost/facetService": {
        description: "1-POST-localhost/facetService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[],\\\"facets\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/1-POST-localhost%2FfacetService.json");
        }
      },
      "2-POST-localhost/facetService": {
        description: "2-POST-localhost/facetService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[],\\\"facets\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/2-POST-localhost%2FfacetService.json");
        }
      },
      "3-POST-localhost/facetService": {
        description: "3-POST-localhost/facetService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\",\\\"1600000US4967000\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[],\\\"facets\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/3-POST-localhost%2FfacetService.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-localhost/typeAheadService",
    method: "POST",
    path: "/typeAheadService",
    hostname: "localhost",
    handlers: {
      "0-POST-localhost/typeAheadService": {
        description: "0-POST-localhost/typeAheadService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"text\\\":\\\"davis\\\",\\\"type\\\":\\\"geo\\\",\\\"geoIds\\\":[\\\"0100000US\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-localhost%2FtypeAheadService.json");
        }
      },
      "1-POST-localhost/typeAheadService": {
        description: "1-POST-localhost/typeAheadService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"text\\\":\\\"salt\\\",\\\"type\\\":\\\"geo\\\",\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/1-POST-localhost%2FtypeAheadService.json");
        }
      },
      "2-POST-localhost/typeAheadService": {
        description: "2-POST-localhost/typeAheadService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"text\\\":\\\"salt lake\\\",\\\"type\\\":\\\"geo\\\",\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/2-POST-localhost%2FtypeAheadService.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-localhost/tableService",
    method: "POST",
    path: "/tableService",
    hostname: "localhost",
    handlers: {
      "0-POST-localhost/tableService": {
        description: "0-POST-localhost/tableService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\",\\\"1600000US4967000\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-localhost%2FtableService.json");
        }
      }
    }
  });
   mock.jsonRoute({
    name: "k1",
    method: "GET",
    path: "/k1",
    hostname: "localhost",
    handlers: {
      "0-POST-localhost/tableService": {
        description: "0-POST-localhost/tableService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=UTF-8\",\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\",\\\"1600000US4967000\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-localhost%2FtableService.json");
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