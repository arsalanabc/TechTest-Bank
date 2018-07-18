module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '*.js',
      'test/spec/*.js'
    ],
    browsers: ['Chrome', 'Firefox'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: { '*.js': ['coverage'] }
  });
};