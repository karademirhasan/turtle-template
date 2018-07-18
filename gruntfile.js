module.exports = function (grunt) {

	grunt.initConfig({
		sass: 
		{
		    dist: {
		      files: [{
		        expand: true,
		        cwd: 'scss',
		        src: ['main.scss'],
		        dest: 'css',
		        ext: '.css'
		      }]
		    }
	  	},
        watch:
        {
			styles: {
				files: ['scss/*.scss'],
				tasks: ['sass'],
			}
	    }
	});

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass','watch']);

};