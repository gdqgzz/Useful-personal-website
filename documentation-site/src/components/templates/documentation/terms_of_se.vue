<template>
    <div>
        <p>使用规范</p>
        

  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="系统使用介绍">
        <div>
            <p style="text-align: center;">介绍啥的最后慢慢想，现在想着太费脑袋瓜了,现在就假装他是个介绍，下面其他的也是</p>
        </div>
    </el-tab-pane>
    <el-tab-pane label="标准样式使用">同理1</el-tab-pane>
    <el-tab-pane label="模板案例使用">同理2</el-tab-pane>
    <el-tab-pane label="其他添加使用">同理3</el-tab-pane>
  </el-tabs>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>