export const MULTIMEDIA_OPTIONS_STORE_GET_IS_OPEN = "multimediaOptionsStore/getIsOpen";

export const MULTIMEDIA_OPTIONS_STORE_SET_IS_OPEN = "multimediaOptionsStore/setIsOpen";

export default {
    namespaced: true,
    state: {
        isOpen: false,
    },
    mutations: {
        SET_IS_OPEN(state: any, isOpen: boolean) {
            state.isOpen = isOpen;
        }
    },
    actions: {
        setIsOpen({commit}: any, isOpen: boolean) {
            commit('SET_IS_OPEN', isOpen);
        }
    },
    getters: {
        getIsOpen(state: any) {
            return state.isOpen;
        }
    }
}