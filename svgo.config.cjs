module.exports = {
  multipass: true,
  js2svg: { pretty: false },
  plugins: [
    { name: 'convertPathData', params: { floatPrecision: 0, transformPrecision: 2 } },
    { name: 'cleanupNumericValues', params: { floatPrecision: 0 } },
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'removeEmptyAttrs',
  ],
};
