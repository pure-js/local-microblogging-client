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
          '.tmp/main.css': 'src/styles/main.scss'
        }
      },
      build: {
        files: {
          'build/main.min.css': 'src/styles/main.scss'
        }
      }
    },
    pug: {
      dev: {
        files: {
          '.tmp/index.html': 'src/index-dev.pug'
        }
      },
      build: {
        files: {
          'build/index.html': 'src/index-prod.pug'
        }
      }
    },
    concat: {
      build: {
        src: ['mock-posts.js', 'src/js/*.js'],
        dest: 'build/main.min.js',
      },
    },
    babel: {
      build: {
        options: {
          sourceMap: false,
          presets: ['babel-preset-es2015']
        },
        files: {
          'build/main.min.js': 'build/main.min.js'
        }
      }
    },
    uglify: {
      build: {
        src: ['build/main.min.js'],
        dest: 'build/main.min.js'
      }
    },
    cssmin: {
      build: {
        src: 'build/main.min.css',
        dest: 'build/main.min.css'
      }
    },
    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeScriptTypeAttributes: true
        },
        files: {
          'build/index.html': 'build/index.html'
        }
      }
    },
    copy: {
      dev: {
        expand: true,
        cwd: './src/js',
        src: ['*.js'],
        dest: '.tmp/'
      }
    },
    watch: {
      copy: {
        files: ['src/js/*.js'],
        tasks: ['copy:dev']
      },
      css: {
        files: ['src/styles/*.scss', 'src/styles/**/*.scss'],
        tasks: ['sass:dev']
      },
      pug: {
        files: 'src/*.pug',
        tasks: ['pug:dev']
      },
      livereload: {
        // Here we watch the files the sass task will compile to
        // These files are sent to the live reload server after sass compiles to them
        options: {
          livereload: true
        },
        files: ['.tmp/*']
      }
    },
    clean: {
      build: {
        src: ['build/']
      }
    },
    eslint: {
      target: ['src/js/*.js']
    },
    'gh-pages': {
      options: {
        base: 'build'
      },
      // These files will get pushed to the `gh-pages` branch (the default).
      src: ['*.*']
    }
  });

  require('jit-grunt')(grunt);

  grunt.registerTask('default', [
    'dev',
    'watch'
  ]);

  // Compile developers files
  grunt.registerTask('dev', [
    'copy:dev',
    'pug:dev',
    'sass:dev'
  ]);

  // Compile production files
  grunt.registerTask('build', [
    'pug:build',
    'sass:build',
    'cssmin',
    'concat',
    'babel',
    'uglify'
  ]);

  // Test
  grunt.registerTask('test', [
    'eslint'
  ]);

  // Send production files to GitHub pages
  grunt.registerTask('deploy', [
    'build',
    'gh-pages'
  ]);
};
