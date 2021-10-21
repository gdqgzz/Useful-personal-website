<template>
  <div>
    <p>插件聚集模块</p>
    <p>插件分三块，第一块名字，带连接数据的搜索，第二块演示区，第三块复制区，包含HTML，css，js</p>
    <div class="pluginGrid">
      <div class="pluginName">
        <el-row>
          <el-col :span="12">
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="handleSelect"
            ></el-autocomplete>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <div style="padding: 5px">
          <el-button type="primary" v-on:click="Jumps()" >导入并跳转到试验场</el-button>
          <el-collapse accordion>
            <el-collapse-item title="四个小球球">
              <div><router-link to="/plugin/ing/various_stars"> 类型2</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="输入框">
              <div id="d33">><router-link to=""> 类型2</router-link></div>
              <div><router-link to=""> 类型2</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="轮播图">
              <div><router-link to=""> 类型2</router-link></div>
              <div><router-link to=""> 类型2</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency">
              <div><router-link to=""> 类型2</router-link></div>
              <div><router-link to=""> 类型2</router-link></div>
              <div><router-link to=""> 类型2</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability">
              <div><router-link to=""> 类型2</router-link></div>
              <div><router-link to=""> 类型2</router-link></div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <div id="texts">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plugin",
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      // new_data: {
      //   b: '<div class="el-col el-col-7"><pre><code id="html" class="html hljs language-xml"></code></pre></div>',
      // },
      // new_html: {
      //   b: '<div class="el-col el-col-7"><pre><code id="html" class="html hljs language-xml"></code></pre></div>',
      // },
    };
  },
  methods: {
      Jumps(){
        sessionStorage.setItem('html', document.querySelector("#html").innerText)
        sessionStorage.setItem('css', document.querySelector("#css").innerText)
        sessionStorage.setItem('javascript', document.querySelector("#javascript").innerText)
        window.location.href = "#/proving";
      },
    code_data() {
      return [
        {
          name: "输入框",
          类型1: { html: "1", css: "12321321432243", javascript: "1" },
          类型2: { html: "1", css: "1", javascript: "1" },
        },
        {
          name: "轮播图",
          类型1: { html: "1", css: "1", javascript: "1" },
          类型2: { html: "1", css: "1", javascript: "1" },
        },
        {
          name: "输入框",
          类型1: { html: "1", css: "1", javascript: "1" },
          类型2: { html: "1", css: "1", javascript: "1" },
        },
        {
          name: "输入框",
          类型1: { html: "1", css: "1", javascript: "1" },
          类型2: { html: "1", css: "1", javascript: "1" },
        },
      ];
    },

    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路，必彦➕）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
    //初始化页面数据
    // this.new_html = this.code_data();
    // this.new_data.b = this.code_data()[0].类型1.css;
    // console.log(this.code_data()[0].类型1.css)
    // console.log( this.new_html)

  },
};
</script>
<style>
.pluginGrid {
  display: grid;
  grid-template-columns: 1.5fr 10fr;
}
.pluginGrid > div {
  border: 1px solid #000;
  height: 100%;
}
 
</style>