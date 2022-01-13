<template>
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import {onMounted, onUnmounted} from 'vue'
export default {
  name: "chart",
  setup() {
    let echart = echarts;

    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echart.dispose;
    });
	
    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"), "white");
      chart.setOption({
        xAxis: {
          type: "category",
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ]
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              801,
              102,
              230,
              4321,
              4600
            ],
            type: "line",
            smooth: true
          }
        ]
      });
      window.onresize = function() {
        chart.resize();
      };
    }

    return { initChart };
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding-top: 50px;
  margin: 0 auto;
  box-sizing: border-box;
}


</style>
