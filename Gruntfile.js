'use strict';
var path = require('path');

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    connect: {
      livereload: {
        options: {
          port: 8001,
          middleware: function(connect, options) {
            return [folderMount(connect, options.base)]
          }
        }
      }
    },
    watch: {
      main: {
        options: {
            livereload: true
        },
        files: ['**/*','!node_modules/**/*'],
        tasks: []
      }
    },
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
        boss: true,
        eqnull: true,
        browser: true,
        smarttabs: true,
        globals: {
          jQuery: true,
          angular: true,
          console: true,
          $: true
        }
      },
      files: ['angular-soft-forms.js']
    },
    jasmine: {
      unit: {
        src: ['./lib/jquery.js','./lib/angular.js','./lib/angular-mocks.js','./dist/angular-soft-forms.js','./demo/demo.js'],
        options: {
          specs: 'test/*.js'
        }
      }
    },
    copy: {
      main: {
        files: [
          {src:'angular-soft-forms.css',dest:'dist/'},
          {src:'angular-soft-forms.js',dest:'dist/'}
        ]
      }
    }   
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server', ['jshint','connect', 'watch']);
  grunt.registerTask('build',['copy']);
  grunt.registerTask('test',['build','jasmine']);
};