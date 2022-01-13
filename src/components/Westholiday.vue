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
  name: "westholiday",
  props: [],
  data() {
    return {
      holidayInfo:''
    };

  },
  methods: {
    holiday() {
      axios.get('https://mocki.io/v1/9a79cf46-2a79-495f-8e31-ad496947d5a1',
      {headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
        .then(response => {
          console.log(response.data.data)
          this.holidayInfo = response.data.data
        })
        .catch(error => {
          console.log(error.response.data)
        });

      axios.interceptors

      // example.interceptors.request.use(
      //   function (config) {
      //     return config
      //   },
      //   function (error) {
      //     return Promise.reject(error)
      //   }
      // )
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
