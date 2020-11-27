module.exports = 
{
  root: true,
  plugins: ['import'],
  parser: "babel-eslint",
  env:
  {
    commonjs: true,
    es6: true,
    node: true
  },
  settings: 
  {
    node: 
    {
      paths: ['src'],
      alias: 
      {
        'mta_assets':       './src/assets',
        'mta_components':   './src/components',
        'mta_scenes':       './src/scenes',
        'mta_services':     './src/services',
        'mta_styles':       './src/styles',
        'mta_utils':        './src/utils',
        'mta_models':       './src/models'
      }
    }
  }
};
