
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
};

/*
module.exports = {
  // presets: [
  //   '@vue/app'
  // ]
  presets: [
    ['@babel/preset-env', {
      'targets': {
        'node': 'current'
      },
    }, '@vue/app'],
    {
      'useBuiltIns': 'usage',
      'corejs': 3
    }

  ]
};*/
