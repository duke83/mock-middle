var fs = require("fs");

var path = require("path");

var Drydock = require("./drydock");

var createMock = function (options) {
  options = options ? options : {};
  var mock = new Drydock({
    port: options.port || 1337,
    ip: options.ip || "0.0.0.0",
    verbose: true,//!!options.verbose,
    initialState: {},
    cors: true
  });
  mock.jsonRoute({
    name: "POST-cedsci-web6.test.ditd.census.gov/summaryLevelService",
    method: "POST",
    path: "/summaryLevelService",
    hostname: "cedsci-web6.test.ditd.census.gov",
    handlers: {
      "0-POST-cedsci-web6.test.ditd.census.gov/summaryLevelService": {
        description: "0-POST-cedsci-web6.test.ditd.census.gov/summaryLevelService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"request\\\":{\\\"facets\\\":[\\\"summaryLevels\\\"],\\\"geoIds\\\":[],\\\"topics\\\":[],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-cedsci-web6.test.ditd.census.gov%2FsummaryLevelService.json");
        }
      },
      "1-POST-cedsci-web6.test.ditd.census.gov/summaryLevelService": {
        description: "1-POST-cedsci-web6.test.ditd.census.gov/summaryLevelService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"request\\\":{\\\"facets\\\":[\\\"summaryLevels\\\"],\\\"geoIds\\\":[\\\"0100000US\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/1-POST-cedsci-web6.test.ditd.census.gov%2FsummaryLevelService.json");
        }
      },
      "2-POST-cedsci-web6.test.ditd.census.gov/summaryLevelService": {
        description: "2-POST-cedsci-web6.test.ditd.census.gov/summaryLevelService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"request\\\":{\\\"facets\\\":[\\\"summaryLevels\\\"],\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/2-POST-cedsci-web6.test.ditd.census.gov%2FsummaryLevelService.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-cedsci-web6.test.ditd.census.gov/facetService",
    method: "POST",
    path: "/facetService",
    hostname: "cedsci-web6.test.ditd.census.gov",
    handlers: {
      "0-POST-cedsci-web6.test.ditd.census.gov/facetService": {
        description: "0-POST-cedsci-web6.test.ditd.census.gov/facetService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\"],\\\"topics\\\":[],\\\"naicsCodes\\\":[],\\\"facets\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-cedsci-web6.test.ditd.census.gov%2FfacetService.json");
        }
      },
      "1-POST-cedsci-web6.test.ditd.census.gov/facetService": {
        description: "1-POST-cedsci-web6.test.ditd.census.gov/facetService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[],\\\"facets\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/1-POST-cedsci-web6.test.ditd.census.gov%2FfacetService.json");
        }
      },
      "2-POST-cedsci-web6.test.ditd.census.gov/facetService": {
        description: "2-POST-cedsci-web6.test.ditd.census.gov/facetService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[],\\\"facets\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/2-POST-cedsci-web6.test.ditd.census.gov%2FfacetService.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-cedsci-web6.test.ditd.census.gov/typeAheadService",
    method: "POST",
    path: "/typeAheadService",
    hostname: "cedsci-web6.test.ditd.census.gov",
    handlers: {
      "0-POST-cedsci-web6.test.ditd.census.gov/typeAheadService": {
        description: "0-POST-cedsci-web6.test.ditd.census.gov/typeAheadService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"request\\\":{\\\"text\\\":\\\"dav\\\",\\\"type\\\":\\\"geo\\\",\\\"geoIds\\\":[\\\"0100000US\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-cedsci-web6.test.ditd.census.gov%2FtypeAheadService.json");
        }
      },
      "1-POST-cedsci-web6.test.ditd.census.gov/typeAheadService": {
        description: "1-POST-cedsci-web6.test.ditd.census.gov/typeAheadService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"request\\\":{\\\"text\\\":\\\"davis\\\",\\\"type\\\":\\\"geo\\\",\\\"geoIds\\\":[\\\"0100000US\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/1-POST-cedsci-web6.test.ditd.census.gov%2FtypeAheadService.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-cedsci-web6.test.ditd.census.gov/tableService",
    method: "POST",
    path: "/tableService",
    hostname: "cedsci-web6.test.ditd.census.gov",
    handlers: {
      "0-POST-cedsci-web6.test.ditd.census.gov/tableService": {
        description: "0-POST-cedsci-web6.test.ditd.census.gov/tableService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"request\\\":{\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\"],\\\"topics\\\":[\\\"Age\\\"],\\\"naicsCodes\\\":[]}}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-cedsci-web6.test.ditd.census.gov%2FtableService.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-cedsci-web6.test.ditd.census.gov/renderService",
    method: "POST",
    path: "/renderService",
    hostname: "cedsci-web6.test.ditd.census.gov",
    handlers: {
      "0-POST-cedsci-web6.test.ditd.census.gov/renderService": {
        description: "0-POST-cedsci-web6.test.ditd.census.gov/renderService",
        requestQueryString: "[]",
        requestPostData: "{\"mimeType\":\"application/json;charset=utf-8\",\"params\":[],\"text\":\"{\\\"tableGlobalId\\\":\\\"dwc.ACSSF5Y2014.B01001\\\",\\\"geoIds\\\":[\\\"0100000US\\\",\\\"0500000US49011\\\"],\\\"naicsIds\\\":[\\\"11\\\",\\\"21\\\",\\\"22\\\",\\\"23\\\",\\\"42\\\",\\\"51\\\",\\\"52\\\",\\\"53\\\",\\\"54\\\",\\\"55\\\",\\\"56\\\",\\\"61\\\",\\\"62\\\",\\\"71\\\",\\\"72\\\",\\\"81\\\",\\\"99\\\",\\\"00\\\",\\\"31-33\\\",\\\"48-49\\\",\\\"44-45\\\"],\\\"startRow\\\":1,\\\"rowCount\\\":20,\\\"startColumn\\\":1,\\\"columnCount\\\":10,\\\"marginOfError\\\":false,\\\"thematicMapTransition\\\":false,\\\"includeFilterableDims\\\":true,\\\"enableSortControls\\\":true,\\\"mapSumLevels\\\":[\\\"040\\\",\\\"050\\\",\\\"160\\\",\\\"060\\\",\\\"140\\\",\\\"500\\\",\\\"310\\\",\\\"314\\\",\\\"020\\\",\\\"030\\\",\\\"150\\\"]}\"}",
        handler: function (request) {
          return require("./fixtures/0-POST-cedsci-web6.test.ditd.census.gov%2FrenderService.json");
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