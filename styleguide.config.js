const themeObj = require('./styleguide/style/theme.js')
const stylesObj = require('./styleguide/style/styles.js')
const config = require('./package.json')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  title: 'template-library',
  sections: [
    {
      name: 'template-library',
      description: '模板',
      content: './README.md',
    },
    {
      name: 'Example',
      sections: [
        {
          name: 'demo',
          components: () => ['packages/Button/src/main.vue'],
        },
      ],
    },
  ],
  version: `版本 v${config.version}`,
  require: [path.join(__dirname, 'styleguide/global.requires.js')], //全局vue组件使用的插件

  theme: themeObj,
  styles: stylesObj,
  usageMode: 'expand', //文档中属性和方法的标签初始化状态，决定是否展开
  exampleMode: 'expand', //文档中代码示例的标签初始化状态，决定是否展开。
  copyCodeButton: true, //代码顶部的复制按钮

  progressBar: true, //打包进度条
  styleguidePublicPath: isProd ? './' : '',

  styleguideDir: 'doc', //打包文件放置的位置
}
