module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false,
        compress: false,
        beautify: true
      },
      build: {
        src: 'www/js/*.js',
        dest: 'www/build/giles.js'
      }
    },

    less: {
      development: {
        options: {
        },
        files: {
          "www/build/giles.css": "www/css/styles.less"
        }
      }
    },

    watch: {
      css: {
        files: [
          'www/css/*.less',
          'www/css/*/*.less',
          'www/js/*/*.js',
          'www/js/*/*/*.js',
        ],
        tasks: ['less:development', 'uglify'],
        options: {
          livereload: true,
        },
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less']);

};