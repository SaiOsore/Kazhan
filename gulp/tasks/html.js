// module.exports = function() {
//     $.gulp.task("html", function() {
//         return $.gulp.src(["./src/views/**/*.html", "!./src/views/blocks/*.html"])
//             .pipe($.rigger())
//             .pipe($.replace("../dest/", "../"))
//             .pipe($.gulp.dest("./dest/"))
//             .pipe($.debug({"title": "html"}))
//             .on("end", $.browsersync.reload);
//     });
// };

module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src(["./src/views/**/*.pug", "!./src/views/blocks/*.pug"])
            .pipe($.pug({
              pretty:true
            }))
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.browsersync.reload);
            });
};