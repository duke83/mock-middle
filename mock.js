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
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/bootstrap/dist/css/bootstrap.css",
    method: "GET",
    path: "/cedsci/bower_components/bootstrap/dist/css/bootstrap.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/bootstrap/dist/css/bootstrap.css": {
        description: "0-GET-localhost/cedsci/bower_components/bootstrap/dist/css/bootstrap.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fbootstrap%2Fdist%2Fcss%2Fbootstrap.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/fontawesome/css/font-awesome.css",
    method: "GET",
    path: "/cedsci/bower_components/fontawesome/css/font-awesome.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/fontawesome/css/font-awesome.css": {
        description: "0-GET-localhost/cedsci/bower_components/fontawesome/css/font-awesome.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Ffontawesome%2Fcss%2Ffont-awesome.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/jqueryui-custom.css",
    method: "GET",
    path: "/cedsci/assets/jqueryui-custom.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/jqueryui-custom.css": {
        description: "0-GET-localhost/cedsci/assets/jqueryui-custom.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fjqueryui-custom.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/style.css",
    method: "GET",
    path: "/cedsci/assets/style.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/style.css": {
        description: "0-GET-localhost/cedsci/assets/style.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fstyle.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/styleNav.css",
    method: "GET",
    path: "/cedsci/assets/styleNav.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/styleNav.css": {
        description: "0-GET-localhost/cedsci/assets/styleNav.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2FstyleNav.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/layout.css",
    method: "GET",
    path: "/cedsci/assets/layout.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/layout.css": {
        description: "0-GET-localhost/cedsci/assets/layout.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Flayout.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/text.css",
    method: "GET",
    path: "/cedsci/assets/text.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/text.css": {
        description: "0-GET-localhost/cedsci/assets/text.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Ftext.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/header.css",
    method: "GET",
    path: "/cedsci/assets/header.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/header.css": {
        description: "0-GET-localhost/cedsci/assets/header.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fheader.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/top.css",
    method: "GET",
    path: "/cedsci/assets/top.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/top.css": {
        description: "0-GET-localhost/cedsci/assets/top.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Ftop.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/left.css",
    method: "GET",
    path: "/cedsci/assets/left.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/left.css": {
        description: "0-GET-localhost/cedsci/assets/left.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fleft.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/middle.css",
    method: "GET",
    path: "/cedsci/assets/middle.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/middle.css": {
        description: "0-GET-localhost/cedsci/assets/middle.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fmiddle.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/right.css",
    method: "GET",
    path: "/cedsci/assets/right.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/right.css": {
        description: "0-GET-localhost/cedsci/assets/right.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fright.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/contextual.css",
    method: "GET",
    path: "/cedsci/assets/contextual.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/contextual.css": {
        description: "0-GET-localhost/cedsci/assets/contextual.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fcontextual.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/bread.css",
    method: "GET",
    path: "/cedsci/assets/bread.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/bread.css": {
        description: "0-GET-localhost/cedsci/assets/bread.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fbread.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/footer.css",
    method: "GET",
    path: "/cedsci/assets/footer.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/footer.css": {
        description: "0-GET-localhost/cedsci/assets/footer.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Ffooter.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/search.css",
    method: "GET",
    path: "/cedsci/assets/search.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/search.css": {
        description: "0-GET-localhost/cedsci/assets/search.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fsearch.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/tabs.css",
    method: "GET",
    path: "/cedsci/assets/tabs.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/tabs.css": {
        description: "0-GET-localhost/cedsci/assets/tabs.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Ftabs.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/home.css",
    method: "GET",
    path: "/cedsci/assets/home.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/home.css": {
        description: "0-GET-localhost/cedsci/assets/home.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fhome.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/tundra.css",
    method: "GET",
    path: "/cedsci/assets/tundra.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/tundra.css": {
        description: "0-GET-localhost/cedsci/assets/tundra.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Ftundra.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/dist/styles/bundle.css",
    method: "GET",
    path: "/cedsci/dist/styles/bundle.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/dist/styles/bundle.css": {
        description: "0-GET-localhost/cedsci/dist/styles/bundle.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fdist%2Fstyles%2Fbundle.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/animate.css",
    method: "GET",
    path: "/cedsci/assets/animate.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/animate.css": {
        description: "0-GET-localhost/cedsci/assets/animate.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fanimate.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/aff-tables.css",
    method: "GET",
    path: "/cedsci/assets/aff-tables.css",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/aff-tables.css": {
        description: "0-GET-localhost/cedsci/assets/aff-tables.css",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Faff-tables.css.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/jquery.js",
    method: "GET",
    path: "/cedsci/assets/jquery.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/jquery.js": {
        description: "0-GET-localhost/cedsci/assets/jquery.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fjquery.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/mobile-accordion.js",
    method: "GET",
    path: "/cedsci/assets/mobile-accordion.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/mobile-accordion.js": {
        description: "0-GET-localhost/cedsci/assets/mobile-accordion.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fmobile-accordion.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/shadowbox.js",
    method: "GET",
    path: "/cedsci/assets/shadowbox.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/shadowbox.js": {
        description: "0-GET-localhost/cedsci/assets/shadowbox.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fshadowbox.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/default-loader.gif",
    method: "GET",
    path: "/cedsci/assets/default-loader.gif",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/default-loader.gif": {
        description: "0-GET-localhost/cedsci/assets/default-loader.gif",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fdefault-loader.gif.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/modernizr.js",
    method: "GET",
    path: "/cedsci/assets/modernizr.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/modernizr.js": {
        description: "0-GET-localhost/cedsci/assets/modernizr.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fmodernizr.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/bootstrap.js",
    method: "GET",
    path: "/cedsci/assets/bootstrap.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/bootstrap.js": {
        description: "0-GET-localhost/cedsci/assets/bootstrap.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fbootstrap.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/matchMedia-polyfill.js",
    method: "GET",
    path: "/cedsci/assets/matchMedia-polyfill.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/matchMedia-polyfill.js": {
        description: "0-GET-localhost/cedsci/assets/matchMedia-polyfill.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2FmatchMedia-polyfill.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/jquery.debouncedresize.js",
    method: "GET",
    path: "/cedsci/assets/jquery.debouncedresize.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/jquery.debouncedresize.js": {
        description: "0-GET-localhost/cedsci/assets/jquery.debouncedresize.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fjquery.debouncedresize.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/picturefill.js",
    method: "GET",
    path: "/cedsci/assets/picturefill.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/picturefill.js": {
        description: "0-GET-localhost/cedsci/assets/picturefill.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fpicturefill.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/jsapi",
    method: "GET",
    path: "/cedsci/assets/jsapi",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/jsapi": {
        description: "0-GET-localhost/cedsci/assets/jsapi",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Fjsapi.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/localnavigation.js",
    method: "GET",
    path: "/cedsci/assets/localnavigation.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/localnavigation.js": {
        description: "0-GET-localhost/cedsci/assets/localnavigation.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Flocalnavigation.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/lodash/lodash.js",
    method: "GET",
    path: "/cedsci/bower_components/lodash/lodash.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/lodash/lodash.js": {
        description: "0-GET-localhost/cedsci/bower_components/lodash/lodash.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Flodash%2Flodash.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/numeraljs/numeral.js",
    method: "GET",
    path: "/cedsci/bower_components/numeraljs/numeral.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/numeraljs/numeral.js": {
        description: "0-GET-localhost/cedsci/bower_components/numeraljs/numeral.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fnumeraljs%2Fnumeral.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/string/dist/string.js",
    method: "GET",
    path: "/cedsci/bower_components/string/dist/string.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/string/dist/string.js": {
        description: "0-GET-localhost/cedsci/bower_components/string/dist/string.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fstring%2Fdist%2Fstring.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/momentjs/moment.js",
    method: "GET",
    path: "/cedsci/bower_components/momentjs/moment.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/momentjs/moment.js": {
        description: "0-GET-localhost/cedsci/bower_components/momentjs/moment.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fmomentjs%2Fmoment.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/spinjs/spin.js",
    method: "GET",
    path: "/cedsci/bower_components/spinjs/spin.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/spinjs/spin.js": {
        description: "0-GET-localhost/cedsci/bower_components/spinjs/spin.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fspinjs%2Fspin.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/angularjs/angular.js",
    method: "GET",
    path: "/cedsci/bower_components/angularjs/angular.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/angularjs/angular.js": {
        description: "0-GET-localhost/cedsci/bower_components/angularjs/angular.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fangularjs%2Fangular.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/angular-sanitize/angular-sanitize.js",
    method: "GET",
    path: "/cedsci/bower_components/angular-sanitize/angular-sanitize.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/angular-sanitize/angular-sanitize.js": {
        description: "0-GET-localhost/cedsci/bower_components/angular-sanitize/angular-sanitize.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fangular-sanitize%2Fangular-sanitize.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/angular-animate/angular-animate.js",
    method: "GET",
    path: "/cedsci/bower_components/angular-animate/angular-animate.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/angular-animate/angular-animate.js": {
        description: "0-GET-localhost/cedsci/bower_components/angular-animate/angular-animate.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fangular-animate%2Fangular-animate.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/angular-ui/build/angular-ui.js",
    method: "GET",
    path: "/cedsci/bower_components/angular-ui/build/angular-ui.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/angular-ui/build/angular-ui.js": {
        description: "0-GET-localhost/cedsci/bower_components/angular-ui/build/angular-ui.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fangular-ui%2Fbuild%2Fangular-ui.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
    method: "GET",
    path: "/cedsci/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/angular-bootstrap/ui-bootstrap-tpls.js": {
        description: "0-GET-localhost/cedsci/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fangular-bootstrap%2Fui-bootstrap-tpls.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/angular-ui-router/release/angular-ui-router.js",
    method: "GET",
    path: "/cedsci/bower_components/angular-ui-router/release/angular-ui-router.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/angular-ui-router/release/angular-ui-router.js": {
        description: "0-GET-localhost/cedsci/bower_components/angular-ui-router/release/angular-ui-router.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fangular-ui-router%2Frelease%2Fangular-ui-router.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/angular-spinner/angular-spinner.js",
    method: "GET",
    path: "/cedsci/bower_components/angular-spinner/angular-spinner.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/angular-spinner/angular-spinner.js": {
        description: "0-GET-localhost/cedsci/bower_components/angular-spinner/angular-spinner.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fangular-spinner%2Fangular-spinner.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/lib/init.js",
    method: "GET",
    path: "/map/lib/init.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/lib/init.js": {
        description: "0-GET-localhost/map/lib/init.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Flib%2Finit.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/dist/scripts/bundle.js",
    method: "GET",
    path: "/cedsci/dist/scripts/bundle.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/dist/scripts/bundle.js": {
        description: "0-GET-localhost/cedsci/dist/scripts/bundle.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fdist%2Fscripts%2Fbundle.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-assets.adobedtm.com/526d5084b7f8f688ea81a3aba09755d76a81f8e8/s-code-contents-6eafcaf24c53a8340cb08ca3a89da5a57f80a8cb-staging.js",
    method: "GET",
    path: "/526d5084b7f8f688ea81a3aba09755d76a81f8e8/s-code-contents-6eafcaf24c53a8340cb08ca3a89da5a57f80a8cb-staging.js",
    hostname: "assets.adobedtm.com",
    handlers: {
      "0-GET-assets.adobedtm.com/526d5084b7f8f688ea81a3aba09755d76a81f8e8/s-code-contents-6eafcaf24c53a8340cb08ca3a89da5a57f80a8cb-staging.js": {
        description: "0-GET-assets.adobedtm.com/526d5084b7f8f688ea81a3aba09755d76a81f8e8/s-code-contents-6eafcaf24c53a8340cb08ca3a89da5a57f80a8cb-staging.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-assets.adobedtm.com%2F526d5084b7f8f688ea81a3aba09755d76a81f8e8%2Fs-code-contents-6eafcaf24c53a8340cb08ca3a89da5a57f80a8cb-staging.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/fontawesome/fonts/fontawesome-webfont.woff2",
    method: "GET",
    path: "/cedsci/bower_components/fontawesome/fonts/fontawesome-webfont.woff2",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/fontawesome/fonts/fontawesome-webfont.woff2": {
        description: "0-GET-localhost/cedsci/bower_components/fontawesome/fonts/fontawesome-webfont.woff2",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Ffontawesome%2Ffonts%2Ffontawesome-webfont.woff2.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/nls/jsapi_en-us.js",
    method: "GET",
    path: "/3.16/esri/nls/jsapi_en-us.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/nls/jsapi_en-us.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/nls/jsapi_en-us.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Fnls%2Fjsapi_en-us.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/mapper.js",
    method: "GET",
    path: "/map/mapper/mapper.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/mapper.js": {
        description: "0-GET-localhost/map/mapper/mapper.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2Fmapper.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/dojox/gfx/svg.js",
    method: "GET",
    path: "/3.16/dojox/gfx/svg.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/dojox/gfx/svg.js": {
        description: "0-GET-js.arcgis.com/3.16/dojox/gfx/svg.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fdojox%2Fgfx%2Fsvg.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/test/data/state_geoids.json",
    method: "GET",
    path: "/cedsci/test/data/state_geoids.json",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/test/data/state_geoids.json": {
        description: "0-GET-localhost/cedsci/test/data/state_geoids.json",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Ftest%2Fdata%2Fstate_geoids.json.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/test/data/summaryLevels.json",
    method: "GET",
    path: "/cedsci/test/data/summaryLevels.json",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/test/data/summaryLevels.json": {
        description: "0-GET-localhost/cedsci/test/data/summaryLevels.json",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Ftest%2Fdata%2FsummaryLevels.json.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/buildInfo",
    method: "GET",
    path: "/cedsci/buildInfo",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/buildInfo": {
        description: "0-GET-localhost/cedsci/buildInfo",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2FbuildInfo.html"), "utf8"),
            type: "text/html",
            code: 404
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/appLoadCurtain/appLoadCurtain.html",
    method: "GET",
    path: "/cedsci/scripts/directives/appLoadCurtain/appLoadCurtain.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/appLoadCurtain/appLoadCurtain.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/appLoadCurtain/appLoadCurtain.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FappLoadCurtain%2FappLoadCurtain.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/tableDownloader/tableDownloader.html",
    method: "GET",
    path: "/cedsci/scripts/directives/tableDownloader/tableDownloader.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/tableDownloader/tableDownloader.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/tableDownloader/tableDownloader.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FtableDownloader%2FtableDownloader.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/config",
    method: "GET",
    path: "/cedsci/config",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/config": {
        description: "0-GET-localhost/cedsci/config",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fconfig.html"), "utf8"),
            type: "text/html",
            code: 404
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/test/data/state-fips.json",
    method: "GET",
    path: "/cedsci/test/data/state-fips.json",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/test/data/state-fips.json": {
        description: "0-GET-localhost/cedsci/test/data/state-fips.json",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Ftest%2Fdata%2Fstate-fips.json.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-localhost/summaryLevelService",
    method: "POST",
    path: "/summaryLevelService",
    hostname: "localhost",
    handlers: {
      "0-POST-localhost/summaryLevelService": {
        description: "0-POST-localhost/summaryLevelService",
        handler: function (request) {
          return require("./fixtures/0-POST-localhost%2FsummaryLevelService.json");
        }
      },
      "1-POST-localhost/summaryLevelService": {
        description: "1-POST-localhost/summaryLevelService",
        handler: function (request) {
          return require("./fixtures/1-POST-localhost%2FsummaryLevelService.json");
        }
      },
      "2-POST-localhost/summaryLevelService": {
        description: "2-POST-localhost/summaryLevelService",
        handler: function (request) {
          return require("./fixtures/2-POST-localhost%2FsummaryLevelService.json");
        }
      },
      "3-POST-localhost/summaryLevelService": {
        description: "3-POST-localhost/summaryLevelService",
        handler: function (request) {
          return require("./fixtures/3-POST-localhost%2FsummaryLevelService.json");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/views/header.html",
    method: "GET",
    path: "/cedsci/views/header.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/views/header.html": {
        description: "0-GET-localhost/cedsci/views/header.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fviews%2Fheader.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/views/mainContent.html",
    method: "GET",
    path: "/cedsci/views/mainContent.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/views/mainContent.html": {
        description: "0-GET-localhost/cedsci/views/mainContent.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fviews%2FmainContent.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/views/footer.html",
    method: "GET",
    path: "/cedsci/views/footer.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/views/footer.html": {
        description: "0-GET-localhost/cedsci/views/footer.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fviews%2Ffooter.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/views/dataExplorer.html",
    method: "GET",
    path: "/cedsci/views/dataExplorer.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/views/dataExplorer.html": {
        description: "0-GET-localhost/cedsci/views/dataExplorer.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fviews%2FdataExplorer.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-censusbureau.d1.sc.omtrdc.net/b/ss/cebucensusglobaldev,,/1/JS-1.5.1-D6I2/s6585877504721",
    method: "GET",
    path: "/b/ss/cebucensusglobaldev,,/1/JS-1.5.1-D6I2/s6585877504721",
    hostname: "censusbureau.d1.sc.omtrdc.net",
    handlers: {
      "0-GET-censusbureau.d1.sc.omtrdc.net/b/ss/cebucensusglobaldev,,/1/JS-1.5.1-D6I2/s6585877504721": {
        description: "0-GET-censusbureau.d1.sc.omtrdc.net/b/ss/cebucensusglobaldev,,/1/JS-1.5.1-D6I2/s6585877504721",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-censusbureau.d1.sc.omtrdc.net%2Fb%2Fss%2Fcebucensusglobaldev%2C%2C%2F1%2FJS-1.5.1-D6I2%2Fs6585877504721.html"), "utf8");
        }
      },
      "1-GET-censusbureau.d1.sc.omtrdc.net/b/ss/cebucensusglobaldev,,/1/JS-1.5.1-D6I2/s6585877504721": {
        description: "1-GET-censusbureau.d1.sc.omtrdc.net/b/ss/cebucensusglobaldev,,/1/JS-1.5.1-D6I2/s6585877504721",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/1-GET-censusbureau.d1.sc.omtrdc.net%2Fb%2Fss%2Fcebucensusglobaldev%2C%2C%2F1%2FJS-1.5.1-D6I2%2Fs6585877504721.html"), "utf8"),
            type: "text/html",
            code: 302
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/images/census-logo-white.png",
    method: "GET",
    path: "/cedsci/images/census-logo-white.png",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/images/census-logo-white.png": {
        description: "0-GET-localhost/cedsci/images/census-logo-white.png",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fimages%2Fcensus-logo-white.png.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/yourSelections/yourSelections.html",
    method: "GET",
    path: "/cedsci/scripts/directives/yourSelections/yourSelections.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/yourSelections/yourSelections.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/yourSelections/yourSelections.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FyourSelections%2FyourSelections.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/refineSearch/refineSearch.html",
    method: "GET",
    path: "/cedsci/scripts/directives/refineSearch/refineSearch.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/refineSearch/refineSearch.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/refineSearch/refineSearch.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FrefineSearch%2FrefineSearch.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/topicExplorer/topicExplorer.html",
    method: "GET",
    path: "/cedsci/scripts/directives/topicExplorer/topicExplorer.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/topicExplorer/topicExplorer.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/topicExplorer/topicExplorer.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FtopicExplorer%2FtopicExplorer.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/geoSelectionMapModal/geoSelectionMapModal.html",
    method: "GET",
    path: "/cedsci/scripts/directives/geoSelectionMapModal/geoSelectionMapModal.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/geoSelectionMapModal/geoSelectionMapModal.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/geoSelectionMapModal/geoSelectionMapModal.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FgeoSelectionMapModal%2FgeoSelectionMapModal.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/moreGeographiesModal/moreGeographiesModal.html",
    method: "GET",
    path: "/cedsci/scripts/directives/moreGeographiesModal/moreGeographiesModal.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/moreGeographiesModal/moreGeographiesModal.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/moreGeographiesModal/moreGeographiesModal.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FmoreGeographiesModal%2FmoreGeographiesModal.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/naicsExplorer/naicsExplorer.html",
    method: "GET",
    path: "/cedsci/scripts/directives/naicsExplorer/naicsExplorer.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/naicsExplorer/naicsExplorer.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/naicsExplorer/naicsExplorer.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FnaicsExplorer%2FnaicsExplorer.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/keyWords/keyWords.html",
    method: "GET",
    path: "/cedsci/scripts/directives/keyWords/keyWords.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/keyWords/keyWords.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/keyWords/keyWords.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FkeyWords%2FkeyWords.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/views/searchResults.html",
    method: "GET",
    path: "/cedsci/views/searchResults.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/views/searchResults.html": {
        description: "0-GET-localhost/cedsci/views/searchResults.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fviews%2FsearchResults.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.jsonRoute({
    name: "POST-localhost/facetService",
    method: "POST",
    path: "/facetService",
    hostname: "localhost",
    handlers: {
      "0-POST-localhost/facetService": {
        description: "0-POST-localhost/facetService",
        handler: function (request) {
          return require("./fixtures/0-POST-localhost%2FfacetService.json");
        }
      },
      "1-POST-localhost/facetService": {
        description: "1-POST-localhost/facetService",
        handler: function (request) {
          return require("./fixtures/1-POST-localhost%2FfacetService.json");
        }
      },
      "2-POST-localhost/facetService": {
        description: "2-POST-localhost/facetService",
        handler: function (request) {
          return require("./fixtures/2-POST-localhost%2FfacetService.json");
        }
      },
      "3-POST-localhost/facetService": {
        description: "3-POST-localhost/facetService",
        handler: function (request) {
          return require("./fixtures/3-POST-localhost%2FfacetService.json");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/Utility.js",
    method: "GET",
    path: "/map/mapper/Utility.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/Utility.js": {
        description: "0-GET-localhost/map/mapper/Utility.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2FUtility.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/MapperConfig.js",
    method: "GET",
    path: "/map/mapper/MapperConfig.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/MapperConfig.js": {
        description: "0-GET-localhost/map/mapper/MapperConfig.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2FMapperConfig.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/ThematicTask02.js",
    method: "GET",
    path: "/map/mapper/ThematicTask02.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/ThematicTask02.js": {
        description: "0-GET-localhost/map/mapper/ThematicTask02.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2FThematicTask02.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/HighlightTask.js",
    method: "GET",
    path: "/map/mapper/HighlightTask.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/HighlightTask.js": {
        description: "0-GET-localhost/map/mapper/HighlightTask.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2FHighlightTask.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/SelectionTask.js",
    method: "GET",
    path: "/map/mapper/SelectionTask.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/SelectionTask.js": {
        description: "0-GET-localhost/map/mapper/SelectionTask.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2FSelectionTask.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/PrintingTask.js",
    method: "GET",
    path: "/map/mapper/PrintingTask.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/PrintingTask.js": {
        description: "0-GET-localhost/map/mapper/PrintingTask.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2FPrintingTask.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/RefLayer.js",
    method: "GET",
    path: "/map/mapper/RefLayer.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/RefLayer.js": {
        description: "0-GET-localhost/map/mapper/RefLayer.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2FRefLayer.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/dijit/Scalebar.js",
    method: "GET",
    path: "/3.16/esri/dijit/Scalebar.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/dijit/Scalebar.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/dijit/Scalebar.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Fdijit%2FScalebar.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/toolbars/draw.js",
    method: "GET",
    path: "/3.16/esri/toolbars/draw.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/toolbars/draw.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/toolbars/draw.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftoolbars%2Fdraw.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/dojox/gfx/filters.js",
    method: "GET",
    path: "/3.16/dojox/gfx/filters.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/dojox/gfx/filters.js": {
        description: "0-GET-js.arcgis.com/3.16/dojox/gfx/filters.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fdojox%2Fgfx%2Ffilters.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/dojox/gfx/svgext.js",
    method: "GET",
    path: "/3.16/dojox/gfx/svgext.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/dojox/gfx/svgext.js": {
        description: "0-GET-js.arcgis.com/3.16/dojox/gfx/svgext.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fdojox%2Fgfx%2Fsvgext.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/topicResultsSelectionList/topicResultsSelectionList.html",
    method: "GET",
    path: "/cedsci/scripts/directives/topicResultsSelectionList/topicResultsSelectionList.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/topicResultsSelectionList/topicResultsSelectionList.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/topicResultsSelectionList/topicResultsSelectionList.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FtopicResultsSelectionList%2FtopicResultsSelectionList.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/resultsLocationSelectionList/resultsLocationSelectionList.html",
    method: "GET",
    path: "/cedsci/scripts/directives/resultsLocationSelectionList/resultsLocationSelectionList.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/resultsLocationSelectionList/resultsLocationSelectionList.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/resultsLocationSelectionList/resultsLocationSelectionList.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FresultsLocationSelectionList%2FresultsLocationSelectionList.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/resultsFacetSelectionList/resultsFacetSelectionList.html",
    method: "GET",
    path: "/cedsci/scripts/directives/resultsFacetSelectionList/resultsFacetSelectionList.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/resultsFacetSelectionList/resultsFacetSelectionList.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/resultsFacetSelectionList/resultsFacetSelectionList.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FresultsFacetSelectionList%2FresultsFacetSelectionList.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/resultsNaicsSelectionList/resultsNaicsSelectionList.html",
    method: "GET",
    path: "/cedsci/scripts/directives/resultsNaicsSelectionList/resultsNaicsSelectionList.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/resultsNaicsSelectionList/resultsNaicsSelectionList.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/resultsNaicsSelectionList/resultsNaicsSelectionList.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FresultsNaicsSelectionList%2FresultsNaicsSelectionList.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/assets/tail-spin.svg",
    method: "GET",
    path: "/cedsci/assets/tail-spin.svg",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/assets/tail-spin.svg": {
        description: "0-GET-localhost/cedsci/assets/tail-spin.svg",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fassets%2Ftail-spin.svg.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/quickAnswerTop/quickAnswerTop.html",
    method: "GET",
    path: "/cedsci/scripts/directives/quickAnswerTop/quickAnswerTop.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/quickAnswerTop/quickAnswerTop.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/quickAnswerTop/quickAnswerTop.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FquickAnswerTop%2FquickAnswerTop.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/currentKeyWords/currentKeyWords.html",
    method: "GET",
    path: "/cedsci/scripts/directives/currentKeyWords/currentKeyWords.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/currentKeyWords/currentKeyWords.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/currentKeyWords/currentKeyWords.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FcurrentKeyWords%2FcurrentKeyWords.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/searchResults/searchResultsItem/searchResultsItem.tpl.html",
    method: "GET",
    path: "/cedsci/scripts/directives/searchResults/searchResultsItem/searchResultsItem.tpl.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/searchResults/searchResultsItem/searchResultsItem.tpl.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/searchResults/searchResultsItem/searchResultsItem.tpl.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FsearchResults%2FsearchResultsItem%2FsearchResultsItem.tpl.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/webList/webList.html",
    method: "GET",
    path: "/cedsci/scripts/directives/webList/webList.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/webList/webList.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/webList/webList.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FwebList%2FwebList.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/imageList/imageList.html",
    method: "GET",
    path: "/cedsci/scripts/directives/imageList/imageList.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/imageList/imageList.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/imageList/imageList.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FimageList%2FimageList.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/videoList/videoList.html",
    method: "GET",
    path: "/cedsci/scripts/directives/videoList/videoList.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/videoList/videoList.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/videoList/videoList.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FvideoList%2FvideoList.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/views/searchResultsSidebar.html",
    method: "GET",
    path: "/cedsci/views/searchResultsSidebar.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/views/searchResultsSidebar.html": {
        description: "0-GET-localhost/cedsci/views/searchResultsSidebar.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fviews%2FsearchResultsSidebar.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/resultsFlyout/resultsFlyout.html",
    method: "GET",
    path: "/cedsci/scripts/directives/resultsFlyout/resultsFlyout.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/resultsFlyout/resultsFlyout.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/resultsFlyout/resultsFlyout.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FresultsFlyout%2FresultsFlyout.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/stateFlyoutList/stateFlyoutList.html",
    method: "GET",
    path: "/cedsci/scripts/directives/stateFlyoutList/stateFlyoutList.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/stateFlyoutList/stateFlyoutList.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/stateFlyoutList/stateFlyoutList.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FstateFlyoutList%2FstateFlyoutList.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/GeographyLookup/GeographyLookUp.html",
    method: "GET",
    path: "/cedsci/scripts/directives/GeographyLookup/GeographyLookUp.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/GeographyLookup/GeographyLookUp.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/GeographyLookup/GeographyLookUp.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FGeographyLookup%2FGeographyLookUp.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/moreGeographiesModalResult/moreGeographiesModalResult.html",
    method: "GET",
    path: "/cedsci/scripts/directives/moreGeographiesModalResult/moreGeographiesModalResult.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/moreGeographiesModalResult/moreGeographiesModalResult.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/moreGeographiesModalResult/moreGeographiesModalResult.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FmoreGeographiesModalResult%2FmoreGeographiesModalResult.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/searchResults/openAsButton/openAsButton.tpl.html",
    method: "GET",
    path: "/cedsci/scripts/directives/searchResults/openAsButton/openAsButton.tpl.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/searchResults/openAsButton/openAsButton.tpl.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/searchResults/openAsButton/openAsButton.tpl.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FsearchResults%2FopenAsButton%2FopenAsButton.tpl.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/infoPanel/infoPanel.html",
    method: "GET",
    path: "/cedsci/scripts/directives/infoPanel/infoPanel.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/infoPanel/infoPanel.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/infoPanel/infoPanel.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FinfoPanel%2FinfoPanel.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/relatedTools/relatedTools.html",
    method: "GET",
    path: "/cedsci/scripts/directives/relatedTools/relatedTools.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/relatedTools/relatedTools.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/relatedTools/relatedTools.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FrelatedTools%2FrelatedTools.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/trending/trending.html",
    method: "GET",
    path: "/cedsci/scripts/directives/trending/trending.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/trending/trending.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/trending/trending.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2Ftrending%2Ftrending.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/config/TigerwebConfig.js",
    method: "GET",
    path: "/map/mapper/config/TigerwebConfig.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/config/TigerwebConfig.js": {
        description: "0-GET-localhost/map/mapper/config/TigerwebConfig.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2Fconfig%2FTigerwebConfig.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/config/CedsciDevConfig.js",
    method: "GET",
    path: "/map/mapper/config/CedsciDevConfig.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/config/CedsciDevConfig.js": {
        description: "0-GET-localhost/map/mapper/config/CedsciDevConfig.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2Fconfig%2FCedsciDevConfig.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/dijit/Legend.js",
    method: "GET",
    path: "/3.16/esri/dijit/Legend.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/dijit/Legend.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/dijit/Legend.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Fdijit%2FLegend.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/PrintParameters.js",
    method: "GET",
    path: "/3.16/esri/tasks/PrintParameters.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/PrintParameters.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/PrintParameters.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FPrintParameters.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/PrintTask.js",
    method: "GET",
    path: "/3.16/esri/tasks/PrintTask.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/PrintTask.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/PrintTask.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FPrintTask.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/PrintTemplate.js",
    method: "GET",
    path: "/3.16/esri/tasks/PrintTemplate.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/PrintTemplate.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/PrintTemplate.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FPrintTemplate.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/map/mapper/reflayer/tigerweb/TigerWebRefLayer.js",
    method: "GET",
    path: "/map/mapper/reflayer/tigerweb/TigerWebRefLayer.js",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/map/mapper/reflayer/tigerweb/TigerWebRefLayer.js": {
        description: "0-GET-localhost/map/mapper/reflayer/tigerweb/TigerWebRefLayer.js",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fmap%2Fmapper%2Freflayer%2Ftigerweb%2FTigerWebRefLayer.js.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/toolbars/_toolbar.js",
    method: "GET",
    path: "/3.16/esri/toolbars/_toolbar.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/toolbars/_toolbar.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/toolbars/_toolbar.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftoolbars%2F_toolbar.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/scripts/directives/searchResults/downloadButton/downloadButton.tpl.html",
    method: "GET",
    path: "/cedsci/scripts/directives/searchResults/downloadButton/downloadButton.tpl.html",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/scripts/directives/searchResults/downloadButton/downloadButton.tpl.html": {
        description: "0-GET-localhost/cedsci/scripts/directives/searchResults/downloadButton/downloadButton.tpl.html",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fscripts%2Fdirectives%2FsearchResults%2FdownloadButton%2FdownloadButton.tpl.html.html"), "utf8"),
            type: "text/html",
            code: 304
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/Geoprocessor.js",
    method: "GET",
    path: "/3.16/esri/tasks/Geoprocessor.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/Geoprocessor.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/Geoprocessor.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FGeoprocessor.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/dojox/gfx/canvas.js",
    method: "GET",
    path: "/3.16/dojox/gfx/canvas.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/dojox/gfx/canvas.js": {
        description: "0-GET-js.arcgis.com/3.16/dojox/gfx/canvas.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fdojox%2Fgfx%2Fcanvas.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/dojox/json/query.js",
    method: "GET",
    path: "/3.16/dojox/json/query.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/dojox/json/query.js": {
        description: "0-GET-js.arcgis.com/3.16/dojox/json/query.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fdojox%2Fjson%2Fquery.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/LegendLayer.js",
    method: "GET",
    path: "/3.16/esri/tasks/LegendLayer.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/LegendLayer.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/LegendLayer.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FLegendLayer.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/JobInfo.js",
    method: "GET",
    path: "/3.16/esri/tasks/JobInfo.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/JobInfo.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/JobInfo.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FJobInfo.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/GPMessage.js",
    method: "GET",
    path: "/3.16/esri/tasks/GPMessage.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/GPMessage.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/GPMessage.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FGPMessage.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/LinearUnit.js",
    method: "GET",
    path: "/3.16/esri/tasks/LinearUnit.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/LinearUnit.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/LinearUnit.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FLinearUnit.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/DataFile.js",
    method: "GET",
    path: "/3.16/esri/tasks/DataFile.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/DataFile.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/DataFile.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FDataFile.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/RasterData.js",
    method: "GET",
    path: "/3.16/esri/tasks/RasterData.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/RasterData.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/RasterData.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FRasterData.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/Date.js",
    method: "GET",
    path: "/3.16/esri/tasks/Date.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/Date.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/Date.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FDate.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/ParameterValue.js",
    method: "GET",
    path: "/3.16/esri/tasks/ParameterValue.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/ParameterValue.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/ParameterValue.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FParameterValue.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/esri/tasks/GPResultImageLayer.js",
    method: "GET",
    path: "/3.16/esri/tasks/GPResultImageLayer.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/esri/tasks/GPResultImageLayer.js": {
        description: "0-GET-js.arcgis.com/3.16/esri/tasks/GPResultImageLayer.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fesri%2Ftasks%2FGPResultImageLayer.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/dojox/main.js",
    method: "GET",
    path: "/3.16/dojox/main.js",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/dojox/main.js": {
        description: "0-GET-js.arcgis.com/3.16/dojox/main.js",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fdojox%2Fmain.js.html"), "utf8");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-js.arcgis.com/3.16/dojo/resources/blank.gif",
    method: "GET",
    path: "/3.16/dojo/resources/blank.gif",
    hostname: "js.arcgis.com",
    handlers: {
      "0-GET-js.arcgis.com/3.16/dojo/resources/blank.gif": {
        description: "0-GET-js.arcgis.com/3.16/dojo/resources/blank.gif",
        handler: function (request) {
          return fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-js.arcgis.com%2F3.16%2Fdojo%2Fresources%2Fblank.gif.html"), "utf8");
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
  mock.jsonRoute({
    name: "GET-localhost/cedsci/test/data/relatedTablesScenario1.json",
    method: "GET",
    path: "/cedsci/test/data/relatedTablesScenario1.json",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/test/data/relatedTablesScenario1.json": {
        description: "0-GET-localhost/cedsci/test/data/relatedTablesScenario1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-localhost%2Fcedsci%2Ftest%2Fdata%2FrelatedTablesScenario1.json.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-localhost/cedsci/test/data/quickFactsSideFacts-S1.json",
    method: "GET",
    path: "/cedsci/test/data/quickFactsSideFacts-S1.json",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/test/data/quickFactsSideFacts-S1.json": {
        description: "0-GET-localhost/cedsci/test/data/quickFactsSideFacts-S1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-localhost%2Fcedsci%2Ftest%2Fdata%2FquickFactsSideFacts-S1.json.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-localhost/cedsci/test/data/quickFactsSideLinks-S1.json",
    method: "GET",
    path: "/cedsci/test/data/quickFactsSideLinks-S1.json",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/test/data/quickFactsSideLinks-S1.json": {
        description: "0-GET-localhost/cedsci/test/data/quickFactsSideLinks-S1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-localhost%2Fcedsci%2Ftest%2Fdata%2FquickFactsSideLinks-S1.json.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-localhost/cedsci/test/data/quickFactsTopFact-S1.json",
    method: "GET",
    path: "/cedsci/test/data/quickFactsTopFact-S1.json",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/test/data/quickFactsTopFact-S1.json": {
        description: "0-GET-localhost/cedsci/test/data/quickFactsTopFact-S1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-localhost%2Fcedsci%2Ftest%2Fdata%2FquickFactsTopFact-S1.json.json");
        }
      }
    }
  });
  mock.jsonRoute({
    name: "GET-localhost/cedsci/test/data/trending-S1.json",
    method: "GET",
    path: "/cedsci/test/data/trending-S1.json",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/test/data/trending-S1.json": {
        description: "0-GET-localhost/cedsci/test/data/trending-S1.json",
        handler: function (request) {
          return require("./fixtures/0-GET-localhost%2Fcedsci%2Ftest%2Fdata%2Ftrending-S1.json.json");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/quickAnswer",
    method: "GET",
    path: "/cedsci/quickAnswer",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/quickAnswer": {
        description: "0-GET-localhost/cedsci/quickAnswer",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2FquickAnswer.html"), "utf8"),
            type: "text/html",
            code: 404
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/infoPanel",
    method: "GET",
    path: "/cedsci/infoPanel",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/infoPanel": {
        description: "0-GET-localhost/cedsci/infoPanel",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2FinfoPanel.html"), "utf8"),
            type: "text/html",
            code: 404
          });
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/webList",
    method: "GET",
    path: "/cedsci/webList",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/webList": {
        description: "0-GET-localhost/cedsci/webList",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2FwebList.html"), "utf8"),
            type: "text/html",
            code: 404
          });
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
        handler: function (request) {
          return require("./fixtures/0-POST-localhost%2FtableService.json");
        }
      }
    }
  });
  mock.htmlRoute({
    name: "GET-localhost/cedsci/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
    method: "GET",
    path: "/cedsci/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
    hostname: "localhost",
    handlers: {
      "0-GET-localhost/cedsci/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2": {
        description: "0-GET-localhost/cedsci/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
        handler: function (request) {
          throw new Drydock.Errors.HttpError({
            payload: fs.readFileSync(path.join(__dirname, "./fixtures/0-GET-localhost%2Fcedsci%2Fbower_components%2Fbootstrap%2Fdist%2Ffonts%2Fglyphicons-halflings-regular.woff2.html"), "utf8"),
            type: "text/html",
            code: 304
          });
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