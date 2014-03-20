/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },

    // Directory watching.
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      theme: {
        files: 'src/**/*',
        tasks: ['sorry_theme_deploy'],
        options: {
          interrupt: true,
        }
      }
    },

    // Load in your sorry credentials.
    // NOTE: NEVER CHECK YOUR CREDENTIALS INTO YOUR REPOSITORY.
    sorry: grunt.file.readJSON('sorry.json'),

    // Sorry theme deployment.
    sorry_theme_deploy: {
      options: {
        username: '<%= sorry.username %>',
        password: '<%= sorry.password %>',
        page: 'YOUR PAGE NAME GOES HERE'
      },     
      valid_theme: {
        expand: true,
        cwd: 'src/',
        src: ['**/*']
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sorry-theme-deploy');

  // Default task.
  grunt.registerTask('default', ['jshint', 'sorry_theme_deploy']);

};
