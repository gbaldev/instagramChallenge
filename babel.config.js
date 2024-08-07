module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': 'src/components/*',
          '@models': 'src/models/*',
          '@utils': 'src/utils/*',
          '@assets': 'src/assets/*',
          '@services': 'src/services/*',
        },
      },
    ],
  ],
};
