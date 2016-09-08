var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('watch',function(){
  gulp.watch("./*.php").on('change',function(event){
      var command = "php-cs-fixer fix " + event.path + " --config-file=" + __dirname + "/.php_cs"
      exec(command);
      console.log("execute command: "+command);
  })
});

gulp.task('default',['watch']);
