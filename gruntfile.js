module.exports = function(grunt){

    // Start web server
    // Compile developer friendly environment
    // $ grunt serve

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'build/development/main.css': 'stylesheets/main.scss'
                }
            }
        },
        haml: {
            dist: {
                files: {
                    'build/development/index.html': 'index.haml'
                }
            }
        },
        min: {
            'dist': {
                'src': ['js/base.js', 'js/save-to-local-storage.js'],
                'dest': 'build/production/combined.min.js'
            }
        },
        cssmin: {
            'dist': {
                'src': ['build/development/base.css'],
                'dest': 'build/production/combined.min.css'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'js/',
                src: ['*.js'],
                dest: 'build/development/'
            }
        },
        watch: {
            copy: {
                files: 'js/*.js',
                tasks: ['copy']
            },
            css: {
                files: ['stylesheets/*.scss', 'stylesheets/*/*.scss'],
                tasks: ['sass']
            },
            haml: {
                files: '*.haml',
                tasks: ['haml']
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
        'gh-pages': {
            options: {
                base: 'build'
            },
            // These files will get pushed to the `gh-pages` branch (the default).
            src: ['index.html', 'combined.min.css', 'combined.min.js']
        }
    });


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-haml');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-yui-compressor');
    grunt.loadNpmTasks('grunt-gh-pages');


    grunt.registerTask('default', [
        'watch'
    ]);


    // Compile developers files

    grunt.registerTask('dev-build', [
        'copy',
        'haml',
        'sass'
    ]);


    // Compile production files

    grunt.registerTask('production-build', [
        'haml',
        'sass',
        'cssmin',
        'min'
    ]);


    // Send production files to GitHub

    grunt.registerTask('to-github', [
        'gh-pages'
    ]);
};