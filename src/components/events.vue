<template>
        <!-- 將eventData以v-for(event, index)呈現，並將個別資料的date放置相對應的日期 -->
        <div class="events clearfix flex-fill" v-if="event.date == date" @dblclick="updatePanel(event)">
            <div class="title">{{event.title}}</div>
            <div class="from">{{event.start_time}}</div>
        </div>
</template>

<script>
export default {
  name: "events",
  props: ['event','date'],
  data() {
    return {
      
    };

  },
  methods: {
    updatePanel(event) {
      this.$store.commit('updatePanel', event);
    },
  },



};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/events.scss";
</style>
