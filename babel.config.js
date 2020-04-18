const presets = [
  [
    '@babel/preset-env',
    {
      corejs: '3',
      targets: {
        android: '74',
        chrome: '75',
        edge: '17',
        firefox: '67',
        ie: '11',
        ios: '12.3',
        node: 'current',
        opera: '61',
        safari: '12.1'
      },
      useBuiltIns: 'entry'
    }
  ],
]

const plugins = [
]

module.exports = (api) => {
  api.cache(false)
  return {
    plugins,
    presets
  }
}