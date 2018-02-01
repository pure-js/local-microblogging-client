const tildeImporter = require('grunt-sass-tilde-importer');

module.exports = (grunt) => {
  // Start web server
  // Compile developer friendly environment
  // $ grunt serve

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dev: {
        options: {
          importer: tildeImporter,
          style: 'expanded',
        },
        files: {
          '.tmp/main.css': 'src/styles/main.scss',
        },
      },
      build: {
        options: {
          importer: tildeImporter,
        },
        files: {
          'dist/main.min.css': 'src/styles/main.scss',
        },
      },
    },
    pug: {
      dev: {
        files: {
          '.tmp/index.html': 'src/index-dev.pug',
        },
      },
      build: {
        files: {
          'dist/index.html': 'src/index-prod.pug',
        },
      },
    },
    cssmin: {
      build: {
        src: 'dist/main.min.css',
        dest: 'dist/main.min.css',
      },
    },
    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeScriptTypeAttributes: true,
        },
        files: {
          'dist/index.html': 'dist/index.html',
        },
      },
    },
    copy: {
      dev: {
        expand: true,
        cwd: './src/js',
        src: ['*.js'],
        dest: '.tmp/',
      },
    },
    watch: {
      copy: {
        files: ['src/js/*.js'],
        tasks: ['copy:dev'],
      },
      css: {
        files: ['src/styles/*.scss', 'src/styles/**/*.scss'],
        tasks: ['sass:dev'],
      },
      pug: {
        files: 'src/*.pug',
        tasks: ['pug:dev'],
      },
      livereload: {
        // Here we watch the files the sass task will compile to
        // These files are sent to the live reload server after sass compiles to them
        options: {
          livereload: true,
        },
        files: ['.tmp/*'],
      },
    },
    clean: {
      build: {
        src: ['dist/'],
      },
    },
    eslint: {
      target: ['src/js/*.js'],
    },
    'gh-pages': {
      options: {
        base: 'dist',
      },
      // These files will get pushed to the `gh-pages` branch (the default).
      src: ['*.*'],
    },
  });

  require('jit-grunt')(grunt);

  grunt.registerTask('default', [
    'dev',
    'watch',
  ]);

  // Compile developers files
  grunt.registerTask('dev', [
    'copy:dev',
    'pug:dev',
    'sass:dev',
  ]);

  // Compile production files
  grunt.registerTask('build', [
    'pug:build',
    'sass:build',
    'cssmin',
  ]);

  // Test
  grunt.registerTask('test', [
    'eslint',
  ]);

  // Send production files to GitHub pages
  grunt.registerTask('deploy', [
    'build',
    'gh-pages',
  ]);
};
