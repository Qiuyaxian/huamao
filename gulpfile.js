var gulp = require("gulp"),
	concat = require('gulp-concat')
    runSequence = require("run-sequence"),
    browserSync = require("browser-sync").create(),
    del = require("del"),
    compass = require("gulp-compass");

gulp.task('default',function(){
	return runSequence(['clean'],['concatJs'],['build'],['serve','watch']);
});
//清除整个目录
gulp.task('clean',function(callback){
	return del('./dist/',callback);
})


//合并js
gulp.task('concatJs', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('app.js', {newLine: '\r\n'}))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('build',function(callback){
	return runSequence(['compass','static'],callback)
});

gulp.task('compass',function(){
	return gulp.src('./src/**/*.scss')
				.pipe(compass({
					config_file:'./config.rb',
					css:'./src/stylesheets',
					sass:'./src/sass'
				}))
				.on('error',function(err){
					console.log(err);
					this.emit('end');
				})
				.pipe(gulp.dest('./dist/css/'));
});

gulp.task('static',function(){
	return gulp.src([
		'./src/**/*.html',
		'./src/**/*.json',
		'./src/images*/**/*.*',
		'./src/libs*/**/*.*'
	]).pipe(gulp.dest('./dist/'));
});

gulp.task('serve',function(){
	browserSync.init({
		server:'./dist',
		port:8088
	});
});

gulp.task('reload',function(){
	return browserSync.reload();
});

gulp.task('watch',function(){
	return gulp.watch([
		'./src/**/*.html',
		'./src/**/*.js',
		'./src/**/*.scss'
	],function(){
		return runSequence(['build'],['reload'],['concatJs'])
	});
})








