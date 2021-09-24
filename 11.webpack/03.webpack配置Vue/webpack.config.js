//导出path
const path=require('path');

module.exports = {
    entry: "./src/main.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        //配置可以省略后缀名的文件
        extensions:['.js','.css','.vue'],
        //alias 别名
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}