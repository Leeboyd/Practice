'use strict'
//--------------------------------------
// gulpfile for general purpose
//--------------------------------------
import gulp from 'gulp'
import concat from 'gulp-concat'
import gulpPlumber from 'gulp-plumber'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import watch from 'gulp-watch'
import webserver from 'gulp-webserver'

import browserify from 'browserify'
import babelify from 'babelify'
import gutil from 'gulp-util'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'

const dir = {
  dist: './dist',
  css: './dist/css',
  js: './dist/js',
  src: './assets/',
}

const pkglist = [
  `${dir.src}lib/jquery.min.js`,
  `${dir.src}lib/jquery.scrollex.min.js`,
  `${dir.src}lib/jquery.scrolly.min.js`,
  `${dir.src}lib/jquery.bxSlider.js`,
  `${dir.src}lib/skel.min.js`,
  `${dir.src}lib/util.js`,
  `${dir.src}lib/template.js`,
  `${dir.src}lib/metro.js`,
  `${dir.src}lib/firebase.js`,
  `${dir.src}lib/tracecode.js`,
  './node_modules/vue/dist/vue.min.js'
  // './node_modules/vue/dist/vue.js'
]

gulp.task("pkg", () => {
  return gulp.src(pkglist)
    .pipe(concat("package.js"))
    .pipe(gulp.dest(dir.js))
})

const sassOpts = { outputStyle: 'compressed', errLogToConsole: true, debug: true };

gulp.task("css", () => {
  gulp.src(`${dir.src}scss/theme.scss`)
    .pipe(gulpPlumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(concat("theme.css"))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir.css))
})

function compile(target) {
  return browserify({ entries: `${dir.src}js/${target}`, debug: true})
      .transform("babelify", { presets: ["es2015"] })
      .bundle()
      .on('error', gutil.log)
      .pipe(source(`${target}`))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(dir.js))
}

gulp.task("indexjs", () => compile(`index.js`))

gulp.task("stepjs", () => compile(`step.js`))

gulp.task("successjs", () => compile(`success.js`))

gulp.task('server', () => {
  gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      open: false,
      port: 3001
    }))
})

gulp.task("watch", () => {

  gulp.start('server')

  watch([`${dir.src}scss/*.scss`], function() {
    gulp.start("css")
  })

  watch([`${dir.src}js/index.js`], function() {
    gulp.start("indexjs")
  })

  watch([`${dir.src}js/step.js`], function() {
    gulp.start("stepjs")
  })

  watch([`${dir.src}js/success.js`], function() {
    gulp.start("successjs")
  })

})
