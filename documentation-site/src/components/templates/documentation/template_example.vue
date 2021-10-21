<style scoped>
/* 复刻官网环境 */
  @import"http://gdqf.lb.in/css/bootstrap4.min.css";
  @import "http://gdqf.lb.in/css/public.css?time=20210722";
  @import "http://gdqf.lb.in/css/common.css?time=20210722";
</style>
<template>
  <div>
    <p>模板实例</p>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="新闻类" name="first">
        <el-tabs :tab-position="tabPosition" style="">
            
          <el-tab-pane v-for="item in templates" :key="item.c" :label="item.a">
              <p>跳转到编辑，按模块</p>
              <el-button type="primary" @click="open">跳转到编辑</el-button>
              <el-button type="primary">复制</el-button>
              <div v-html="item.b "></div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="故事类" name="second">故事类</el-tab-pane>
      <el-tab-pane label="其他" name="third">其他</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      tabPosition: "left",
      templates: [
        {
          a: "2021.7.31(通用版)",
          b: "用户不管，本区域全为展示区域，顶部加一个开启关闭按钮，用于代码展示，其作用就是复制，也许可以添加对文案编辑功能，编辑完成后再复制，展示直接去掉，文案编辑，一键复制，然后黏贴，嗯，一条龙服务，搞定就能收工",
        },
        {
          a: "2021.7.32(优化图形加载版)",
          b: '<style>.slick_banner{background-image:url(https://s3.us-west-1.amazonaws.com/pic.lightbicycle.com/www/preprocess/newsletter_a01a728f-eab2-3dd8-8b1c-24696fb9e726_BANNER-build-oil-slick-mtb-road-wheelsets.jpeg)}@media only screen and (max-width:768px){.slick_banner{background-image:url(https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/MO-BANNER-oil-slick-carbon-bike-wheelset.jpeg)}}.Oil_img .box-shadow{box-shadow:0 0 16px rgb(45,50,81,.13)}.Custom_opt li{padding-bottom:16px;border-bottom:1px solid #d1d1d1}</style><header class="slick_banner story-move-header"><div class=new-banner><p class="mb-0 font-30 font-md-36 font-sm-32 plate-title text-center font-lg-48">Build An Oil Slick Wheelset To Grab Some Attention!</div></header><div class="m-auto max-width-980 px-3 px-lg-0"><div class="font-18 my-4 my-lg-5"><p>Since SRAM released its rainbow Eagle AXS system, the oil slick finish went viral in MTB, and make a resurgence in the road market.<p>With the increased demand for this unique look from mountain and road riders, it seems fitting for us to include more oil slick options (for limited wheel models). This vibrant color creates some of the most beautiful custom wheelsets, allowing you to stand out from the crowd.</div><div class="font-18 mt-4 mt-lg-5 Oil_img"><div><p class="font-30 font-md-36 font-sm-32 plate-title">Oil Slick Offerings:<p>More oil slick options may be updated soon. Tell us your favorites in the comments!</div><div class="row text-center"><div class="col-12 col-md-6 px-0 pr-md-2"><div class=box-shadow><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/Bitex-BX212F-BX212R-MTB-hubs.jpeg></div><p class=mt-3>Bitex BX212F / BX212R (MTB)</div><div class="mt-3 col-12 col-md-6 mt-md-0 pl-md-2 px-0"><div class=box-shadow><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/Bitex-BX312F-BX312R-straightpull-road-hubs.jpeg></div><p class=mt-3>BX312F / BX312R (Road Disc)</div></div><div class="mt-3 row text-center"><div class="col-12 col-md-6 px-0 pr-md-2"><div class=box-shadow><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/Pillar-Wing-20-aero-bladed-spokes-rainbow.jpeg></div><p class=mt-3>Pillar Wing 20 Aero-Bladed (Straightpull/J-bend)</div><div class="mt-3 col-12 col-md-6 mt-md-0 pl-md-2 px-0"><div class=box-shadow><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/light-bicycle-single-butted-spokes-for-mtb-wheels.jpeg></div><p class=mt-3>Light Bicycle Design Single-Butted (J-bend)</div></div><div class="mt-3 row text-center"><div class="col-12 col-md-6 px-0 pr-md-2"><div class=box-shadow><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/brass-spoke-nipples-oil-slick-coating.jpeg></div><p class=mt-3>Light Bicycle Design (Brass)</div><div class="mt-3 col-12 col-md-6 mt-md-0 pl-md-2 px-0"><div class=box-shadow><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/oil-slick-decal-for-carbon-wheel.jpeg></div><p class=mt-3>Oil slick decals</div></div></div><div class="font-18 mt-4"><div><p class="font-30 font-md-36 font-sm-32 plate-title">Take a Dip: Get Green-y, Purple-y, Magenta-y</div><div class=row><div class="col-12 col-md-6 px-0 pr-md-2"><div class=box-shadow><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/Bitex-312-oil-slick-wheelset.jpeg></div></div><div class="mt-3 col-12 col-md-6 mt-md-0 pl-md-2 px-0"><div class=box-shadow><img alt=""src=https://s3.us-west-1.amazonaws.com/pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/oil-slick-carbon-road-wheel.jpeg></div></div></div><div class="mt-3 box-shadow"><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/light-bicycle-xc925-oil-slick-mtb-wheelset.jpeg></div><div class="mt-3 row"><div class="col-12 col-md-6 px-0 pr-md-2"><div class=box-shadow><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/oil-slick-bike-wheels.jpeg></div></div><div class="mt-3 col-12 col-md-6 mt-md-0 pl-md-2 px-0"><div class=box-shadow><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/Pillar-Wing-20-rainbow-spoked-wheels.jpeg></div></div></div></div></div><div class="font-18 mt-4 mt-lg-5 bg-f1f1f1"><div class="m-auto max-width-980 px-3 px-lg-0 Custom_opt py-4 py-5"><p class="mb-0 font-30 font-md-36 font-sm-32 plate-title text-center pb-2 pb-md-4">Other Custom Options You May Also Be Interested In:<ul class=panel><li><div class="mt-3 align-items-center cursor-pointer d-flex justify-content-between panel-header"><p class="mb-0 font-20 font-weight-700">Mixed spokes: Sapim CX Ray & Sapim CX Sprint</p><i aria-hidden=true class="fa fa-angle-double-down"></i></div><div class="mt-3 cursor_con"style=display:none><p>Sapim CX Sprint is similar to CX Ray but stiffer and heavier, thus many wheel builders would pair the CX Sprints (on the drive side) with the CX Rays to bring a more equal stiffness on both sides of a wheel.<p>This is why we add a new Sapim spoke option to our road disc wheelsets, that is CX Sprints for the drive side (rear) and CX Rays for all the other sides. If you would like this option but can’t find it online, leave a comment at checkout or email us (<span class=color-0070ff>sales@lightbicycle.com</span>) to discuss.</div><li><div class="mt-3 align-items-center cursor-pointer d-flex justify-content-between panel-header"><p class="mb-0 font-20 font-weight-700">Aero machine: 3-spoke & full-disc wheels</p><i aria-hidden=true class="fa fa-angle-double-down"></i></div><div class="mt-3 cursor_con"style=display:none><p>The best carbon upgrade for TT riders! The streamlined design of <a href=https://www.lightbicycle.com/photowall/Tri-Spoke-Front-Disc-Rear-Custom-Carbon-Wheelset.html target=_blank>3-spoke and disc wheels</a> ensures less turbulence as the air passes. You can buy these aero wheels as a pair or separately. Non-conventional wheels are not available online yet, please email us (<span class=color-0070ff>sales@lightbicycle.com</span>) for more detailed specifications.</p><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/tri-spoke-wheel-front-full-disc-wheel-rear.jpeg></div><li><div class="mt-3 align-items-center cursor-pointer d-flex justify-content-between panel-header"><p class="mb-0 font-20 font-weight-700">New texture decals: silver/gold foil</p><i aria-hidden=true class="fa fa-angle-double-down"></i></div><div class="mt-3 cursor_con"style=display:none><p>Send us any image or design if you want a custom wheel decal. Recently, we’re applying a new material on decals - foil paper (silver/gold). Some customers have specially ordered this type of decals, and the final look is beautiful. Foil decals are not listed online as an option yet, please email us (<span class=color-0070ff>sales@lightbicycle.com</span>) if this is your cup of tea.</p><img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/custom-foil-silver-decal-for-carbon-wheel.jpeg> <img alt=""src=https://pic.lightbicycle.com/www/newsletter/a01a728f-eab2-3dd8-8b1c-24696fb9e726/images/compressed/custom-foil-gold-decal-for-carbon-wheel.jpeg class=mt-3></div></ul></div></div>'
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
       open() {
        this.$alert(this.templates[1].b, {
          dangerouslyUseHTMLString: true
        });
      }
  },
};
</script>


