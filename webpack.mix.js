let mix = require('laravel-mix');

mix.js('src/app.js', 'js').sass('src/sass/app.scss', 'css').setPublicPath('public');