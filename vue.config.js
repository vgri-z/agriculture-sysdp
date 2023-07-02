const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'mi.xiucore.cn', // 允许访问的域名地址，即花生壳内网穿透的地址
      '.xiucore.cn'   // .是二级域名的通配符
    ],
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title= '绿先锋智慧农业管理平台'
          return args
        })
  }
})
