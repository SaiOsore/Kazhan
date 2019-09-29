module.exports = function () {
    $.gulp.task("scripts", function () {
        return $.gulp.src(["./src/js/*.js", "!./src/js/vendor/*.js"])
          .pipe($.sourcemaps.init())
          .pipe($.babel({presets: ["@babel/preset-env"]}))
          .pipe($.concat("main.js"))
          .pipe($.sourcemaps.write("./maps/"))
          .pipe($.gulp.dest("./dest/js/"))
          .pipe($.debug({"title": "scripts"}))
          .on("end", $.browsersync.reload);
    });
    $.gulp.task("jsVendor", function(){
      return $.gulp.src([
        "./node_modules/@dogstudio/highway/build/highway.js",
        "./node_modules/gsap/TweenLite.js",
        "./node_modules/gsap/TimelineLite.js",
        "./src/js/vendor/*.js"
      ])
      .pipe($.gulp.dest("./dest/js/"));
    });
};