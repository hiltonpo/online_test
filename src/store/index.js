// import { includes } from 'core-js/core/array';
import { createStore } from 'vuex'



export default createStore({
  state: {
    open:false,
    isNew:true,

    dateId:[],
    eventIndex:[],
    currentEventIndex:[],


    eventData:[],
    eventInfo:{
      date:null,
      title:null,
      start_time:null,
      end_time:null,
      description:null
    },
    errorMessage:'',
  },
  mutations: {

    // 開啟panel 
    openPanel(state, val) {
      state.open = val.right
      state.dateId = val.id
    },

    // 關閉panel
    closePanel(state) {
      state.open = !open
      state.errorMessage = ''  
    },

    // 開啟新panel
    newPanel (state) {
      state.isNew = true;
      state.eventInfo =  Object.assign({}, null);
    },
    // 切換至update model panel
    updatePanel (state, event) {
      state.isNew = false;
      state.eventInfo = Object.assign({}, event);
      state.currentEventIndex = state.eventData.findIndex(item=> item.title === event.title);
      console.log(state.currentEventIndex)
    },
    
    // use Vuex in strict mode
    updateInfoTitle (state, title) {
      state.eventInfo.title = title
    },

    updateInfoStartTime (state, start_time) {
      state.eventInfo.start_time = start_time
    },

    updateInfoEndTime (state, end_time) {
      state.eventInfo.end_time = end_time
    },

    updateInfoDescription (state, description) {
      state.eventInfo.description = description
    },
  },
  actions: {
    createEventUI({commit, state}) {
          state.eventInfo.date = state.dateId
          state.eventIndex = state.eventData.length 
          state.eventData[state.eventIndex] = Object.assign({}, state.eventInfo);  
          console.log(state.eventData);
          commit('closePanel')  

    },

    updateEventUI({commit, state}) {
          state.eventData[state.currentEventIndex] = Object.assign({}, state.eventInfo);
          commit('closePanel')
    },

    removeEventUI({commit, state}) {
      let result = confirm('Do you really want to delete?');

      if (result) {
             state.eventData.splice(state.currentEventIndex, 1);  // remove event
             commit('closePanel');  //close panel

           }
    },

  },
  modules: {
  }
})
