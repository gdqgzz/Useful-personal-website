<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
            <h5>默认颜色</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>文档</span>
        </template>
        <el-submenu index="1-1" >
          <template slot="title">使用规范</template>
          <el-menu-item index="1-1-1"> <router-link to="/templates/1"> 选项1</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">选项2</template>
          <el-menu-item index="1-2-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title">选项3</template>
          <el-menu-item index="1-3-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-5">
          <template slot="title">选项5</template>
          <el-menu-item index="1-5-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>
          <span>样式标准</span>
        </template>
          <el-submenu index="2-1" >
          <template slot="title">标准实例</template>
          <el-menu-item index="2-1-1"> <router-link to="/templates/2"> 选项1</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title">选项2</template>
          <el-menu-item index="2-2-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="2-3">
          <template slot="title">选项3</template>
          <el-menu-item index="2-3-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="3-5">
          <template slot="title">选项5</template>
          <el-menu-item index="3-5-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>模板案例</span>
        </template>
         <el-submenu index="1-1" >
          <template slot="title">模块实例</template>
          <el-menu-item index="1-1-1"> <router-link to="/templates/3"> 选项1</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">组装工厂</template>
          <el-menu-item index="1-2-1"> <router-link to="/templates/4"> 完整模板</router-link></el-menu-item>
          <el-menu-item index="1-2-1"> <router-link to=""> 模块组装</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title">选项3</template>
          <el-menu-item index="1-3-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-alarm-clock"></i>
          <span>其他或规范</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
            <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);//展开触发
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);//关闭触发
    },
  },
  mounted(){

  }
};
</script>