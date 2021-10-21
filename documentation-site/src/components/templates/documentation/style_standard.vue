<template>
  <div>
    <p>样式标准实例</p>
    <el-tabs :tab-position="tabPosition" style="height: 200px">
      <el-tab-pane label="字体规范">
        <div>
          <h3 style="text-align: center">字体规范试验场</h3>
          <el-switch
            v-model="value1"
            active-text=""
            inactive-text="新标题字体"
          ></el-switch>
          <el-switch
            v-model="value2"
            active-text=""
            inactive-text="正文字体"
          ></el-switch>
          <el-switch
            v-model="value3"
            active-text=""
            inactive-text="旧标题字体"
          ></el-switch>
          <el-button
            type="success"
            icon="el-icon-check"
            circle
            v-on:click="font()"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            v-on:click="romeFont()"
          ></el-button>

          <el-container>
            <el-header>
              <p style="text-align: center">
                介绍啥的最后慢慢想，现在想着太费脑袋瓜了,现在就假装他是个介绍，下面其他的也是,举个简单的例子以做示范
              </p>
            </el-header>
            <el-container style="border: 1px solid #e4e7ed">
              <el-aside width="300px" style="border: 1px solid #e4e7ed">
                <div style="min-height: 100px; padding: 5px" v-bind:style="{'line-height':line_height,color:colorto,margin:marginto+'px','font-size':fontto+'px','font-family':font_family}">
                  {{ textarea }}
                </div>
                
              </el-aside>
              <!-- <el-main>Main</el-main> -->
              <el-aside style="width: 80.5%;text-align: center;">
                <el-row>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-tag>文案</el-tag><el-input type="textarea" :rows="7" placeholder="请输入文案" v-model="textarea" maxlength="50" show-word-limit></el-input>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-tag>行高</el-tag><el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="line_height"></el-input>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-tag>边距</el-tag><el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="marginto"></el-input>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-tag>颜色</el-tag><el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="colorto"></el-input>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-tag>字体</el-tag><el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="fontto"></el-input>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-tag>获取代码</el-tag>
                <div  style="" id="fontid">
                    <p v-if="line_height!==''">line-height:{{line_height}}px; </p>
                    <p v-if="colorto!==''">color:{{colorto}};</p>
                    <p v-if="marginto!==''">margin:{{marginto}}px; </p>
                    <p v-if="fontto!==''">font-size:{{fontto}}px </p>
                </div>
                    </div>
                  </el-col>
                </el-row>
              </el-aside>
            </el-container>
          </el-container>
          <el-tabs type="border-card">
            <el-tab-pane label="banner字体"
              >banner字体案例
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="date" label="更新日期" width="150">
                </el-table-column>
                <el-table-column prop="name" label="名称" width="120">
                </el-table-column>
                <el-table-column prop="margins" label="边距+行距" width="120">
                </el-table-column>
                <el-table-column prop="fonts" label="字体类型" width="120">
                </el-table-column>
                <el-table-column prop="colors" label="颜色" width="120">
                </el-table-column>
                <el-table-column prop="sizes" label="大小" width="120">
                </el-table-column>
                <el-table-column prop="codes" label="代码" width="120">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="120">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row, this)" type="text" size="small">
                      <el-popover placement="right" width="400" trigger="click">
                        <div>
                          <p style="text-align: center">
                            {{ gridData.font_name }}
                          </p>
                          <p :style="gridData.fonts">你好世界，Hello World</p>
                        </div>
                        <el-button slot="reference">查看</el-button>
                      </el-popover>
                    </el-button>
                    <el-button @click="a(this)" type="text"  size="small">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="一级标题">一级标题 </el-tab-pane>
            <el-tab-pane label="二级标题">二级标题</el-tab-pane>
            <el-tab-pane label="三级标题">三级标题</el-tab-pane>
            <el-tab-pane label="正文字体">正文字体</el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
      <el-tab-pane label="边距相关规范">同理1</el-tab-pane>
      <el-tab-pane label="色彩相关规范">同理2</el-tab-pane>
      <el-tab-pane label="其他添加使用">同理3</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: "top",
      value1: true,
      value2: false,
      value3: false,
      tableData: [
        {
          date: "2021.7.30",
          name: "banner字体1",
          margins: "上20下40左右0",
          fonts: "A字体",
          colors: "黑色（#000）",
          sizes: "pc:40,paid:30,mo:20",
          codes: "color:#f00;font-size:30px",
        },
        {
          date: "2021.7.30",
          name: "banner字体2",
          margins: "上20下40左右0",
          fonts: "A字体",
          colors: "黑色（#000）",
          sizes: "pc:40,paid:30,mo:20",
          codes: "color:#f0f;font-size:20px",
        },
        {
          date: "2021.7.30",
          name: "banner字体3",
          margins: "上20下40左右0",
          fonts: "A字体",
          colors: "黑色（#000）",
          sizes: "pc:40,paid:30,mo:20",
          codes: "赶时间，这就是代码",
        },
        {
          date: "2021.7.30",
          name: "banner字体4",
          margins: "上20下40左右0",
          fonts: "A字体",
          colors: "黑色（#000）",
          sizes: "pc:40,paid:30,mo:20",
          codes: "赶时间，这就是代码",
        },
        {
          date: "2021.7.30",
          name: "banner字体5",
          margins: "上20下40左右0",
          fonts: "A字体",
          colors: "黑色（#000）",
          sizes: "pc:40,paid:30,mo:20",
          codes: "赶时间，这就是代码",
        },
      ],
      gridData: { fonts: "", font_name: "" },
      textarea: "默认文案ABCabc",
      line_height:"",
      marginto:"",
      colorto:"",
      fontto:"",
      getcode:'',
      font_family:''
    };
  },
  mounted() {},
  methods: {
    font() {
      var i = 0;
      if (this.value1 == true) i += 1;
      if (this.value2 == true) i += 1;
      if (this.value3 == true) i += 1;
      if (i > 1) {
        alert("不要贪心哟，只能选一个");
        throw "小贪心鬼，你好坏"
      }
      console.log(this.value1, this.value2, this.value3);
      var p=''
      if (this.value1 == true)p="titleFonts";
      if (this.value2 == true)p= 'textFonts';
      if (this.value3 == true)p='spearTitle';
      this.font_family=p
    },
    romeFont() {
      this.value1 = false;
      this.value2 = false;
      this.value3 = false;
      this.font_family=''
    },
    handleClick(row, e) {
      console.log(row);
      //   alert(row.name);
      console.log(row.codes);
      console.log(e);
      this.gridData.fonts = row.codes;
      this.gridData.font_name = row.name;
      // document.querySelector("#font_name").innerText=row.name
      // document.querySelector("#fonts").setAttribute('style',row.codes)
    },
    a(b){
      console.log(b)
    }
  },
};
</script>
<style>
#fontid{
    padding: 6px;
    text-align: left;
    height: 131px;
        border: 1px solid rgb(228, 231, 237);
}
#fontid>p{
    margin: 0;
}
</style>
