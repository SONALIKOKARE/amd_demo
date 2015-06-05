module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [/*'Gruntfile.js',*/ 'src/js/*.js'],
      options: {
      // options here to override JSHint defaults
      globals: {
        "node": true,
        "browser": true,
        "es5": true,
        "esnext": true,
        "bitwise": true,
        "camelcase": true,
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "indent": 4,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "quotmark": "single",
        "regexp": true,
        "undef": true,
        "unused": true,
        "strict": true,
        "trailing": true,
        "smarttabs": true,
        "jquery": true,
        "expr": false
      }
      }
    },
    less:{
      readyMade: {
              options: {
                  compress: true
              },
              files: {
                 "src/css/style.css": "src/less/style.less",
                  "src/css/advanced.css": "src/less/advanced.less",
                  "src/css/blue_scroll.css": "src/less/blue_scroll.less",
                  "src/css/classic.css": "src/less/classic.less",
                  "src/css/home.css": "src/less/home.less",
                  "src/css/readModal.css": "src/less/readModal.less",
                  "src/css/scroll.css": "src/less/scroll.less",
                  "src/css/template.css": "src/less/template.less",
                  "src/css/theme.css": "src/less/theme.less",
                  "src/css/theme/home_theme.css": "src/less/theme/home_theme.less",
                  "src/css/theme/classic_theme.css": "src/less/theme/classic_theme.less",
                  "src/css/theme/advanced_theme.css": "src/less/theme/advanced_theme.less",
                  "src/css/theme/template_theme.css": "src/less/theme/template_theme.less"
              }
          }
    },
    htmlhint: {
      files: ['src/index.html','src/template/*.html','src/template/*/*.html'],
      options: {
       "tag-pair": true,
        "tagname-lowercase": true,
        "attr-lowercase": true,
        "attr-value-double-quotes": true,
        "attr-value-not-empty": true,
        "doctype-first": true,
        "tag-self-close": true,
        "spec-char-escape": true,
        "id-unique": true,
        "head-script-disabled": true,
        "img-alt-require": true,
        "doctype-html5": true,
        "id-class-value": true
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint','htmlhint']
    }
  });

  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint','htmlhint','less']);

  grunt.registerTask('default', ['jshint','htmlhint','less']);

};