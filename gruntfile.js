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
                    'pre-build/base.css': 'css/base.scss'
                }
            }
        },
        haml: {
            dist: {
                files: {
                    'build/index.html': 'index.haml'
                }
            }
        },
        watch: {
            css: {
                files: 'css/*.scss',
                tasks: ['sass']
            },
            cssmin: {
                files: 'pre-build/*.css',
                tasks: ['cssmin']
            },
            haml: {
                files: '*.haml',
                tasks: ['haml']
            },
            min: {
                files: 'js/*.js',
                tasks: ['min']
            }
        },
        min: {
            'dist': {
                'src': ['js/base.js', 'js/save-to-local-storage.js'],
                'dest': 'build/combined.min.js'
            }
        },
        cssmin: {
            'dist': {
                'src': ['pre-build/base.css'],
                'dest': 'build/combined.min.css'
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


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-haml');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-yui-compressor');
    grunt.loadNpmTasks('grunt-gh-pages');


    grunt.registerTask('default', [
        'watch'
    ]);


    // Compile production files

    grunt.registerTask('build', [
        'haml',
        'sass',
        'cssmin',
        'min'
    ]);

    grunt.registerTask('to-github', [
        'gh-pages'
    ]);
};