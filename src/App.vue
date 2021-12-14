<template>
  <div id="header">
    <span v-for="(title, index) in monthTitle" :key="index" >{{title}}</span>
    </div>
  <calendar @isOpen="openPanel"></calendar>
  <panel v-if="$store.state.open" :pagex="xposition" :pagey="yposition"></panel>
  <div class="holidays d-flex justify-content-around">
    <p>
      <router-link to="/Chinese-holiday">Chinese holiday</router-link>
    </p>
    <p>
      <router-link to="/West-holiday">West holiday</router-link>
    </p>
  </div>

  <router-view></router-view>
</template>

<script>

import calendar from './components/calendar.vue'
import panel from './components/panel.vue'
// import holiday from './components/holiday.vue'




export default {
  name: 'App',
  components: {
    calendar,
    panel,
    // holiday,
  },
  data() {
    return{
      monthTitle:[],
      xposition:[],
      yposition:[],

    }

  },
  methods:{
    openPanel(val) {
      // this.$store.state.open = val.right
      // this.$store.state.dateId = val.id
      this.$store.commit('openPanel', val)  
      this.xposition = val.xpos
      this.yposition = val.ypos   
    },
    timeformate() {
      let newdate = new Date();
      let year = newdate.getFullYear();
      let month = newdate.getMonth() + 1;
      this.monthTitle = year + "年" + month + "月"
      console.log(...this.monthTitle)
    },
    aaa() {
      
    }
  },
  created() {
    this.timeformate()
  },
}
</script>

<style>
#header {
  margin-top: 20px;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;

}

#header span {
  cursor:pointer;
  display: inline-block;
  transition: transform 0.25s;

}

#header span:hover {
  transform: translateY(-10px) rotate(5deg) scale(1.3);
}

.holidays a {
  cursor:pointer;
  display: inline-block;
  transition: transform 0.25s;

}

.holidays a:hover {
  text-decoration: none;
  transform: scale(1.5);
}

</style>

