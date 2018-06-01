
# travis-ci是什么？
> 一个使用yaml格式配置用于持续集成完成自动化测试部署的开源项目
> 官网：[https://travis-ci.org/](https://travis-ci.org/)

# 使用travis-ci集成vue.js项目
> 首先，您需要一个github账号 and 一个vue.js项目~ 没有的话试试这个啊[metools](https://github.com/yimogit/metools)

## 1. 登录Github并拥有一个项目
> 登录[github](https://github.com/) 然后Star,Fork [metools](https://github.com/yimogit/metools)   
> 当然可以先去看看这个项目是啥..[http://tools.yimo.link/](http://tools.yimo.link/)

## 2. 前往travis-ci官网
> 使用Github账号登录
![图片](https://dn-coding-net-production-pp.qbox.me/add807a1-5617-4df6-ba0d-a63568bbffd6.png)

## 3. 登录成功回到用户中心
> 默认会同步一部分仓库，如果太多的话需要点击Sync account进行同步
> ![图片](https://dn-coding-net-production-pp.qbox.me/155adb08-745f-4937-ad64-15eae01ef7e3.png) 

## 4. 开启对 metools 项目的集成并进入设置页面  
> ![图片](https://dn-coding-net-production-pp.qbox.me/2e93e40d-35fb-44fe-a62e-0a96e258dcc2.png)     
> 如下图所示，根据需要配置构建信息
> 添加github的Token到环境变量中，用户名，邮箱也可添加进去，这样配置文件中就可以使用了    
> 生成Token见步骤5.注意：**配置私密的环境变量时一定要加密，因为会显示在日志中且能够被他人看到**       
> ![图片](https://dn-coding-net-production-pp.qbox.me/88ec5462-f9ff-499e-876d-38130df95840.png)
> 根据步骤6的配置，还需要添加一些环境变量使起更方便(地址别填错了)
![图片](https://dn-coding-net-production-pp.qbox.me/eb84e86d-0119-49f4-b7b8-3f9a61995cb3.png)

## 5. Github生成访问令牌 (即添加授权)  
> 访问令牌的作用就是授权仓库操作权限 https://github.com/settings/tokens    
> Github>settings>Personal access tokens> Generate new token > Generate token> Copy Token 
> ![图片](https://dn-coding-net-production-pp.qbox.me/05e1958b-cf92-46a5-897d-b5a276905cf6.png) 



## 6. .travis.yml 文件的简单配置
> `.travis.yml`文件的作用就是在代码提交的时候travis-ci会根据该配置文件执行配置的任务  
> 在项目根目录中创建(或修改)`.travis.yml` 文件，其中`${环境变量}`为环境变量在travis中配置即可
``` yml
language: node_js
# nodejs版本
node_js: 
    - '6'

# Travis-CI Caching
cache:
  directories:
    - node_modules


# S: Build Lifecycle
install:
  - npm install

before_script:

# 无其他依赖项所以执行npm run build 构建就行了
script:
  - npm run build

after_script:
  - cd ./dist
  - git init
  - git config user.name "${U_NAME}"
  - git config user.email "${U_EMAIL}"
  - git add .
  - git commit -m "Update tools"
  - git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:${P_BRANCH}
# E: Build LifeCycle

branches:
  only:
    - master
env:
 global:
   # 我将其添加到了travis-ci的环境变量中
   #- GH_REF: github.com/yimogit/metools.git 

```
## 7. 自动构建项目
修改完成，并推送到github后，就可以在travis-ci.org中看到项目开始构建了(以后每次推送代码到仓库后都将会自动构建项目)

构建完成日志
![图片](https://dn-coding-net-production-pp.qbox.me/57f637e6-6226-4e99-b7d4-582811195582.png)

构建完成。在设置中可以看到默认已经将`gh-pages`分支部署到pages，访问https://用户名.github.io/metools/即可预览效果。
![图片](https://dn-coding-net-production-pp.qbox.me/5c3f81fd-8044-4a45-962b-78d5ec212daa.png) 

若构建失败，可以通过travis-ci中项目面板右上角的 `Restart build` 重新构建
![图片](https://dn-coding-net-production-pp.qbox.me/8612493c-d956-4845-a4fd-88c562ef35ba.png)
