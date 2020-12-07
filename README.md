<h1 align="center">
  <a href="http://doc.cms.7yue.pro/">
  <img src="./logo.png" width="250"/></a>
  <br>
</h1>

<h4 align="center">一个简单高效的node二次开发框架 | <a href="#" target="_blank">FAST-CMS</a></h4>

<p align="center">
  <a href="###" rel="nofollow">
  <img src="https://img.shields.io/badge/koa-2.13.0-green.svg" alt="flask version" data-canonical-src="https://img.shields.io/badge/koa-2.13.0-green.svg" style="max-width:100%;"></a>
  <a href="###" rel="nofollow"><img src="https://img.shields.io/badge/FAST-1.0.0-red" alt="lin-cms version" data-canonical-src="https://img.shields.io/badge/FAST-1.0.0-red" style="max-width:100%;"></a>
  <a href="###" rel="nofollow"><img src="https://img.shields.io/badge/license-MIT-lightgrey.svg" alt="LISENCE" data-canonical-src="https://img.shields.io/badge/license-MIT-lightgrey.svg" style="max-width:100%;"></a>
</p>

## 简介

### 什么是 FAST-CMS？

<em>FAST-CMS</em>是一套基于 koa 的用于前后端分离二次开发的基础框架 🚀，拥有基本的用户授权，服务器日志，路由配置，数据库配置，接口文档等完善的开箱即用功能。

目的是提供一套完善的后端解决方案，可以直接对接多端`WEB`，`APP`,`小程序`等，助力业务快速实施，上线，测试

### 文档地址

[http://v5ant.com/](http:///v5ant.com/)

### 项目结构

```js
├── README.md                   // 说明
├── publish                     // 静态目录
├── logs                        // 系统日志（项目跑起来自动生成）
├── public                      // 静态资源目录
│   ├── apidoc                  // 服务器接口文档资源（run doc自动生成）
│   └── index.html              // 网站首页默认地址
├── package.json                // 项目配置文件
├── apidoc.json                 // API构建文档配置
├── server                      // 核心
│   ├── config                  // 程序相关配置文件，数据库，日志，接口啥的
│   ├── controller              // 控制器,API对接数据库业务逻辑
│   ├── middleware              // koa 中间件
│   ├── models                  // 对接数据库CRUD
│   ├── routers                 // API路由配置
│   ├── utils                   // 工具函数
│   └── app.js                  // 程序入口文件
```

### 项目功能

- [x] 用户登陆/登出
- [x] 权限校验
- [x] 系统日志
- [x] 数据库连接配置
- [x] API 配置
- [x] API 文档
- [x] API 统一响应构建
- [ ] 数据库类型可配置
- [ ] ssr 支持
- [ ] CMS 一键安装
- [ ] 数据库备份

### 开发步骤

需要提前安装 `nodejs`,`mongodb`

```bash
# 克隆到本地
git clone git@github.com:webweifeng/vue-base-tpl.git

# 进入文件夹
cd vue-base-tpl

# 安装项目依赖文件
npm install

# 启动本地开发
npm run dev

# 启动生产环境
npm run start

# 构建API文档
npm run doc

#  运行测试
npm run test

```

## 最后
该CMS系统还有很多不完善的地方，有任何问题请与我联系845882161@qq.com，如果对您有帮助，请帮忙点个star让更多人参与进来，谢谢🙏
