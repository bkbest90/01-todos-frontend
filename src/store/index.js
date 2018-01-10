import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all',
    completed: false
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHANG_COMPLETE_STAT (state, {index, completed}) {
      state.todos[index].completed = completed
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    removeTodo ({commit}, index) {
      commit('REMOVE_TODO', index)
    },
    changeStat ({commit}, {index, completed}) {
      commit('CHANG_COMPLETE_STAT', {index, completed})
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
