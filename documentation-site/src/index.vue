<template>
    <div>
        <div>
            <h1 style="text-align: center;">欢迎使用独立文档网站</h1>
        </div>
        <router-view/>
    </div>
</template>


<script>
import hellos from '@/components/hello.vue'
export default {
  name: 'App',
  components:{hellos}
}
</script>