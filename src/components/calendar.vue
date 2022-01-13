<template>
  <div id="calendar" >
    <div id="days" class="clearfix">
        <div class="day" v-for="(item, index) in week" :key="index">
        {{item}}
        </div>

    </div>
    <div id="dates" class="clearfix">
      <div class="date-block"  v-for="(date, index) in getDaysOfMonth" :key="index" 
      :class="{'empty': date == null}" @dblclick.capture="openPanel($event, index, date)">
        <div class="date">{{date}}</div>
        <events :event="item" :date="date" v-for="(item, index) in orderevent" :key=index 
        ></events>

      </div>
    </div>

 </div>
</template>

<script>
import events from './events'

export default {
  name: "calendar",
  props: {
  },
  components: {
    events
  },
  data(){
    return{
      week:['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      monthTitle:[]

    };
  },

  computed:{
    getDaysOfMonth() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      // 這個月有幾天
      let days = new Date(year, month, 0).getDate();

      // calculatee paddings

      // 本月1號是星期幾? (0~6)
      let firstDateOfTheMonth = new Date(year, month-1, 1).getDay();

      // 本月最後一天是星期幾? (0~6)
      let lastDateOfTheMonth = new Date(year, month-1, days).getDay();
      // calendar 要填的 padding
      let frontPaddings = firstDateOfTheMonth;
      let backPaddings = 6 - lastDateOfTheMonth;


      function calc_day(type) {
        let sum = []
        if (type === 'front') {
          for (let i=0; i < frontPaddings; i++) {
            sum[i] = null;
          }
          return sum
        } else if(type === 'totalday') {
          for (let i=0; i < days; i++) {
            sum[i] = i+1;
          }
          return sum
        } else {
          for (let i=0; i < backPaddings; i++) {
            sum[i] = null;
          }
          return sum
        }
      }
      let [front, totalday, back] = [calc_day('front'), calc_day('totalday'), calc_day('back')]

      return front.concat(totalday, back);

    },
    orderevent() {
      function compare(a,b) {
        const A = a.start_time.split(':');
        const B = b.start_time.split(':');

        let comparsion = [];
        if ( A[0] > B[0] || (A[0] == B[0] && A[1] > B[1]) ) {
          comparsion = 1;
        }
        else {
          comparsion = -1;
        }
        return comparsion ;
      }

      let order = this.$store.state.eventData.slice().sort(compare);
      return order;
    },  
  },
  methods:{
    openPanel($event, index, date) {
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      let day = new Date(year, month-1, 1).getDay();
      
      if (date!=null) {
        this.$emit("isOpen", {right:true, xpos:$event.pageX, ypos:$event.pageY, id:index-day+1});
        this.$store.commit('newPanel');
      }
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/calendar.scss";



</style>
