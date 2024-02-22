module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    report: 'gzip'
                },
                files: {
                    'dev/styles/main.css' : 'src/styles/main.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            target: {
                files: {
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['less', 'uglify']);
};
