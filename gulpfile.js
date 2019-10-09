var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("compile", () => {
    return gulp.src("./*.scss")
    .pipe(sass())
    //.pipe(gulp.dest("./css")); положить файлы в папку по указ.пути
    .pipe(gulp.dest((file) => {
        return file.base; //положть в папку, из которой взяли
    }));

});
gulp.task("watch", () => {
    return gulp.watch("./*.scss", gulp.series('compile'));
})

gulp.task("default", gulp.series('compile'));