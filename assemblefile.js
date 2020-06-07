"use strict";

var assemble = require("assemble");
var app = assemble();

app.task("load", function (cb) {
  app.partials("src/partials/*.hbs");
  app.layouts("src/layouts/*.hbs");
  app.pages("src/pages/*.hbs");
  cb();
});

app.task("default", ["load"], function () {
  return app
    .toStream("pages")
    .pipe(app.renderFile("hbs"))
    .pipe(app.dest("dist"));
});

module.exports = app;
