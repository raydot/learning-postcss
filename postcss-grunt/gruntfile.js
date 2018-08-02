

module.exports = function(grunt) {

	grunt.initConfig({
		stylus: {
			compile: {
				options: {
					compress: false,
					paths:['source/stylus']
				},
				files: {
					'build/style.css': 'source/stylus/dummy_stylus.styl'
				}
			}
		},
	});

	//load Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
};