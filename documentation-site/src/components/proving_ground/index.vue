<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-row>
            <el-col :span="24">
              <h3 class="grid-content bg-purple" style="text-align: center">
                新功能试验场/插件试验场
              </h3>
            </el-col>
          </el-row>
          <el-row style="border: 1px solid #000; padding: 2px">
            <el-col :span="2">
              <div class="grid-content bg-purple" style="margin:auto;text-align: center">
                <el-button type="primary">切换按钮</el-button>
              </div>
            </el-col>
            <el-col :span="22">
              <div class="grid-content bg-purple-light" style="border-left:1px solid #000；height:100%;padding-left:5px">
                <el-button v-on:click="removesession()">数据全清</el-button>
                <el-button  v-on:click="exhibits()">运行代码</el-button>
                <el-button >功能性按钮3</el-button>
                <el-button >功能性按钮4</el-button>
                <el-button >功能性按钮5</el-button>
                  <el-popover placement="top" width="300" v-model="visible">
                    <p>载入插件选项，点击确定开始加载，清空也确认吧，还没想好要不要添加清空按钮</p>
                    <el-switch v-model="value1" active-text="" inactive-text="Three.js,相关3D插件"></el-switch>
                    <el-switch v-model="value2" active-text="" inactive-text="模拟官网环境"></el-switch>
                    <el-switch v-model="value3" active-text="" inactive-text="其他没想法的插件"></el-switch>
                    <div style="text-align: right; margin: 0">
                          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                            <el-button type="primary" size="mini" @click="jsson(),visible = false">确定</el-button>
                    </div>
                    <el-button slot="reference">添加试验环境</el-button>
                  </el-popover>
              </div>
            </el-col>
          </el-row>
        </div>
        <div
          class="grid-content bg-purple-dark"
          style="border: 1px solid #000; min-height: 300px"  id="exhibit"
        >

          <h4 style="text-align: center">展示区域</h4>
        </div>
        <div
          class="grid-content bg-purple-dark"
          style="border: 1px solid #000; min-height: 300px"
        >
          <el-row style="text-align: center">
            <el-col :span="8" style="border: 1px solid #000; min-height: 300px" >
              <p>文本输入框：html区域</p>
              <el-input id="html" type="textarea" :autosize="{ minRows: 50, maxRows: 50}" placeholder="html" v-model="textarea1"></el-input>
            </el-col>
            <el-col :span="8" style="border: 1px solid #000; min-height: 300px">
              <p>文本输入框：css区域</p>
              <el-input type="textarea" :autosize="{ minRows: 50, maxRows: 50}"  id="css" placeholder="css" v-model="textarea2"></el-input>
            </el-col>
            <el-col :span="8" style="border: 1px solid #000; min-height: 300px" >
              <p>文本输入框：javascript区域</p>
              <el-input type="textarea" :autosize="{ minRows: 50, maxRows: 50}"  id="javascript" placeholder="javascript" v-model="textarea3"></el-input>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content bg-purple-dark">
          <el-button type="success" v-on:click="exhibits()">运行代码</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import func from 'vue-editor-bridge'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS3DRenderer,CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
export default {
    name:'proving',
    data(){
    return{
        textarea2:sessionStorage.getItem('css'),
        textarea1:sessionStorage.getItem('html'),
        textarea3:sessionStorage.getItem('javascript'),
      visible: false,
       value1: false,
       value2: false,
       value3: false,
    }
  },
  mounted(){
    
  },
  methods:{
    exhibits(){
      var exhibitss= document.querySelector("#html").value+"<"+"script"+">"+document.querySelector("#javascript").value+"</"+"script"+">"+"<"+"style"+">"+document.querySelector("#css").value+"</"+"style"+">"
      document.querySelector("#exhibit").innerHTML=exhibitss
      sessionStorage.removeItem('css')
      sessionStorage.removeItem('html')
      sessionStorage.removeItem('javascript')
    }
    ,removesession(){
      document.querySelector("#exhibit").innerHTML='<h4 style="text-align: center">展示区域</h4>'
      document.querySelector("#html").value=""
      document.querySelector("#css").value=""
      document.querySelector("#javascript").value=""
    },
    jsson(){
      if(this.value1)alert('three.js,还没开始配置导入，只是示例有这个功能')
      if(this.value2)alert('官网环境，按顺序导入所有文件，现在用不到，所以还么开始做')
      if(this.value3)alert("没想好的")
    }
  }
}

</script>