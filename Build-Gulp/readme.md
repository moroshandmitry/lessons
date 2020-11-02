My first instructions in Gulp!
<!-- Most important link for me for learn Gulp  => https://www.youtube.com/watch?v=stFOy0Noahg -->

If you only need a finished project add files in .gitignore

1. 
Copy this project as Build Gulp
For install dependencies in my new project => npm i

If I had problems with the WEBPCSS plugin needs to install the converter with the command => npm install webp-converter@2.2.3 --save-dev

Important links
<!-- https://nodejs.org/en/download/ -->
<!-- https://git-scm.com/downloads -->
<!-- https://gulpjs.com/docs/en/getting-started/quick-start -->
<!-- http://fls.guru/gulp.html -->

2. 
If not worked =>

npm cache clean --force
npm i npm -g

=> and go to step 3

3. 
If i work with PowerShell terminal => right click on the start menu Windows PowerShell (run as admin) =>

Set-ExecutionPolicy RemoteSigned 
npm i --global gulp-cli

Go in you folder project => Shift + right click => open window PowerShell

npm init => to create package.json =>

1) Project name => name of project
2) Version => you version if you need
3) Description => description of your project if you need
4) entry point => index.html
5) test comand => 
6) git repository =>
7) keywords =>
8) author => Dmitry
9) license =>

npm i gulp --save-dev

Create gulpfile.js
Create folders => #src => img, js, scss, fonts, iconsprite
Create files 
#src\index.html
#src\scss\style.scss
#src\js\script.js

<!-- My plugins => -->
npm i browser-sync --save-dev
npm i gulp-file-include --save-dev
npm i del --save-dev
npm i gulp-sass --save-dev
npm i gulp-autoprefixer --save-dev
npm i --save-dev gulp-group-css-media-queries
npm i --save-dev gulp-clean-css
npm i --save-dev gulp-rename
npm i --save-dev gulp-uglify-es
npm i --save-dev gulp-imagemin
npm i --save-dev gulp-webp
npm i --save-dev gulp-webp-html
npm i webp-converter@2.2.3 --save-dev
npm i --save-dev gulp-webpcss
npm i --save-dev gulp-svg-sprite
npm i --save-dev gulp-ttf2woff gulp-ttf2woff2
npm i --save-dev gulp-fonter

<!-- gulp file -->
let project_folder = 'dist';
let source_folder = '#src';

let fs = require('fs');

let path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        fonts: project_folder + '/fonts/',
    },
    src: {
        html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
        css: source_folder + '/scss/style.scss',
        js: source_folder + '/js/script.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: source_folder + '/fonts/*.ttf',
    },
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/scss/**/*.scss',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    },
    clean: './' + project_folder + '/'
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    group_media = require('gulp-group-css-media-queries'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    webphtml = require('gulp-webp-html'),
    webpcss = require('gulp-webpcss'),
    svgSprite = require('gulp-svg-sprite'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter');

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
    .pipe(
        scss({
            outputStyle: 'expanded'
        })
    )
    .pipe(
        group_media()
    )
    .pipe(
        autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true
        })
    )
    .pipe(webpcss())
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
        rename({
            extname: '.min.css'
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: '.min.js'
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3 // 0 to 7
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
}

gulp.task('otf2ttf', function(){
    return src([source_folder + '/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(source_folder + '/fonts/'))
})

gulp.task('svgSprite', function(){
    return gulp.src([source_folder + '/iconsprite/*.svg'])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../icons/icons.svg', // sprite file name
                    // example: true
                }
            },
        }
        ))
        .pipe(dest(path.build.img))
})

function fontsStyle(params) {
    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss'); if (file_content == '') { fs.writeFile(source_folder + '/scss/fonts.scss', '', cb); return fs.readdir(path.build.fonts, function (err, items) { if (items) { let c_fontname; for (var i = 0; i < items.length; i++) { let fontname = items[i].split('.'); fontname = fontname[0]; if (c_fontname != fontname) { fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb); } c_fontname = fontname; } } }) }
}
function cb() { }
    
function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);

}

function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;