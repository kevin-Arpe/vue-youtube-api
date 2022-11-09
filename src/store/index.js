import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    video: null,
    isDetailShow: false,
  },
  getters: {

  },
  mutations: {
    SEARCH(state, videos) {
      state.videos = videos;
    },
    SELECT_VIDEO(state, video) {
      state.video = video;
      state.isDetailShow = true;
      console.log(state.isDetailShow);
    },
    CLOSE_DETAIL(state) {
      state.video = null;
      state.isDetailShow = false;
    },
  },
  actions: {
    search({ commit }, payload) {
      const API_URL = process.env.VUE_APP_YOUTUBE_API_URL;
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
      axios({
          url: API_URL,
          method: 'GET',
          params: {
              key: API_KEY,
              part: 'snippet',
              q: payload,
              type: 'video',
              maxResult: 20,
          }
      })
      .then((res) => {
        commit('SEARCH', res.data.items);
      })
      .catch((err) => {
          console.log(err);
      });
    },
    selectVideo({ commit }, payload) {
      commit('SELECT_VIDEO', payload);
    },
    closeDetail({ commit }) {
      commit('CLOSE_DETAIL');
    }
  },
  modules: {

  }
})
