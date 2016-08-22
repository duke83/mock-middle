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
    name: "k1",
    method: "GET",
    path: "/k1",
   // hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-POST-edi.test.ditd.census.gov/facetService": {
        description: "0-POST-edi.test.ditd.census.gov/facetService",
        handler: function (request) {
          return require("./fixtures/0-POST-edi.test.ditd.census.gov%2FfacetService.json");
        }
      },
    }
  });
  mock.jsonRoute({
    name: "POST-edi.test.ditd.census.gov/facetService",
    method: "POST",
    path: "/facetService",
    // hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-POST-edi.test.ditd.census.gov/facetService": {
        description: "0-POST-edi.test.ditd.census.gov/facetService",
        handler: function (request) {
          return require("./fixtures/0-POST-edi.test.ditd.census.gov%2FfacetService.json");
        }
      },
      "1-POST-edi.test.ditd.census.gov/facetService": {
        description: "1-POST-edi.test.ditd.census.gov/facetService",
        handler: function (request) {
          return require("./fixtures/1-POST-edi.test.ditd.census.gov%2FfacetService.json");
        }
      },
      "2-POST-edi.test.ditd.census.gov/facetService": {
        description: "2-POST-edi.test.ditd.census.gov/facetService",
        handler: function (request) {
          return require("./fixtures/2-POST-edi.test.ditd.census.gov%2FfacetService.json");
        }
      },
      "3-POST-edi.test.ditd.census.gov/facetService": {
        description: "3-POST-edi.test.ditd.census.gov/facetService",
        handler: function (request) {
          return require("./fixtures/3-POST-edi.test.ditd.census.gov%2FfacetService.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-edi.test.ditd.census.gov/summaryLevelService",
    method: "POST",
    path: "/summaryLevelService",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-POST-edi.test.ditd.census.gov/summaryLevelService": {
        description: "0-POST-edi.test.ditd.census.gov/summaryLevelService",
        handler: function (request) {
          return require("./fixtures/0-POST-edi.test.ditd.census.gov%2FsummaryLevelService.json");
        }
      },
      "1-POST-edi.test.ditd.census.gov/summaryLevelService": {
        description: "1-POST-edi.test.ditd.census.gov/summaryLevelService",
        handler: function (request) {
          return require("./fixtures/1-POST-edi.test.ditd.census.gov%2FsummaryLevelService.json");
        }
      },
      "2-POST-edi.test.ditd.census.gov/summaryLevelService": {
        description: "2-POST-edi.test.ditd.census.gov/summaryLevelService",
        handler: function (request) {
          return require("./fixtures/2-POST-edi.test.ditd.census.gov%2FsummaryLevelService.json");
        }
      },
      "3-POST-edi.test.ditd.census.gov/summaryLevelService": {
        description: "3-POST-edi.test.ditd.census.gov/summaryLevelService",
        handler: function (request) {
          return require("./fixtures/3-POST-edi.test.ditd.census.gov%2FsummaryLevelService.json");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/bower_components/fontawesome/fonts/fontawesome-webfont.woff2",
    method: "GET",
    path: "/cedsci/bower_components/fontawesome/fonts/fontawesome-webfont.woff2",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/bower_components/fontawesome/fonts/fontawesome-webfont.woff2": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/bower_components/fontawesome/fonts/fontawesome-webfont.woff2",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fbower_components%2Ffontawesome%2Ffonts%2Ffontawesome-webfont.woff2.html"), "utf8");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/test/data/relatedTablesScenario1.json",
    method: "GET",
    path: "/cedsci/test/data/relatedTablesScenario1.json",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/test/data/relatedTablesScenario1.json": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/test/data/relatedTablesScenario1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2FrelatedTablesScenario1.json.json");
        }
      },
      "1-GET-edi.test.ditd.census.gov/cedsci/test/data/relatedTablesScenario1.json": {
        description: "1-GET-edi.test.ditd.census.gov/cedsci/test/data/relatedTablesScenario1.json",
        handler: function (request) {
          return require("./fixtures/1-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2FrelatedTablesScenario1.json.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideFacts-S1.json",
    method: "GET",
    path: "/cedsci/test/data/quickFactsSideFacts-S1.json",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideFacts-S1.json": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideFacts-S1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2FquickFactsSideFacts-S1.json.json");
        }
      },
      "1-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideFacts-S1.json": {
        description: "1-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideFacts-S1.json",
        handler: function (request) {
          return require("./fixtures/1-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2FquickFactsSideFacts-S1.json.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideLinks-S1.json",
    method: "GET",
    path: "/cedsci/test/data/quickFactsSideLinks-S1.json",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideLinks-S1.json": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideLinks-S1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2FquickFactsSideLinks-S1.json.json");
        }
      },
      "1-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideLinks-S1.json": {
        description: "1-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsSideLinks-S1.json",
        handler: function (request) {
          return require("./fixtures/1-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2FquickFactsSideLinks-S1.json.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsTopFact-S1.json",
    method: "GET",
    path: "/cedsci/test/data/quickFactsTopFact-S1.json",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsTopFact-S1.json": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsTopFact-S1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2FquickFactsTopFact-S1.json.json");
        }
      },
      "1-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsTopFact-S1.json": {
        description: "1-GET-edi.test.ditd.census.gov/cedsci/test/data/quickFactsTopFact-S1.json",
        handler: function (request) {
          return require("./fixtures/1-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2FquickFactsTopFact-S1.json.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/test/data/trending-S1.json",
    method: "GET",
    path: "/cedsci/test/data/trending-S1.json",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/test/data/trending-S1.json": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/test/data/trending-S1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2Ftrending-S1.json.json");
        }
      },
      "1-GET-edi.test.ditd.census.gov/cedsci/test/data/trending-S1.json": {
        description: "1-GET-edi.test.ditd.census.gov/cedsci/test/data/trending-S1.json",
        handler: function (request) {
          return require("./fixtures/1-GET-edi.test.ditd.census.gov%2Fcedsci%2Ftest%2Fdata%2Ftrending-S1.json.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/quickAnswer",
    method: "GET",
    path: "/cedsci/quickAnswer",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/quickAnswer": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/quickAnswer",
        handler: function (request) {
          return require("./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2FquickAnswer.json");
        }
      },
      "1-GET-edi.test.ditd.census.gov/cedsci/quickAnswer": {
        description: "1-GET-edi.test.ditd.census.gov/cedsci/quickAnswer",
        handler: function (request) {
          return require("./fixtures/1-GET-edi.test.ditd.census.gov%2Fcedsci%2FquickAnswer.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/infoPanel",
    method: "GET",
    path: "/cedsci/infoPanel",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/infoPanel": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/infoPanel",
        handler: function (request) {
          return require("./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2FinfoPanel.json");
        }
      },
      "1-GET-edi.test.ditd.census.gov/cedsci/infoPanel": {
        description: "1-GET-edi.test.ditd.census.gov/cedsci/infoPanel",
        handler: function (request) {
          return require("./fixtures/1-GET-edi.test.ditd.census.gov%2Fcedsci%2FinfoPanel.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/webList",
    method: "GET",
    path: "/cedsci/webList",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/webList": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/webList",
        handler: function (request) {
          return require("./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2FwebList.json");
        }
      },
      "1-GET-edi.test.ditd.census.gov/cedsci/webList": {
        description: "1-GET-edi.test.ditd.census.gov/cedsci/webList",
        handler: function (request) {
          return require("./fixtures/1-GET-edi.test.ditd.census.gov%2Fcedsci%2FwebList.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-edi.test.ditd.census.gov/tableService",
    method: "POST",
    path: "/tableService",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-POST-edi.test.ditd.census.gov/tableService": {
        description: "0-POST-edi.test.ditd.census.gov/tableService",
        handler: function (request) {
          return require("./fixtures/0-POST-edi.test.ditd.census.gov%2FtableService.json");
        }
      },
      "1-POST-edi.test.ditd.census.gov/tableService": {
        description: "1-POST-edi.test.ditd.census.gov/tableService",
        handler: function (request) {
          return require("./fixtures/1-POST-edi.test.ditd.census.gov%2FtableService.json");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/views/searchResultsSidebar.html",
    method: "GET",
    path: "/cedsci/views/searchResultsSidebar.html",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/views/searchResultsSidebar.html": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/views/searchResultsSidebar.html",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fviews%2FsearchResultsSidebar.html.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/images/landing-standard-tab-on.png",
    method: "GET",
    path: "/cedsci/images/landing-standard-tab-on.png",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/images/landing-standard-tab-on.png": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/images/landing-standard-tab-on.png",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fimages%2Flanding-standard-tab-on.png.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/scripts/directives/relatedTools/relatedTools.html",
    method: "GET",
    path: "/cedsci/scripts/directives/relatedTools/relatedTools.html",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/relatedTools/relatedTools.html": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/relatedTools/relatedTools.html",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fscripts%2Fdirectives%2FrelatedTools%2FrelatedTools.html.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/scripts/directives/trending/trending.html",
    method: "GET",
    path: "/cedsci/scripts/directives/trending/trending.html",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/trending/trending.html": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/trending/trending.html",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fscripts%2Fdirectives%2Ftrending%2Ftrending.html.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/scripts/directives/infoPanel/infoPanel.html",
    method: "GET",
    path: "/cedsci/scripts/directives/infoPanel/infoPanel.html",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/infoPanel/infoPanel.html": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/infoPanel/infoPanel.html",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fscripts%2Fdirectives%2FinfoPanel%2FinfoPanel.html.html"), "utf8");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-edi.test.ditd.census.gov/renderService",
    method: "POST",
    path: "/renderService",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-POST-edi.test.ditd.census.gov/renderService": {
        description: "0-POST-edi.test.ditd.census.gov/renderService",
        handler: function (request) {
          return require("./fixtures/0-POST-edi.test.ditd.census.gov%2FrenderService.json");
        }
      },
      "1-POST-edi.test.ditd.census.gov/renderService": {
        description: "1-POST-edi.test.ditd.census.gov/renderService",
        handler: function (request) {
          return require("./fixtures/1-POST-edi.test.ditd.census.gov%2FrenderService.json");
        }
      },
      "2-POST-edi.test.ditd.census.gov/renderService": {
        description: "2-POST-edi.test.ditd.census.gov/renderService",
        handler: function (request) {
          return require("./fixtures/2-POST-edi.test.ditd.census.gov%2FrenderService.json");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/views/modals/tableViewModal.html",
    method: "GET",
    path: "/cedsci/views/modals/tableViewModal.html",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/views/modals/tableViewModal.html": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/views/modals/tableViewModal.html",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fviews%2Fmodals%2FtableViewModal.html.html"), "utf8");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/retrieveTableProperties",
    method: "GET",
    path: "/cedsci/retrieveTableProperties",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/retrieveTableProperties": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/retrieveTableProperties",
        handler: function (request) {
          return require("./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2FretrieveTableProperties.json");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/scripts/directives/filterDims/filterDims.html",
    method: "GET",
    path: "/cedsci/scripts/directives/filterDims/filterDims.html",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/filterDims/filterDims.html": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/filterDims/filterDims.html",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fscripts%2Fdirectives%2FfilterDims%2FfilterDims.html.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/scripts/directives/tableDisplay/tableDisplay.html",
    method: "GET",
    path: "/cedsci/scripts/directives/tableDisplay/tableDisplay.html",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/tableDisplay/tableDisplay.html": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/scripts/directives/tableDisplay/tableDisplay.html",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fscripts%2Fdirectives%2FtableDisplay%2FtableDisplay.html.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/views/modals/table/tableFootNoteSelection.html",
    method: "GET",
    path: "/cedsci/views/modals/table/tableFootNoteSelection.html",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/views/modals/table/tableFootNoteSelection.html": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/views/modals/table/tableFootNoteSelection.html",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fviews%2Fmodals%2Ftable%2FtableFootNoteSelection.html.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-edi.test.ditd.census.gov/cedsci/assets/transpose-transparent.png",
    method: "GET",
    path: "/cedsci/assets/transpose-transparent.png",
    hostname: "edi.test.ditd.census.gov",
    handlers: {
      "0-GET-edi.test.ditd.census.gov/cedsci/assets/transpose-transparent.png": {
        description: "0-GET-edi.test.ditd.census.gov/cedsci/assets/transpose-transparent.png",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-edi.test.ditd.census.gov%2Fcedsci%2Fassets%2Ftranspose-transparent.png.html"), "utf8");
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