import Vue from 'vue'
import Vuex from 'vuex'
import Target from './models/Target';
import VendingMachine from './models/VendingMachine';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    target: new Target({
      health: 100,
      name: "ScarCrow",
      attacks: {
        kick: 10,
        slap: 1,
        punch: 5,
        haduouken: 100
      },
      items: []
    }),
    machine: new VendingMachine({
      transactionTotal: 0,
      acceptableCurrency: {
        quarter: 0.25,
        dime: 0.10,
        nickel: 0.05
      },
      foodItems: [{
        id: 'a1',
        img: '../assets/coke.jpg',
        price: 0.75,
        quantity: 10
      },
      {
        id: 'a2',
        img: '../assets/creamsoda.jpg',
        price: 0.60,
        quantity: 100
      },
      {
        id: 'a3',
        img: '../assets/drpepper.jpg',
        price: 0.90,
        quantity: 2
      }],
      machineTotal: 10,
      selectedProduct: ''
    })
  },

  mutations: {
    setHealth(state, actualHealth) {
      state.target.health = actualHealth
    },
    setTransTotal(state, newTotal) {
      state.machine.transactionTotal = newTotal
    },
    vendProduct(state, product) {
      state.machine.selectedProduct = product
      let delay = setTimeout(function () {
        state.machine.selectedProduct = ''
      }, 1000)
    }
  },
  actions: {
    attack({ dispatch, commit, state }, payload) {
      //async call
      let newHealth = state.target.health - state.target.attacks[payload]
      commit('setHealth', newHealth)
    },

    addMoney({ dispatch, commit, state }, payload) {
      //artificial operation, async call would go here
      let newTotal = state.machine.addMoney(payload)
      commit('setTransTotal', newTotal)
    },
    getChange({ dispatch, commit, state }, payload) {
      let newTotal = state.machine.giveChange()
      commit('setTransTotal', newTotal)
    },
    purchase({ dispatch, commit, state }, payload) {
      let product = state.machine.vend(payload)
      commit('vendProduct', product)
    }
  }
})

