//导出 path
const path=require('path');

module.exports = {
    entry:"./src/main.js",
    output:{
        //动态获取路径（如下拿到的 path 是一个绝对路径）
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",
        //在url前面加上对应的路径
        publicPath:'dist/'
    },
    module:{
        rules: [
            {
                // \是对.进行转义
                test: /\.css$/i,
                /*
                * css-loader只负责将css文件进行加载
                * style-loader负责将样式添加到DOM中
                * 使用多个loader时，是从右向左
                * */
                use: ["style-loader","css-loader"],
            },
            //配置less-loader
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            //配置url-loader
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片，小于limit时，会将图片编译成base64字符串形式，
                            //当加载的图片大于limit时，需要安装file-loader 模块进行加载。
                            limit: 8192,
                            name:"img/[name].[hash:8].[ext]"
                        },
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ],
    }
}