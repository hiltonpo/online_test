<template>
    <div id="info-panel" :style="position" :class="[$store.state.isNew? 'new' : 'update']">
      <div class="close" @click="closePanel">x</div>

      <form>
        <input type="hidden" name="id" />
        <div class="title">
          <label>event</label>
          <input type="text" name="title" v-model="title"/>
        </div>
        <div class="error-msg" :class="[$store.state.errorMessage ? 'open' : '']">
          <div class="alert alert-danger">{{$store.state.errorMessage}}</div>
          
        </div>
        <div class="special">
          <label>special day</label>
          <input type="checkbox" v-model="special">
          <div class="special-day-name pl-2" v-if="special">
            <input type="radio" value="business" v-model="picked">
            <label for="business">business</label>
            <input type="radio" value="private" v-model="picked">
            <label for="private">private</label>
          </div>
        </div>
        <div class="time-picker">
          <div class="selected-date">
            <span class="month">{{currentMonth}}</span>/<span class="date">{{currentDate}}</span>
            <input type="hidden" name="year" />
            <input type="hidden" name="month" />
            <input type="hidden" name="date" />
          </div>
          <div class="from">
            <label for="from">from</label><br />
            <input id="from" type="time" name="start_time" v-model="start_time"/>
          </div>
          <div class="to">
            <label for="to">from</label><br />
            <input id="to" type="time" name="end_time" v-model="end_time"/>
          </div>
        </div>
        <div class="description">
          <label>description</label><br />
          <textarea name="description" id="description" v-model="description"></textarea>
        </div>
      </form>

      <div class="buttons clearfix">
        <button class="create" @click="createEvent">create</button>
        <button class="update" @click="updateEvent">update</button>
        <button class="cancel" @click="closePanel">cancel</button>
        <button class="delete" @click="removeEvent">delete</button>
      </div>
    </div>
</template>

<script>



export default {  
  name: "panel",
  props: ['pagex','pagey'],
  data() {
    return{
      position: {
        left: this.pagex+'px',
        top: this.pagey+'px',
      },
      currentMonth:[],
      currentDate:this.$store.state.dateId,
      special:false,
      picked:'',
    }
  },
  computed:{
    title: {
      get() {
        return this.$store.state.eventInfo.title
      },
      set(value) {
        this.$store.commit('updateInfoTitle', value)
      }
    },

    start_time: {
      get() {
        return this.$store.state.eventInfo.start_time
      },
      set(value) {
        this.$store.commit('updateInfoStartTime', value)
      }
    },

    end_time: {
      get() {
        return this.$store.state.eventInfo.end_time
      },
      set(value) {
        this.$store.commit('updateInfoEndTime', value)
      }
    },

    description: {
      get() {
        return this.$store.state.eventInfo.description
      },
      set(value) {
        this.$store.commit('updateInfoDescription', value)
      }
    },


  },

  methods:{
    timeformate() {
      let newdate = new Date();
      let month = newdate.getMonth() + 1;
      this.currentMonth = month 
    },

    createEvent() {
      this.$store.dispatch('createEventUI')
    },

    updateEvent() {
      this.$store.dispatch('updateEventUI')
    },

    closePanel() {
      this.$store.commit('closePanel')
    },

    removeEvent() {
      this.$store.dispatch('removeEventUI')
    },


  },
  created() {
    this.timeformate()
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/panel.scss";
</style>
