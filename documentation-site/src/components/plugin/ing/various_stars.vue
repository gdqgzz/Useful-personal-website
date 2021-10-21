<template>
          <div>
        <el-row>
          <el-col :span="24" style="border-bottom:2px solid #000">
            <div>
            <div class='wrap' style="display: flex;
            background-image: url('./assets/logo.png');
            background-size: cover;
            width: 500px;
            height: 255px;
            align-items: center;
            justify-content: center;margin:auto">
            <div class='planet'>
                <div class='ball'><router-link to="/#"> 1</router-link></div>
                <div class='ball second'><router-link to="/#">2</router-link></div>
                <div class='ball third'><router-link to="/#">3</router-link></div>
                <div class='ball four'><router-link to="/#">4</router-link></div>
            </div>
        </div>
        
        </div>  
          </el-col>
          <el-col :span="8" style="border: 3px solid #fff;height:100%">
            <pre v-highlight>
              html
              <code class="html" id="html">
                <!-- {{new_html.b}} -->
          &lt;div&gt;
            &lt;div class='wrap' style="display: flex;
            background-image: url('./assets/logo.png');
            background-size: cover;
            width: 500px;
            height: 500px;
            align-items: center;
            justify-content: center;margin:auto"&gt;
            &lt;div class='planet'&gt;
                &lt;div class='ball'&gt;&lt;a href="/plugin"&gt; 1&lt;/a&gt;&lt;/div&gt;
                &lt;div class='ball second'&gt;&lt;a href="/#"&gt;2&lt;/a&gt;&lt;/div&gt;
                &lt;div class='ball third'&gt;&lt;a href="/#"&gt;3&lt;/a&gt;&lt;/div&gt;
                &lt;div class='ball four'&gt;&lt;a href="/#"&gt;4&lt;/a&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
              </code>
            </pre>
          </el-col>
          <el-col :span="8" style="border: 3px solid #fff">
            <pre v-highlight>
              css
              <code class="css" id="css">
                <!-- {{new_data.b}} -->
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
              </code>
            </pre>
          </el-col>
          <el-col :span="8" style="border: 3px solid #fff">
            <pre v-highlight>
              javascript
              <code class="javascript" id="javascript">
                <div  >
                      <!-- {{new_data.b}} -->
                      class Test {
    private $name;
    private $age;
    public function __construct($array) {
        $this->name = $array['name'];
        $this->age = $array['age'];
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getAge() {
        return $this->age;
    }

    public function show() {
        printf('my name is %s,age is %d',$this->name,$this->age);
    }

}
                </div>
              </code>
            </pre>
          </el-col>
        </el-row>
      </div>
</template>
<style id="style1">
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