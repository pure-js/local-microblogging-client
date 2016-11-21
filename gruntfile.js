module.exports = function(grunt) {

  // Start web server
  // Compile developer friendly environment
  // $ grunt serve

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/development/main.css': 'src/stylesheets/main.scss'
        }
      },
      production: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/production/main.css': 'src/stylesheets/main.scss'
        }
      }
    },
    haml: {
      dev: {
        files: {
          'build/development/index.html': 'src/index.haml'
        }
      },
      production: {
        files: {
          'build/production/index.html': 'src/index.haml'
        }
      },
      options: {
        language: 'js'
      }
    },
    min: {
      'dist': {
        'src': ['src/js/base.js', 'src/js/save-to-local-storage.js'],
        'dest': 'build/production/combined.min.js'
      }
    },
    cssmin: {
      'dist': {
        'src': ['build/development/base.css'],
        'dest': 'build/production/combined.min.css'
      }
    },
    htmlmin: {
      production: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeScriptTypeAttributes: true
        },
        files: {
          'build/production/index.html': 'build/production/index.html'
        }
      }
    },
    copy: {
      dev: {
        expand: true,
        cwd: 'src/js/',
        src: ['*.js'],
        dest: 'build/development/'
      }
    },
    watch: {
      copy: {
        files: 'src/js/*.js',
        tasks: ['copy:dev']
      },
      css: {
        files: ['src/stylesheets/*.scss', 'src/stylesheets/*/*.scss'],
        tasks: ['sass:dev']
      },
      haml: {
        files: 'src/index.haml',
        tasks: ['haml:dev']
      },
      livereload: {
        // Here we watch the files the sass task will compile to
        // These files are sent to the live reload server after sass compiles to them
        options: {
          livereload: true
        },
        files: ['build/development/*']
      }
    },
    clean: {
      production: {
        src: ['build/production/main.css.map', 'build/production/main.css']
      }
    },
    'gh-pages': {
      options: {
        base: 'build/production'
      },
      // These files will get pushed to the `gh-pages` branch (the default).
      src: ['index.html', 'combined.min.css', 'combined.min.js']
    }
  });

  require('jit-grunt')(grunt);

  grunt.registerTask('default', [
    'watch'
  ]);

  // Compile developers files

  grunt.registerTask('dev-build', [
    'copy:dev',
    'haml:dev',
    'sass:dev'
  ]);

  // Compile production files

  grunt.registerTask('production-build', [
    'haml:production',
    'sass:production',
    'cssmin',
    'min',
    'clean'
  ]);

  // Send production files to GitHub

  grunt.registerTask('to-github', [
    'production-build',
    'gh-pages'
  ]);
};
