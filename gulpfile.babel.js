import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'dart-sass'
import gulpCleanCSS from 'gulp-clean-css'
import gulpIf from 'gulp-if';
import gulpSourcemaps from 'gulp-sourcemaps'
import yargs from 'yargs';


const sass = gulpSass(dartSass);



const production = yargs.argv.production || false;


const paths = {

    style : {
        src : './src/styles.scss',
        dest : './dist'
    },
    universal_style : {
        src : './src/common-styles.scss',
        dest : './dist'
    }
};

export const style = () => {
    return gulp.src(paths.style.src , { allowEmpty: true } )
    .pipe( gulpIf( !production , gulpSourcemaps.init() ) )
    .pipe(sass().on('error' , sass.logError) )
    .pipe( gulpIf ( production , gulpCleanCSS({ compatibility : 'ie8' }) ) )
    .pipe( gulpIf( !production , gulpSourcemaps.write() ) )
    .pipe(gulp.dest(paths.style.dest));
}

export const universalStyle = () => {
    return gulp.src(paths.universal_style.src , { allowEmpty: true } )
    .pipe( gulpIf( !production , gulpSourcemaps.init() ) )
    .pipe(sass().on('error' , sass.logError) )
    .pipe( gulpIf ( production , gulpCleanCSS({ compatibility : 'ie8' }) ) )
    .pipe( gulpIf( !production , gulpSourcemaps.write() ) )
    .pipe(gulp.dest(paths.universal_style.dest));
}

export const watch = () => {
    // admin_scripts
      return gulp.watch( './src/**/*.*' , gulp.parallel( style , universalStyle ));
}

