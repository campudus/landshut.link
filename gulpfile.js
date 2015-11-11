var gulp = require('gulp');
var browserSync = require('browser-sync');
var compass = require('gulp-compass');
var del = require('del');
var ghPages = require('gulp-gh-pages');

gulp.task('build:assets', copyAssets);
gulp.task('build:sass', compileSass);
gulp.task('build', ['build:assets', 'build:sass']);
gulp.task('clean', cleaner);
gulp.task('dev', ['build'], devMode);
gulp.task('deploy', deployOnGitHubPages);

var outDir = 'out';

function cleaner(cb) {
  del(outDir, cb);
}

function copyAssets() {
  return gulp.src(['src/**', '!src/scss/**', '!src/scss', 'bower_components*/**'])
    .pipe(gulp.dest(outDir));
}

function compileSass() {
  return gulp.src('src/scss/app.scss')
    .pipe(compass({
      comments : true,
      css : outDir + '/stylesheets',
      sass : 'src/scss',
      images : 'src/images',
      javascripts : 'src/js'
    }))
    .pipe(gulp.dest(outDir + '/stylesheets/'));
}

function devMode() {
  browserSync({
    port : 4000,
    server : {
      baseDir : outDir
    },
    open : false
  });

  gulp.watch(['src/**', '!src/scss/**', '!src/scss'], {}, ['build:assets']);
  gulp.watch(['src/scss/**'], {}, ['build:sass']);
}

function deployOnGitHubPages() {
  return gulp.src(outDir + '/**')
    .pipe(ghPages());
}