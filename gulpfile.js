const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const del = require('del'); // del@6.0.0
const autoprefixer = require('gulp-autoprefixer'); // gulp-image@8.0.0
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const image = require('gulp-image'); // gulp-image@6.2.1
const sass = require('gulp-sass')(require('sass'));

const clean = () => {
	return del(['dist/*'])
}

const htmlMinify = () => {
	return src('src/**/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(dest('dist'))
		.pipe(browserSync.stream());
}

function sassCompile() {
  return src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(cleanCSS({ level: 2 }))
		.pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist/css'))
    .pipe(browserSync.stream());
}

const images = () => {
  return src([
		'./src/img/**.jpg',
		'./src/img/**.png',
		'./src/img/**.jpeg',
    './src/img/**.gif',
		'./src/img/*.svg',
		'./src/img/**/*.jpg',
		'./src/img/**/*.png',
		'./src/img/**/*.jpeg'
		])
    .pipe(image())
    .pipe(dest('./dist/img'))
};

const svgSprites = () => {
  return src('./src/img/svg/**.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      },
    }))
    .pipe(dest('./dist/img'));
}

const fonts = () => {
  return src('./src/fonts/**')
    .pipe(dest('./dist/fonts'))
}

const scripts = () => {
  return src([
    './src/js/components/**/*.js',
    './src/js/utils/**/*.js',
    './src/js/main.js'
  ])
  // .pipe(concat('app.js'))
  .pipe(sourcemaps.write())
  .pipe(dest('./dist/js'))
  .pipe(browserSync.stream())
}

const resources = () => {
  return src('./src/resources/**')
    .pipe(dest('dist'))
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
  });

  watch('./src/sass/**/*scss', sassCompile);
	watch('./src/*.html', htmlMinify);
  watch('./src/img/*.{jpg,jpeg,png,svg}', images);
	watch('./src/img/**/*.{jpg,jpeg,png}', images);
  watch('./src/img/svg/**.svg', svgSprites);
  watch('./src/js/**/*.js', scripts);
  watch('./src/fonts/**/*', fonts);
  watch('./src/resources/**', resources);
}

exports.sassCompile = sassCompile;

exports.default = series(clean, scripts, resources, htmlMinify, sassCompile, images, svgSprites, fonts, watchFiles);