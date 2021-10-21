import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const state = {
  events: [],
};

const getters = {
  // events: (state) => state.events
  // 日付を文字列型から日付型へ変換する
  events: state => state.events.map(event => {
    return {
      ...event,
      start: new Date(event.start),
      end: new Date(event.end)
    };
  }),
};

const mutations = {
  setEvents: (state, events) => (state.events = events),
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(`${apiUrl}/events`);
    commit('setEvents', response.data); // mutationの呼び出し
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
