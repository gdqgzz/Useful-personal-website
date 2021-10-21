import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import plugin from '@/components/plugin/plugin'
import hellos from '@/components/hello.vue'
import lightbicycle from '@/components/lightbicycle.vue'
import various_stars from '@/components/plugin/ing/various_stars.vue'
import plugin_index from '@/components/plugin/index'
//Proving ground区域
import proving_ground_index from '@/components/proving_ground/index.vue'
//templates区域
import templates from '@/components/templates/index'
import templates_index from '@/components/templates/documentation/index'
import style_standard from '@/components/templates/documentation/style_standard'
import terms_of_se from '@/components/templates/documentation/terms_of_se'
import template_example from '@/components/templates/documentation/template_example'
import factory from '@/components/templates/documentation/factory'
//新加测试
import cs from '@/components/cs.vue'
import cs1 from '@/components/cs1.vue'
import cs2 from '@/components/cs2.vue'
import cs3 from '@/components/cs3.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/lightbicycle',
      name:'lightbicycle',
      component:lightbicycle
    }
    ,
    {
      path: '/',
      name: 'hellos',
      component: hellos
    },
    {
      path:'/plugin',
      name:'plugin',
      component:plugin,
      children: [
        {
          path: 'ing',
          name: 'various_stars',
          component: plugin_index
        } ,
        {
          path: 'ing/various_stars',
          name: 'various_stars',
          component: various_stars
        } 
      ]
    },
    {
      path:'/proving',
      name:'proving ground',
      component:proving_ground_index,
      children: [
        {
          path: 'ing',
          name: 'various_stars',
          component: proving_ground_index
        }
      ]
    },
    {
      path:'/templates',
      name:'template',
      component:templates,
      children: [
        {
          path: '/',
          name: 'index',
          component: templates_index
        },
        {
          path: '1',
          name: 'terms of se',
          component: terms_of_se
        },
        {
          path: '2',
          name: 'style standard',
          component: style_standard
        },
        {
          path: '3',
          name: 'template example',
          component: template_example
          
        },
        {
          path: '4',
          name: 'factory',
          component: factory 
          
        }
      ]
    },
    {
      path: '/cs',
      name: '测试3d',
      component: cs
    },
    {
      path: '/cs1',
      name: '测试3d1',
      component: cs1
    },
    {
      path: '/cs2',
      name: '测试3d2',
      component: cs2
    },
    {
      path: '/cs3',
      name: '测试3d3',
      component: cs3
    },
  ]
})
