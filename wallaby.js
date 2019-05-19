module.exports = function (w) {
  return {
    files: ['src/**/*.js', 'src/**/*.ts', 'test/**/*.html'],
    tests: ['test/**/*.ts', 'test/**/*.js'],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'ava',
  };
};