
/*module.exports = {
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
}*/

module.exports = {
  // presets: [
  //   '@vue/app'
  // ]
  presets: [
    ['@babel/preset-env', {
      'targets': {
        'node': 'current'
      }
    }, '@vue/app']
  ]
};
