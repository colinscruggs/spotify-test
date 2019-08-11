var gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('run', () =>
    gulp.src('app/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('app/js'))
);