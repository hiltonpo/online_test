<template>
<div class="holiday">
  <div class="title d-flex justify-content-between">
    <div class="name">節慶名稱</div>
    <div class="time">日期</div>
    <div class="count">天數</div>
  </div>
  <div class="info d-flex justify-content-between" v-for="(date, index) in holidayInfo" :key="index">
    <div class="date-name">{{date.name}}</div>
    <div class="date-time">{{date.date}}</div>
    <div class="date-count">{{date.days}}</div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "holiday",
  props: [],
  data() {
    return {
      holidayInfo:''
    };

  },
  methods: {
    holiday() {
      axios.get('https://mocki.io/v1/7f3eb132-d7c3-482a-ba80-7e990a306cbd',
      {headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
        .then(response => {
          console.log(response.data.data)
          this.holidayInfo = response.data.data
          })
        .catch(error => {
          console.log(error.response.data)
          });
    },
  },
  created() {
    this.holiday()
  }



};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date-name, .name{
  width: 200px;
  text-align: center;
}

.date-time, .time{
  width: 200px;
  text-align: center;
}

.date-count, .count {
  width: 40px;
  margin-right: 80px;
  text-align: center;
}



</style>
