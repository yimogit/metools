# 个人工具站点

**这个工具个人及朋友实际使用的时候主要还是 Chrome 插件居多，欢迎使用(https://github.com/yimogit/metools-plugin)**

本项目是一个使用 vue2.0+layui 制作的工具站点          
你可以 fork 到自己的网站，然后配置域名，构建自己的工具站点。     


访问地址：[http://tools.yimo.link](http://tools.yimo.link)       
纯净版：[https://metools.js.org](https://metools.js.org)        
chrome插件版:https://github.com/yimogit/metools-plugin 

实现列表
-----------------------
1. 加密/解密类 ['AES','DES','RC4','Rabbit','TripleDES','Base64','MD5','SHA1','SHA224','SHA256','SHA384','SHA512','HmacSHA1','HmacSHA224','HmacSHA256','HmacSHA384','HmacSHA512','HmacMD5']          
2. 编码/解码 ['utf-8', 'ascii', 'unicode', 'url', 'base64']     
3. 图片转base64
4. 字符串替换
5. MarkDown转HTML
6. 生成二维码
7. 在线翻译（百度，有道）

技术栈
--------------------       
    vue V2.0.1      
    vue-router V2.0.1       
    layui V1.0.9 
    crypto-js V3.1.9-1

本地运行需要环境：   
"node": ">= 4.0.0",         
"npm": ">= 3.0.0"

1. 还原包      
--------------------    
`npm install`       

2. 运行
--------------------
`npm run dev`

打包
--------------------
`npm run build`

push脚本提交修改
--------------------
`push 修改了一点东西~~`
注：在dist目录重新拉取了pages分支
