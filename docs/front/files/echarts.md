# eharts

## 封装基础echarts组件---(vue项目)

- 1. 基本组件common\echart\index.vue

     ```vue
     <template>
       <div :id="id" :class="className" :style="{ height: height, width: width }" />
     </template>
     
     <script>
     var echarts = require('echarts')
     export default {
       name: 'Echart',
       props: {
         className: {
           type: String,
           default: 'chart'
         },
         id: {
           type: String,
           default: 'chart'
         },
         width: {
           type: String,
           default: '100%'
         },
         height: {
           type: String,
           default: '100%'
         },
         options: {
           type: Object,
           default: () => ({})
         }
       },
       data () {
         return {
           chart: null
         }
       },
       watch: {
         options: {
           handler (options) {
             // 设置true清空echart缓存
             this.chart.setOption(options, true)
           },
           deep: true
         }
       },
       created () {
       },
       activated () {
         // 防止 keep-alive 之后图表变形
         if (this.chart) {
           this.chart.resize()
         }
       },
     
       mounted () {
         this.initChart()
         window.addEventListener('resize', () => {
           this.chart.resize()
         })
       },
       methods: {
         initChart () {
           // 初始化echart
           this.chart = echarts.init(this.$el) // 'tdTheme'
           this.chart.setOption(this.options, true)
         }
       }
     }
     </script>
     
     <style></style>
     ```

- 2.1数据 components/Echarts/histogram/index.vue

  ```vue
  <template>
    <!-- 数据层 -->
    <Chart :cdata="cdata" />
  </template>
  
  <script>
  import Chart from '../histogram/charts.vue'
  export default {
    components: {
      Chart
    },
    data () {
      return {
        cdata: {
          xAsisData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          data: [5, 20, 36, 10, 10, 20]
        }
      }
    },
    computed: {},
    watch: {},
    created () { },
    mounted () { },
    methods: {}
  }
  </script>
  <style lang="less" scoped>
  </style>
  ```

  

- 2.2 业务 components/Echarts/histogram/charts.vue

  ```vue
  <template>
    <!-- 业务层 -->
    <Echart id="Chart"
            :options="options"
            height="100%"
            width="100%" />
  </template>
  
  <script>
  import Echart from '@/common/basicEcharts'
  export default {
    components: {
      Echart
    },
    props: {
      cdata: {
        type: Object,
        default: () => ({})
      }
    },
    data () {
      return {
        options: {}
      }
    },
    watch: {
      cdata: {
        handler (newData) {
          this.echartsChange()
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      echartsChange () {
        this.options = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: this.cdata.xAsisData
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: this.cdata.data
            }
          ]
        }
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  </style>
  ```

  

- 3.主页面调用

  ```vue
  <template>
    <div>
      <Histogram style="height:40vh;width:30vw;" />
    </div>
  </template>
  <script>
  import Histogram from '@/components/Echarts/histogram'
  export default {
    data () {
      return {
  
      }
    },
    components: {
      Histogram
    },
    mounted () {
    },
    methods: {
    }
  }
  </script>
  <style scoped>
  
  </style>
  ```

  

## 不改变窗口图表自适应

- `npm i element-resize-detector --save`

  ```js
  import elementResizeDetectorMaker from "element-resize-detector";
  // 解决不改变窗口自适应  写在mountd中即可
  let erd = elementResizeDetectorMaker()
      erd.listenTo(this.$refs.map, () => {
          that.$nextTick(() => {
          myChart.resize()
      })
  })
  ```

  
