
var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');
var REPO_NAME='sass-ubuntu';

gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp dist|sassdoc"');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());

});

gulp.task('dist', function () {
    compileSass();
});


///private
function compileSass(){
    gulp.src('./src/ubuntu.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}
