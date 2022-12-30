



export const state = () => ({

    user: {
        email: null,
        password: null,
    },

    isLogin: false,



})

export const getters = {

    getUser(state) {
        return state.user
    },

    checkLoginSituation(state) {
        return state.isLogin
    }


}

export const mutations = {

    setUser(state, user) {

        state.user = user
    },

    setLogin(state, situation) {
        state.isLogin = situation
    }

}






