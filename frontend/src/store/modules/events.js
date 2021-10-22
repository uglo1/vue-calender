import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const state = {
  events: [],
  event: null, // クリックされた予定
  isEditMode: false, // 編集モード変数
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

  isEditMode: state => state.isEditMode,
};

const mutations = {
  setEvents: (state, events) => (state.events = events),
  appendEvent: (state, event) => (state.events = [...state.events, event]),
  setEvent: (state, event) => (state.event = event),
  setEditMode: (state, bool) => (state.isEditMode = bool),
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(`${apiUrl}/events`);
    commit('setEvents', response.data); // mutationの呼び出し
  },
  async createEvent({ commit }, event){
    const response = await axios.post(`${apiUrl}/events`, event);
    commit('appendEvent', response.data);
  },
  setEvent({ commit }, event) {
    commit('setEvent', event);
  },
  setEditMode({ commit }, bool) {
    commit('setEditMode', bool)
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
