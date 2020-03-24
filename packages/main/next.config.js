const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@intools/main',
  '@intools/purwanto',
  '@intools/broto',
]);

module.exports = withPlugins([withTM]);