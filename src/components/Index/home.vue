<template>
  <div class="home" :style="top=mes">
    <el-row type='flex' class='home-wrappper'>
      <el-col :span='4' class='Notice'>
        <b>通知公告</b>
        <el-timeline style='margin-top:20px;'>
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type" :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
        <div class></div>
      </el-col>
      <el-col :span='19' class='right'>
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
                  <strong>234444</strong>
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
                  <strong>234444</strong>
                  <span>当前IVR服务在线客户数</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-tabs type="border-card" class='exhale'>
          <el-tab-pane label="电话呼出量">
            <div id="myChart2" :style="{width:'1200px',height:'320px'}"></div>
          </el-tab-pane>
          <el-tab-pane label="平均呼出量">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row type='flex' class='home-wrappper'>
      <el-col :span='4' class='manyi'>
        <div id="myChart1" class="myChart" :style="{width: '300px',height:'300px'}"></div>
      </el-col>
      <el-col :span='18' class='right'>
        <el-tabs type="border-card" class='exhale'>
          <el-tab-pane label="当天接听量">
            <div id="myChart3" :style="{width:'1200px',height:'320px'}"></div>
          </el-tab-pane>
          <el-tab-pane label="当天通话总长">定时任务补偿</el-tab-pane>
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
        activities: [{
            content: '外呼呼出中心客服服务系统',
            timestamp: '1 hours ago',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-goods'
          }, {
            content: '外呼呼出中心客服服务系统',
            timestamp: '5 hours ago',
            color: 'rgb',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-folder-openede'
          }, {
            content: '外呼呼出中心客服服务系统',
            timestamp: '10 hours ago',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-tickets'
          }, {
            content: '外呼呼出中心客服服务系统',
            timestamp: '2 days ago',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-brush'
          },
          {
            content: '外呼呼出中心客服服务系统',
            timestamp: '10 hours ago',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-tickets'
          }, {
            content: '外呼呼出中心客服服务系统',
            timestamp: '2 days ago',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-brush'
          }
        ],
        pie: {
          tooltip: { // 图例的 tooltip 配置，配置项同 legend.tooltip。默认不显示，可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip
            trigger: 'item',
            // formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          itemWidth: '5', // 图例标记的图形宽度
          textStyle: {},
          legend: { // 图例
            orient: 'vertical',
            x: 'right',
            icon: 'round', // 和data里面的icon类型，设置的是所有icon
            data: [{ // 图例的数据可以是对象或者字符串类型
              name: '直接访问', // 图例项的名称，应等于某系列的name值（如果是饼图，也可以是饼图单个数据的 name）
              // 强制设置图形为圆。
              icon: 'circle', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
              // 设置文本为红色
              textStyle: { // 图例项的文本样式。
                color: 'red'
              }
            }, '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '60%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '15',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
                value: 335,
                name: '直接访问'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 135,
                name: '视频广告'
              },
              {
                value: 1548,
                name: '搜索引擎'
              }
            ],
            itemStyle: { // 设置实例颜色
              normal: {
                color: function(params) {
                  // 自定义颜色
                  var colorList = [
                    '#FFC069', '#FFBB96', '#95DE64', '#5CDBD3', '#69C0FF',
                  ]
                  return colorList[params.dataIndex]
                }
              },
            }
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
    mounted() {
      this.drawLine1()
      this.drawLine();
      this.drawLine3();
    },
    methods: {
      drawLine1() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart.setOption(this.pie)
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart2.setOption({
          title: {
            show: true, //显示折线图
            text: '简单折线图', //标题文字
            //link: 'http://echarts.baidu.com/option.html#title.link', //主标题超文本链接,
            //subtext: '熟悉title的配置项', //副标题
            left: 50, //配置title的位置
            padding: [5, 20, 5, 10] //title的padding值
          },
          toolbox: {
            show: true, //是否显示工具栏组件
            orient: 'vertical', //工具栏icon的布局朝向
            itemSize: 18, //工具栏icon的大小
            itemGap: 20, //item之间的间距
            right: 20, //toolbox的定位位置
            feature: {
              saveAsImage: {
                show: true
              }, //导出图片
              dataView: {
                show: true
              }, //数据视图
              magicType: { //动态类型切换
                type: ['line', 'bar']
              },
              dataZoom: {
                show: true
              }, //数据区域缩放
              restore: {
                show: true
              }, //重置
            },
          },
          markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
              },
              {
                type: 'min',
                name: '最小值'
              }
            ]
          },
          markLine: {
            data: [{
                type: 'average',
                name: '平均值'
              },
              {
                type: 'max',
                name: '最大值'
              },
              {
                type: 'min',
                name: '最小值'
              }
            ]
          },
          tooltip: {
            trigger: 'axis' //通过哪种方式触发tip
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            name: '产品'
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'line',
            data: [10, 20, 36, 10, 10, 20],
            itemStyle: {
              normal: {
                color: 'hotpink'
              }
            }
          }],
        });
      },
      drawLine3() {
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        myChart3.setOption({
          title: {
            text: '各组信息记录',
            subtext: 'show'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['意向', '预购', '成交']
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
              name: '成交',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default'
                  }
                }
              },
              data: [10, 12, 21, 54, 260, 830, 710]
            },
            {
              name: '预购',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default'
                  }
                }
              },
              data: [30, 182, 434, 791, 390, 30, 10]
            },
            {
              name: '意向',
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default'
                  }
                }
              },
              data: [1320, 1132, 601, 234, 120, 90, 20]
            }
          ]
        })
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
  .bg-blue.skyblue{
    background:#57c8f4;
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
    margin-bottom:20px;
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
    background: white;
    border-radius: 10px;
    padding: 15px;
  }
  .exhale {
   
    height: 350px;
  }
  .exhale-main {
    display: flex;
    align-items: center;
    justify-content: center;
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
     line-height:45px;
  }
  .manyi{
   
    background:white;
  }
</style>
