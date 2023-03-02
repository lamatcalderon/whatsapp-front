export const PHONE_DATA_STORE_GET_IS_OPEN_CONVERSATIONS_UNREAD = "phoneDataStore/getIsOpenConversationsUnread";
export const PHONE_DATA_STORE_GET_IS_OPEN_NOTIFICATION = "phoneDataStore/getIsOpenNotification";

export const PHONE_DATA_STORE_SET_IS_OPEN_CONVERSATIONS_UNREAD = "phoneDataStore/setIsOpenConversationsUnread";
export const PHONE_DATA_STORE_SET_IS_OPEN_NOTIFICATION = "phoneDataStore/setIsOpenNotification";

export default {
    namespaced: true,
    state: {
        isOpenNotification: false,
        isOpenConversationUnread: false
    },
    mutations: {
        SET_IS_OPEN_NOTIFICATION(state: any, isOpenNotification: boolean) {
            state.isOpenNotification = isOpenNotification;
        },
        SET_IS_OPEN_CONVERSATION_UNREAD(state: any, isOpenConversationUnread: boolean) {
            state.isOpenConversationUnread = isOpenConversationUnread;
        }
    },
    actions: {
        setIsOpenNotification({commit}: any, isOpenNotification: boolean) {
            commit('SET_IS_OPEN_NOTIFICATION', isOpenNotification);
        },
        setIsOpenConversationsUnread({commit}: any, isOpenConversationUnread: boolean) {
            commit('SET_IS_OPEN_CONVERSATION_UNREAD', isOpenConversationUnread);
        }
    },
    getters: {
        getIsOpenNotification(state: any) {
            return state.isOpenNotification;
        },        
        getIsOpenConversationsUnread(state: any) {
            return state.isOpenConversationUnread;
        }
    }
}