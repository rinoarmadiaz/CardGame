module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@screens': './app/screens',
          '@hooks': './app/hooks',
          '@assets': './app/assets',
          '@components': './app/components',
          '@utils': './app/utils',
          '@model': './app/model',
        },
      },
    ],
  ],
};
