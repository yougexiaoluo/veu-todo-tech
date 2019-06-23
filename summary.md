#### 配置总结
* 创建 build 目录存放项目的配置文件
* 借助webpack-merge插件合并多个配置项
* 修改src目录结构
* 将css文件单独打包到另一个文件 ( extract-text-webpack-plugin )

出现的问题：
    [name].[hash:8].[ext]  并没有将文件打包到文件单独文件夹中
    使用resources  'resources/[path][name].[hash:8].[ext]' 可以将文件打包到单独文件夹中




#### Webpack4 升级
    1. 新增特性
        * mode 的配置项

#### vue-loader
    特点：
        1. 可自定义loader
    
    css modules 对类名进行加密