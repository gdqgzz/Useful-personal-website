<template>
    <div>
        
<link rel="stylesheet" href="https://www.lightbicycle.com/css/Custom-style/twentytwenty.css">
<div class="twentytwenty-wrapper twentytwenty-horizontal">
    <div
      class="twentytwenty-container cbf mo-mb-24 mt-3 mt-lg-4"
      style="height: 800px"
    >
      <img
        src="https://www.lightbicycle.com/images/Falcon-vs-Falcon-Pro/Falcon-Pro-wheel.jpeg"
        alt=""
        class="twentytwenty-before"
        style="clip: rect(0px, 401.5px, 800px, 0px)"
      />
      <img
        src="https://www.lightbicycle.com/images/Falcon-vs-Falcon-Pro/Falcon-wheel.jpeg"
        alt=""
        class="twentytwenty-after"
      />
      <div class="twentytwenty-overlay">
        <div class="twentytwenty-before-label"></div>
        <div class="twentytwenty-after-label"></div>
      </div>
      <div class="twentytwenty-handle" style="left: 401.5px">
        <span class="twentytwenty-left-arrow"></span
        ><span class="twentytwenty-right-arrow"></span>
      </div>
    </div>
  </div>
    </div>
  
</template>
<style>
.twentytwenty-horizontal .twentytwenty-handle:before,
.twentytwenty-horizontal .twentytwenty-handle:after {
background: #0070ff;
left: 16px;
width: 6px;
}

.twentytwenty-left-arrow {
border-right: 6px solid #0070ff;
}

.twentytwenty-right-arrow {
border-left: 6px solid #0070ff;
}

.twentytwenty-handle {
border: 3px solid #0070ff;
}

</style>

<script>


export default {
    data(){
      return{
      to:[
        "https://www.lightbicycle.com/js/jquery-1.9.1.min.js",
        "https://www.lightbicycle.com/js/Custom-style/jquery.twentytwenty.js",
        "https://www.lightbicycle.com/js/Custom-style/jquery.event.move.js"
      ]
      }
      
    },
    mounted(){
        for(var i=0;i<3;i++){
           var e = document.createElement("script");
      e.setAttribute("src", this.to[i]),
        document.querySelector("body").appendChild(e);
        }

$(function () {
$('.twentytwenty-container').twentytwenty();
});

    }
}
</script>

