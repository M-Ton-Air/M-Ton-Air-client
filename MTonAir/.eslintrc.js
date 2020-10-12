module.exports = 
{
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: 
  {
    node: 
    {
      paths: ['src'],
      alias: 
      {
        mta_assets: './src/assets',
        mta_components: './src/components',
        mta_navigations: './src/navigations',
        mta_scenes: './src/scenes',
        mta_services: './src/services',
        mta_styles: './src/styles',
        mta_utils: './src/utils'
      }
    }
  }
};
