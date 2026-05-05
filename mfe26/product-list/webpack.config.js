const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  library: { type: "module" },
  name: 'mfe2',

  exposes: {
    './ProductsListComponent': './src/app/product-list/product-list.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }
});
