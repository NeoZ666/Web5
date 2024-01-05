const nodeExternals = require('webpack-node-externals');

module.exports = {
  // other configurations
  target: 'node',  // Set the target to node environment
  externals: [nodeExternals()],  // Exclude node_modules from the bundle
  // other configurations
};
