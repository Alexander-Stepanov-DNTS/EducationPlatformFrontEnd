import axios from 'axios';

const state = {
    isAuthenticated: false,
    user: null,
    error: null,
};

const mutations = {
    SET_AUTH(state, payload) {
        state.isAuthenticated = payload.isAuthenticated;
        state.user = payload.user;
        state.error = payload.error;
    },
};

const actions = {
    async checkAuth({ commit }) {
        try {
            const response = await axios.get('http://localhost:8080/auth/user', { withCredentials: true });
            if (response.status === 200) {
                commit('SET_AUTH', {
                    isAuthenticated: true,
                    user: response.data,
                    error: null,
                });
            }
        } catch (error) {
            commit('SET_AUTH', {
                isAuthenticated: false,

                user: null,
                error: 'Ошибка при проверке аутентификации',
            });
        }
    },
};

const getters = {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    error: (state) => state.error,
};

export default {
    state,
    mutations,
    actions,
    getters,
};