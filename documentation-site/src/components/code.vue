<template>
    
</template>
<script>

// 定义一个名为 button-counter 的新全局组件
const app = Vue.createApp({})

// Define a new global component called button-counter
app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button v-on:click="count++">
      You clicked me {{ count }} times.
    </button>
    `
})

app.mount('#components-demo')
</script>
