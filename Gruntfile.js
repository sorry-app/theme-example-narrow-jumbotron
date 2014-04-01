/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Load in the package information.
    pkg: grunt.file.readJSON("package.json"),

    // Load in your sorry credentials.
    // NOTE: NEVER CHECK YOUR CREDENTIALS INTO YOUR REPOSITORY.
    sorry: grunt.file.readJSON('sorry.json'),

    // Sorry theme deployment.
    sorry_theme_deploy: {
      options: {
        username: '<%= sorry.username %>',
        password: '<%= sorry.password %>'
      },     
      theme: {
        expand: true,
        cwd: 'src/',
        src: ['**/*']
      }
    },

    // Javascript validation.
    jshint: {
      // Validate the gruntfile and theme src.
      all: ["Gruntfile.js", "src/assets/*.js"]
    },

    // Auto-deploy on file changes to theme src.
    watch: {
      theme: {
        files: 'src/**/*',
        tasks: ['deploy'],
        options: {
          interrupt: true,
        }
      }
    },

    // Release / Version of the theme as Github tags.
    release: {
      options: {
        npm: false // Don't publish the theme to NPM as not a node package.
      }
    },

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sorry-theme-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-release');

  // Default task(s).
  grunt.registerTask("deploy", ["jshint", "sorry_theme_deploy"]);

};