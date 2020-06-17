<template>
  <div class="home" :style="top=mes">
    <el-row type='flex' class='home-wrappper'>
      <el-col :span='5' class='Notice'>
        <b>通知公告</b>
        <el-timeline style='height:380px;overflow:hidden;margin-top:20px' id='timeline'>
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type" :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
        <el-divider v-if='activities.length>7' @click='showMore()'>
          <span style='cursor:pointer'>{{flag?'点击查看':'点击收起'}}</span>
          <i :class="flag?'el-icon-caret-bottom':'el-icon-caret-top'" style='font-size:20px;'></i>
        </el-divider>
      </el-col>
      <el-col :span='18' class='right'>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6" class="grid-content">
            <el-row type="flex" class='exhale-main'>
              <el-col :span="8" class='bg-blue'>
                <i class='el-icon-goods' style="font-size:50px;color:white"></i>
              </el-col>
              <el-col :span="16">
                <div class='mainNum'>
                  <strong>234444</strong>
                  <span>当前排队客户数</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6" class="grid-content">
            <el-row type="flex" class='exhale-main'>
              <el-col :span="8" class='bg-blue yellow'>
                <i class='el-icon-tickets' style="font-size:50px;color:white"></i>
              </el-col>
              <el-col :span="16">
                <div class='mainNum'>
                  <strong>2344</strong>
                  <span>当前IVR在线客户数</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6" class="grid-content">
            <el-row type="flex" class='exhale-main'>
              <el-col :span="8" class='bg-blue skyblue'>
                <i class='el-icon-tickets' style="font-size:50px;color:white"></i>
              </el-col>
              <el-col :span="16">
                <div class='mainNum'>
                  <strong>1234</strong>
                  <span>当前IVR服务在线客户数</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-tabs type="border-card" class='exhale'>
          <el-tab-pane label="电话呼出量">
            <div id="myChart2" :style="{width:'1400px',height:'350px'}"></div>
          </el-tab-pane>
          <el-tab-pane label="平均呼出量">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row type='flex' class='home-wrappper'>
      <el-col :span='5' class='manyi'>
        <div id="myChart4" :style="{width:'400px',height:'300px',}"></div>
      </el-col>
      <el-col :span='17' class='right'>
        <el-tabs type="border-card" class='exhale'>
          <el-tab-pane label="当天接听量">
            <div id="myChart3" :style="{width:'1400px',height:'320px'}"></div>
          </el-tab-pane>
          <el-tab-pane label="当天通话总长">
            <div id="myChart1" :style="{width:'400px',height:'320px'}"></div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import eventBus from '@/assets/bus.js'
  // @ is an alias to /src
  export default {
    name: 'Home',
    data() {
      return {
        mes: 0,
        flag: true,
        // 通告数据
        activities: [{
            content: '宿舍四十五分呼出中心客服服务系统',
            timestamp: '1 hours ago',
            type: 'primary',
          }, {
            content: '各个啥啊带的饭地方中心客服服务系统',
            timestamp: '5 hours ago',
            type: 'primary',
          }, {
            content: '地方规划色粉的的中心客服服务系统',
            timestamp: '10 hours ago',
            type: 'primary',
          }, {
            content: '发订单生是是是法人产中心客服服务系统',
            timestamp: '2 days ago',
            type: 'primary',
          },
          {
            content: '耳朵防弹少年团客服服务系统',
            timestamp: '10 hours ago',
            type: 'primary',
          }, {
            content: '生产呼出中心客服服务系统',
            timestamp: '2 days ago',
            type: 'primary',
          },
          {
            content: '生产呼出中心客服服务系统',
            timestamp: '2 days ago',
            type: 'primary',
          }, {
            content: '生产呼出中心客服服务系统',
            timestamp: '2 days ago',
            type: 'primary',
          }, {
            content: '生产呼出中心客服服务系统',
            timestamp: '2 days ago',
            type: 'primary',
          },
        ],
        //满意度
        manyi: {
          // backgroundColor: 'rgba(0,0,0,.1)',
          title: {
            text: '满意度排名',
            left: 'center',
            top: 20,
            textStyle: {
              color: 'black'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [{
                value: 335,
                name: 'Voice'
              },
              {
                value: 310,
                name: 'Chat'
              },
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }]
        },
        manyidu: {
          title: {
            text: '满意度排名',
            // subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Chat', 'Voice']
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                value: 335,
                name: 'Chat'
              },
              {
                value: 135,
                name: 'Voice'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        },
        self: {
          color: ['#3398DB'],
          title: {
            text: '本组工作量',
            left: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }]
        }
      }
    },
    created() {
      eventBus.$on('headheight', (mes) => {
        console.log(mes)
        this.mes = mes;
      })
    },
    computed: {},
    mounted() {
      this.drawLineManyi()
      this.drawLine();
      this.drawLine3();
      this.drawLine4()
    },
    methods: {
      showMore() {
        if (this.flag == true) {
          document.getElementById('timeline').style.height = 'auto';
          this.flag = !this.flag
        } else {
          document.getElementById("timeline").style.height = "380px"
          this.flag = !this.flag
        }
      },
      //满意度
      drawLineManyi() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart.setOption(this.manyi)
        window.onresize = function() {
          myChart.resize();
        }
      },
      drawLine4() {
        let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
        // 绘制图表
        myChart4.setOption(this.manyidu)
        window.onresize = function() {
          myChart4.resize(); //若有多个图表变动，可多写
        }
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart2.setOption(this.self)
        window.onresize = function() {
          myChart2.resize(); //若有多个图表变动，可多写
        }
      },
      drawLine3() {
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        myChart3.setOption({
          title: {
            text: '各组工作量',
            subtext: '各项指标',
             left: 'center'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '20%',
            containLabel: true
          },
          tooltip: {
            trigger: 'axis'
          },
           legend: {
            orient: 'vertical',
            left: 'left',
            data: ['接通数', '对话时长']
          },
         
          toolbox: {
            show: true,
            feature: {
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          calculable: true,
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['一组', '二组', '三组', '四组', '五组', '六组', '七组']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
              name: '接通数',
              type: 'line',
              smooth: true,
              symbol: 'none',
              itemStyle: {
                normal: {
                  color: "rgba(179,127,235,0.5)",
                  areaStyle: {
                    type: 'default',
                    width: 2,
                  }
                }
              },
              data: [3, 10, 21, 54, 100, 49, 32],
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(179,127,235,0.5)' // 0% 处的颜色
                  }, {
                    offset: 0.5,
                    color: 'rgba(179,127,235,0.3)' // 100% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(179,127,235,0.1)' // 100% 处的颜色
                  }],
                  global: false // 缺省为 false
                }
              }
            },
            {
              name: '对话时长',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#b6eeff',
                  areaStyle: {
                    type: 'default',
                    width: 2
                  }
                }
              },
              data: [5, 10, 20, 30, 40, 60, 100],
            },
          ]
        });
        window.onresize = function() {
          myChart3.resize(); //若有多个图表变动，可多写
        }
      }
    },
    components: {}
  }
</script>
<style>
  .el-col {}
  .bg-purple {
    background: #57c8f4;
  }
  .bg-blue.yellow {
    background: #ffcf2a;
  }
  .bg-blue.skyblue {
    background: #57c8f4;
  }
  .bg-blue {
    background: #ff6d60;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-content {
    height: 120px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  }
  .grid-content>b {
    letter-spacing: 2px;
  }
  .row-bg {
    background-color: #f9fafc;
    margin-bottom: 20px;
  }
  .home {
    width: 100%;
    height: 100%;
    margin-top: 136px;
  }
  .home-wrappper {
    padding: 15px 30px;
    width: 100%;
  }
  .right {
    flex: 1;
    margin-left: 20px;
  }
  .real-time {
    display: flex;
    justify-content: space-around;
  }
  .Notice {
    width: 300px;
    height: 495px;
    overflow-y: scroll;
    background: white;
    border-radius: 10px;
    padding: 15px;
  }
  .Notice::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .exhale {
    height: 350px;
  }
  .myChart3 {
    padding: 0;
    margin: 0;
    border: solid 1px red;
  }
  .exhale-main {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .mainNum {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .mainNum>p {
    letter-spacing: 2px;
  }
  .mainNum>strong {
    font-size: 32px;
    line-height: 45px;
  }
  .manyi {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .more {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: solid 1px red;
  }
</style>
