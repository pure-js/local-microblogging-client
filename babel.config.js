const presets = [
  ['@babel/env', {
    targets: {
      edge: '17',
      firefox: '60',
      chrome: '67',
      safari: '11.1',
    },
    useBuiltIns: 'usage',
    corejs: {
      version: '3.22',
      proposals: true,
    },
  }],
  ['@babel/preset-react', {
    runtime: 'automatic',
  }],
];

module.exports = { presets };
