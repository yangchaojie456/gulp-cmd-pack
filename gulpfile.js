var gulp = require('gulp');
var cmdPack = require('gulp-cmd-pack');
var uglify = require('gulp-uglify');

gulp.task('default',function(){
	gulp.src('c.js')//main文件
		.pipe(cmdPack({
			mainId:'c',	//初始化模块的id
			base:'./'	// base路径
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));//输出目录
})