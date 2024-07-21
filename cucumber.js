module.exports = {
  default: [
    'tests/features/**/*.feature',
    '--require tests/support/**/*.js',
    '--format json:reports/cucumber/cucumber_report.json',
    '--format html:reports/cucumber/cucumber_report.html',
    '--format @cucumber/pretty-formatter'
  ].join(' '),
};