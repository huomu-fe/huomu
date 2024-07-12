module.exports = {
  plugins: [
    require('postcss-import'), // 处理 @import 规则
    require('autoprefixer'), // 自动添加浏览器前缀
    require('postcss-preset-env')({
      // 预设插件，包含多个插件
      stage: 0, // 编译所有阶段的 CSS 特性
      autoprefixer: { grid: true }, // 自动添加浏览器前缀，包括网格布局
      features: {
        'custom-properties': false, // 禁用自定义属性插件，使用 css variables 替代
      },
    }),
    require('postcss-flexbugs-fixes'), // 修复一些 Flexbox 布局的 bug
  ],
};
