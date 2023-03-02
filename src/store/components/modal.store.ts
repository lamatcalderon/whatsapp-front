export const MODAL_STORE_GET_IS_OPEN = "modalStore/getIsOpen"
export const MODAL_STORE_GET_TYPE = "modalStore/getType";

export const MODAL_STORE_SET_IS_OPEN = "modalStore/setIsOpen";
export const MODAL_STORE_SET_TYPE = "modalStore/setType";

export default {
    namespaced: true,
    state: {
        isOpen: false,
        type: 0,
    },
    mutations: {
        SET_IS_OPEN(state: any, isOpen: boolean) {
            state.isOpen = isOpen;
        },
        SET_TYPE(state: any, type: number) {
            state.type = type;
        }
    },
    actions: {
        setIsOpen({commit}: any, isOpen: boolean) {
            commit('SET_IS_OPEN', isOpen);
        },
        setType({commit}: any, type: number) {
            commit('SET_TYPE', type);
        }
    },
    getters: {
        getIsOpen(state: any) {
            return state.isOpen;
        },
        getType(state: any) {
            return state.type;
        }
    }
}