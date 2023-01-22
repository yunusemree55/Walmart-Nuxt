
export const state = () => ({

    user: {
        email: null,
        password: null,
    },

    isLogin: false,

    selectedProduct: null,
    totalPrice:0



})

export const getters = {

    getUser(state) {
        return state.user
    },

    checkLoginSituation(state) {
        return state.isLogin
    },

    getSelectedProduct(state){
      return state.selectedProduct
    },
    getTotalPrice(state){
      return state.totalPrice
    }

}

export const mutations = {

    setUser(state, user) {
        state.user = user
    },

    setLogin(state, situation) {
        state.isLogin = situation
    },

    setSelectedProduct(state,item){
      state.selectedProduct = item
    },
    setTotalPrice(state,price){
      state.totalPrice = price
    }

}

