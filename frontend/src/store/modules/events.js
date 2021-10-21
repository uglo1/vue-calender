import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const state = {
  events: [],
  event: null, // クリックされた予定
};

const getters = {
  // 日付を文字列型から日付型へ変換する
  events: state => state.events.map(event => {
    return {
      ...event,
      start: new Date(event.start),
      end: new Date(event.end)
    };
  }),

  // 上と同様に日付型に変換する
  event: state => state.event ? {
    ...state.event,
    start: new Date(state.event.start),
    end: new Date(state.event.end)
  }: null,
};

const mutations = {
  setEvents: (state, events) => (state.events = events),
  setEvent: (state, event) => (state.event = event),
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(`${apiUrl}/events`);
    commit('setEvents', response.data); // mutationの呼び出し
  },
  setEvent({ commit }, event) {
    commit('setEvent', event);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
