const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const buildSass = () => {
  console.log('Compile SASS');
  return src('src/sass/app.scss')
    .pipe(sass())
    .pipe(dest('build/styles/'));
}

const buildPug = () => {
  console.log('Compile Pug');
  return src('src/pages/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('build/'));
}

const getAssets = () => {
  console.log("Copy Assets");
  return src('src/assets/**/*')
    .pipe(dest('build/assets/'));
}

exports.build = parallel(buildSass, buildPug, getAssets);