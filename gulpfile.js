//noinspection JSLint
var gulp = require("gulp");                     // Gulp JS
var out = require("gulp-out");                  // output to file
var minifyHTML = require("gulp-minify-html");   // min HTML
var csso = require("gulp-csso");                // CSS min
var less = require("gulp-less");                // LESS
var concat = require("gulp-concat");            // concat
var uglify = require("gulp-uglify");            // JS min
var ejsmin = require("gulp-ejsmin");            // EJS min
var header = require("gulp-header");            // banner maker
var mkdirp = require("mkdirp");                 // mkdir

var src     = "./src",
    srcJs   = src + "/js",
    srcLess = src + "/less";

var dist    = "./dist",
    distJs  = dist + "/js",
    distCss = dist + "/css";

var templates   = "/templates",
    collections = "/collections",
    lib         = "/lib",
    models      = "/models",
    views       = "/views";

var pkg = require('./package.json');

var banner = [
    '/**',
    ' * Copyright (c) <%= new Date().getFullYear() %> <%= pkg.author %>',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.repository %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');

function buildAmd() {
    gulp
        .src([
            srcJs + lib + "/*.js",
            srcJs + models + "/*.js",
            srcJs + collections + "/*.js",
            srcJs + views + "/*.js",
            srcJs + "/templates.js",
            srcJs + "/main.js"
        ])
        .pipe(concat("modules.js"))
        .pipe(uglify({mangle: false}))
        .pipe(header(banner, {pkg: pkg}))
        .pipe(gulp.dest(distJs));
}

function buildTemplates() {
    var distDir = distJs + templates,
        srcDir = srcJs + templates;

    mkdirp(distDir);

    gulp
        .src(srcDir + "/*.ejs")
        .pipe(ejsmin({removeComment: false}))
        .pipe(gulp.dest(distDir));
}

function buildTplPlugin() {
    var srcDir = srcJs,
        distDir = distJs,
        file = "/tpl.js";

    mkdirp(distDir);

    gulp
        .src(srcDir + file)
        .pipe(uglify())
        .pipe(header(banner, {pkg: pkg}))
        .pipe(out(distDir + file));
}

function buildHtml() {
    var opts = {
        conditionals: true,
        spare:        true,
        empty:        true,
        cdata:        true,
        quotes:       true,
        loose:        false
    };

    gulp.src("./index-src.html")
        .pipe(minifyHTML(opts))
        .pipe(out("./index.html"));
}

function buildCss() {
    mkdirp(distCss);

    gulp
        .src(srcLess + "/main.less")
        .pipe(less())
        .pipe(csso())
        .pipe(header(banner, {pkg: pkg}))
        .pipe(out(distCss + "/app.css"));
}

gulp.task("build_css", buildCss);
gulp.task("build_html", buildHtml);
gulp.task("build_tpl_plugin", buildTplPlugin);
gulp.task("build_templates", buildTemplates);
gulp.task("build_amd", buildAmd);

gulp.task("watch", function () {
    gulp.watch(srcLess + "/**/*.less", ["build_css"]);
    gulp.watch("./index-src.html", ["build_html"]);
    gulp.watch(srcJs + "/lib/tpl.js", ["build_tpl_plugin"]);
    gulp.watch(srcJs + templates + "/**/*.ejs", ["build_templates"]);

    gulp.watch(srcJs + collections + "/**/*.js", ["build_amd"]);
    gulp.watch(srcJs + lib + "/**/*.js", ["build_amd"]);
    gulp.watch(srcJs + models + "/**/*.js", ["build_amd"]);
    gulp.watch(srcJs + views + "/**/*.js", ["build_amd"]);
});

gulp.task("build", function () {
    buildCss();
    buildHtml();
    buildTplPlugin();
    buildTemplates();
    buildAmd();
});