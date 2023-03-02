export const OVERLAY_PHONE_CHAT_STORE_SET_IS_OPEN = "overlayPhoneChatStore/setIsOpen";
export const OVERLAY_PHONE_CHAT_STORE_GET_IS_OPEN = "overlayPhoneChatStore/getIsOpen";

export const OVERLAY_PHONE_CHAT_STORE_SET_TYPE = "overlayPhoneChatStore/setType";
export const OVERLAY_PHONE_CHAT_STORE_GET_TYPE = "overlayPhoneChatStore/getType";

export default {
    namespaced: true,
    state: {
        isOpen: true,
        type: 0
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