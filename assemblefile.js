"use strict";

const assemble = require("assemble");
const extname = require('gulp-extname');

const app = assemble();

app.task("load", (cb) => {
  app.partials("src/partials/*.hbs");
  app.layouts("src/layouts/*.hbs");
  app.pages("src/pages/*.hbs");
  cb();
});

app.task("default", ["load"], () => {
  return app
    .toStream("pages")
    .pipe(app.renderFile("hbs"))
    .pipe(extname())
    .pipe(app.dest("dist"));
});

module.exports = app;
