# Bocs

> 一个小巧的阅读管理工具

<h3 align="center">
  <a href="http://bocs.leanapp.cn" target="\_blank">
    线上Demo
  </a>
</h3>

<p align="center">
  <a href="http://bocs.leanapp.cn" target="\_blank">
    <img src="https://github.com/yrq110/Bocs/blob/master/screenshots/home.png" width="700px">
  </a>
</p>

## 运行

```bash
git clone git@github.com:yrq110/Bocs.git

cd bocs

npm install 

npm run dev
```

## 技术与库

* vue + vuex + vue-router
* less + webpack
* [axios](https://github.com/mzabriskie/axios) (网络请求)
* [lockr](https://github.com/tsironis/lockr) (本地存储)
* [vue-lazyload](https://github.com/hilongjw/vue-lazyload) (图片懒加载)

## 特性

* 数据持久化使用localStorage
* 组件内均通过action触发mutation修改state
* 使用flex与rem实现响应式界面

## 协议

[MIT](https://opensource.org/licenses/MIT)