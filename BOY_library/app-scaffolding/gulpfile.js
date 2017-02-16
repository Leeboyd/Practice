'use strict';

var gulp       = require('gulp'),
    source     = require('vinyl-source-stream'),
    rename     = require('gulp-rename'),
    browserify = require('browserify'),
		babelify   = require('babelify'),
    es         = require('event-stream');

// Lets bring es6 to es5 with this.
// Babel - converts ES6 code to ES5 - however it doesn't handle imports.
// Browserify - crawls your code for dependencies and packages them up into one file can have plugins.
// Babelify - a babel plugin for browserify, to make browserify
// handle es6 including imports.

gulp.task('default', function() {
    // we define our input files, which we want to have bundled
    var files = [
        './asset/main-a.js',
        './asset/main-b.js'
    ];
    // map them to our stream function
    var tasks = files.map(function(entry) {
        return browserify({ entries: [entry] })
						.transform("babelify", { presets: ["es2015"] })
						.bundle()
						.on('error', gutil.log)
            .pipe(source(entry))
            // rename them to have "bundle as postfix"
            .pipe(rename({
                extname: '.bundle.js'
            }))
            .pipe(gulp.dest('./dist'));
        });
    // create a merged stream
    return es.merge.apply(null, tasks);
});
