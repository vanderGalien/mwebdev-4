const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));

// werk directory paden
const path = {
    styleDirs: {
        // pattern: ** is alle directories
        //          * is alle karakter (hier namen met .scss)
        src: 'src/scss/**/*.scss',
        dest: 'dist/css'
    }
};

function style () {
    return (
        gulp.src(path.styleDirs.src)
            .pipe(sass())
            .on('error', sass.logError)
            .pipe(gulp.dest(path.styleDirs.dest))
    );
}

exports.default = style;