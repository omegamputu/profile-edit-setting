let mix = require('laravel-mix');

mix.js('src/app.js', 'js').vue()
.sass('src/sass/app.scss', 'css')
.sass('src/sass/custom.scss', 'css')
.setPublicPath('public').browserSync();