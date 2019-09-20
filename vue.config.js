const path = require('path')
const resolve = dir => path.join(__dirname, dir);
const isDev = process.env.NODE_ENV === 'development';
let base = isDev ? "./" : 'https://open-cdn.xjy.cn/test/';
let root = process.env.VUE_APP_ROOT;
if(root) {
  base = 'https://open-cdn.xjy.cn/main/';
}

module.exports = {
    outputDir: 'dist', // 输出文件目录
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    // publicPath: base,  // 相对于当前入口文件路径
    // 配置路径
    chainWebpack:config=>{
        config.resolve.extensions
            .add('.js')
            .add('.json')
            .add('.scss')
            .add('.css')
            .add('.vue');
        config.resolve.alias
            .set('src', resolve('src'))
            .set('webapp', resolve('src/webapp'))
            .set('assets',resolve('src/webapp/assets'))
            .set('views',resolve('src/webapp/views'))
            .set('utils',resolve('src/webapp/utils'))
            .set('components',resolve('src/webapp/components'))
            .set('style',resolve('src/webapp/style'));
    },
    // configureWebpack: config => {
    //     Object.assign(config, {
    //         // 开发生产共同配置
    //         resolve: {
    //             alias: {
    //                 'src': resolve('src'),
    //                 'webapp': resolve('src/webapp'),
    //                 'assets':resolve('src/webapp/assets'),
    //                 'views':resolve('src/webapp/views'),
    //                 'utils':resolve('src/webapp/utils'),
    //                 'components':resolve('src/webapp/components'),
    //                 'style':resolve('src/webapp/style')
    //             },
    //             // 省略后缀名
    //             extensions: ['','.js', '.vue', '.json', '.ts','.scss'], 
    //         }
    //     });
    // },
    // 反向代理
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'https://coachline.xjy.cn/',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //           '^/api': ''
        //         }
        //     }
        // }
    },
    configureWebpack: {
        // externals: {
        //   'axios': 'axios',
        //   'vue-router': 'VueRouter',
        //   'vue':'Vue'
        // }
    }
}