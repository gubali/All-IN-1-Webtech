const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  library: { type: "module" },
  name: 'mfe1',
  exposes: {
    './ProductDetailsComponent': './src/app/product-details/product-details.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }
});