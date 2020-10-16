export default {
    state: {
        authenticated: false,
        mockAccount: {
            username: "diana",
            password: "1234"
        }
    },
    mutations: {
        LOGIN (state) {
            state.authenticated = true;
        },
        LOGOUT (state) {
            state.authenticated = false;
        }
    },
    actions: {
        login (context) {
            context.commit('LOGIN');
        },
        logout (context) {
            context.commit('LOGOUT');
        }
    },
    getters: {
        getAuthenticated (state) {
            return state.authenticated;
        },
        getMockAccount (state) {
            return state.mockAccount;
        }
    }
}