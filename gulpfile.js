const gulp = require("gulp");
const playcanvas = require("gulp-playcanvas");
const pcOptions = require("./playcanvas.json");

gulp.task("js", () => {
  return gulp
    .src(["dist/**/*.js", "!dist/**/_*.js"])
    .pipe(playcanvas(pcOptions));
});

gulp.task("watch", function() {
  gulp.watch(["dist/**/*.js", "!dist/**/_*.js"], gulp.task("js"));
});
gulp.task("default", gulp.parallel("watch"));
