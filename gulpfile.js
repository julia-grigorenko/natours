var gulp = require("gulp");
var sass = require("gulp-sass");
var nano = require('gulp-cssnano');
var autoprefixer = require("gulp-autoprefixer");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('styles', function () {
    return gulp.src(["app/sass/main.scss"])
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))    
      .pipe(gulp.dest("app/css/"));
});

// gulp.task('styles', function () {
//     return gulp.src(["app/sass/main.scss"])
//       .pipe(sass())
//       .pipe(autoprefixer({
//         browsers: ['last 2 versions']
//       }))
//       .pipe(nano())
//       .pipe(gulp.dest("app/css/"));
// });



gulp.task('scripts', function () {
  return gulp.src([
    'app/scripts/app.js',
    'bower_components/jquery/dist/jquery.js'
  ])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

gulp.task('watch-build', function () {
  gulp.watch('app/sass/**/**/*.scss', ['styles']);
  gulp.watch('app/scripts/**/**/*.js', ['styles']);
});

gulp.task('default', ['styles', 'scripts']);
gulp.task('watch', ['default', 'watch-build']);
