export const OVERSPREAD_STORE_GET_IS_OPEN = "overspreadStore/getIsOpen"
export const OVERSPREAD_STORE_GET_TYPE = "overspreadStore/getType";

export const OVERSPREAD_STORE_SET_IS_OPEN = "overspreadStore/setIsOpen";
export const OVERSPREAD_STORE_SET_TYPE = "overspreadStore/setType";

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