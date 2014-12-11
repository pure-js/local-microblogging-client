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
                    'build/base.css': 'css/base.scss'
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
                files: 'build/*.css',
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
                'src': ['js/base.js'],
                'dest': 'build/all-own.min.js'
            }
        },
        cssmin: {
            'dist': {
                'src': ['build/base.css'],
                'dest': 'build/base.min.css'
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-haml');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-yui-compressor');


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
};