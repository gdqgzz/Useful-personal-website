<template>
    <div >
        <!-- <div :style="{backgroundImage: 'url(' + Img + ')' }"> -->
            <div>
            <div class='wrap' style="display: flex;
            background-image: url('./assets/logo.png');
            background-size: cover;
            width: 500px;
            height: 500px;
            align-items: center;
            justify-content: center;margin:auto">
            <div class='planet'>
                <div class='ball'><router-link to="/plugin/ing"> 插件</router-link></div>
                <div class='ball second'><router-link to="/proving">试验场</router-link></div>
                <div class='ball third'><router-link to="/templates">模板</router-link></div>
                <div class='ball four'><router-link to="/#">样式</router-link></div>
            </div>
        </div>
        
        <ul>
            <p>本站点属于不断完善的成长型</p>
        <li>插件：源代码构建的功能性插件，演示和复制取用</li>
        <li>试验场：其他第三方插件测试效果或留存本插件使用实例</li>
        <li>模板：页面模板，重用性高的页面留存</li>
        <li>样式：自主开发特效，动画留存</li>
        <li>GDQ,今天又是美好的一天呐，元气满满，加油！    最终解释权归GDQ所有</li>
        </ul>
        
        </div>
        
    </div>
</template>
<script>
import img from '@/assets/logo.png'
export default {
    name:'login',
    data(){
    return{
        Img: img
    }
}}
</script>

<style>
/* three.js 试验场  git clone --depth=1 https://github.com/mrdoob/three.js.git */
       /* .wrap {
            display: flex;
            background-image: url('./bg2.jpg');
            background-size: cover;
            width: 500px;
            height: 500px;
            align-items: center;
            justify-content: center;
        } */
        .ball>a{
            color: #13c2c2
        }
        .planet {
            position: absolute;
            border: 2px solid #13c2c2;
            width: 300px;
            height: 300px;
            transform-style: preserve-3d;
            transform: scaleY(0.5) rotateZ(30deg);
            border-radius: 50%;
           
        }

        .ball {
            width: 50px;
            height: 50px;
            position: absolute;
            border-radius: 50%;
            background-color: rgba(20, 12, 33, .5);
            left: calc(50% - 25px);
            top: -25px;
            text-align: center;
            line-height: 50px;
            color: #13c2c2;
            transform: rotateZ(-30deg) scaleY(2);
        }
        .second {
            left: calc(50% + 125px);
            top: 125px;
        }
        .third {
            left: calc(50% - 25px);
            top: 275px;
        }
        .four {
            left: calc(50% - 175px);
            top: 125px;
        }
        
        /* // 公转动画 */
        @keyframes planet-rotate {
        0% {
            transform:  rotate(30deg) scaleY(0.5) rotate(0);
        }
        100% {
            transform:  rotate(30deg) scaleY(0.5) rotate(360deg);
        }
        }

        /* // 自转动画 */
        @keyframes self-rotate {
        0% {
            transform: rotate(0) scaleY(2) rotate(-30deg);
        }
        100% {
            transform: rotate(-360deg) scaleY(2) rotate(-30deg);
        }
        }

        .planet {
            animation: planet-rotate 16s linear infinite;
        }

        .ball {
            animation: self-rotate 16s linear infinite;
        } 
</style>
