module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Ensures compatibility with the current Node.js version
        },
        modules: 'commonjs', // Ensures modules are transpiled to CommonJS
      },
    ],
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'], // Ensures test environment handles CommonJS
    },
  },
  ignore: [
    // Ignore node_modules by default but allow specific packages to be transpiled
    'node_modules/(?!(@digitalbazaar|@identity.com|base58-universal)/)',
  ],
};
