var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//elixir.config.production = true;

elixir(function(mix) {
    mix.scripts([
            'js/pace_options.js',
            'vendor/pace/pace.js'
        ], 'public/assets/js/pace.js', './resources/assets')
        .scripts([
            'vendor/jquery/dist/jquery.js',
            'vendor/modernizr/modernizr.js',
            'js/app.js'
        ], 'public/assets/js/app.js', './resources/assets')
        .styles([
            'vendor/pace/themes/white/pace-theme-minimal.css'
        ], 'public/assets/css/pace.css', './resources/assets')
        .styles([
            'vendor/normalize.css/normalize.css',
            'vendor/fontawesome/css/font-awesome.css',
            'css/app.css',
        ], 'public/assets/css/app.css', './resources/assets')
        .copy('resources/assets/vendor/fontawesome/fonts', 'public/assets/fonts');
});

// http://codepen.io/rickzanutta/pen/wBOder
