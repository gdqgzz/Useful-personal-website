// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index.vue'
// import App from './APP'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from "highlight.js";
// 使用样式，有多种样式可选
import "highlight.js/styles/base16/3024.min.css";
// 增加自定义命令v-highlight
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
// 自定义字体css文件导入
import "./components/font.css";
// 增加组定义属性，用于在代码中预处理代码格式
Vue.prototype.$hljs = hljs;
Vue.use(ElementUI,{ size: 'small', zIndex: 3000 })


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
