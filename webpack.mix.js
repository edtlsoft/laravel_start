const mix = require('laravel-mix');


const cleanFolderJs = () => {
    const fs = require('fs');
    const path_js = path.resolve(__dirname, 'public_html/js/')
    const excludes_files = ['login.js'];

    fs.readdir(path_js, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        files.forEach(function (file) {
            if (!excludes_files.includes(file)) {
                fs.unlink(path.join(path_js, file), (error) => error ? console.log(error) : null)
            }
        });
    });
}


mix.webpackConfig({
    output: {
        chunkFilename: 'js/[name].[chunkhash].js',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/')
        }
    }
});


// mix.setPublicPath('public_html/');


if (mix.inProduction()) {
    cleanFolderJs();
}


if (process.env.npm_config_login) {
    mix.js('resources/js/login.js', 'js')
        .sass('resources/sass/login.scss', 'css');
}
else {
    mix.js('resources/js/app.js', 'js')
        .sass('resources/sass/app.scss', 'css').disableNotifications();

    if (mix.inProduction()) {
        mix.version();
    }
}


if (process.env.npm_config_browser_sync) {
    mix.browserSync({
        proxy: 'http://localhost',
        open: true,
    });
}