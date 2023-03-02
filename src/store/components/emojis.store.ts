export const EMOJIS_STORE_SET_CATEGORY_SELECT = "emojisStore/setCategorySelect";
export const EMOJIS_STORE_SET_IS_OPEN = "emojisStore/setIsOpen";
export const EMOJIS_STORE_SET_EMOJI_SELECT = "emojisStore/setEmojiSelect";

export const EMOJIS_STORE_GET_CATEGORY_SELECT = "emojisStore/getCategorySelect";
export const EMOJIS_STORE_GET_IS_OPEN = "emojisStore/getIsOpen";
export const EMOJIS_STORE_GET_EMOJI_SELECT = "emojisStore/getEmojiSelect";

export default {
    namespaced: true,
    state: {
        isOpen: false,
        emojiSelect: {},
        categorySelect: {},
    },
    mutations: {
        SET_CATEGORY_SELECT(state: any, categorySelect: Object) {
            state.categorySelect = categorySelect;
        },
        SET_IS_OPEN(state: any, isOpen: boolean) {
            state.isOpen = isOpen;
        },
        SET_EMOJI_SELECT(state: any, emojiSelect: Object) {
            state.emojiSelect = emojiSelect;
        }
    },
    actions: {
        setCategorySelect({commit}: any, categorySelect: Object) {
            commit('SET_CATEGORY_SELECT', categorySelect);
        },
        setIsOpen({commit}: any, isOpen: boolean) {
            commit('SET_IS_OPEN', isOpen);
        },
        setEmojiSelect({commit}: any, emojiSelect: Object) {
            commit('SET_EMOJI_SELECT', emojiSelect);
        }
    },
    getters: {
        getCategorySelect(state: any) {
            return state.categorySelect;
        },
        getIsOpen(state: any) {
            return state.isOpen;
        },
        getEmojiSelect(state: any) {
            return state.emojiSelect;
        }
    }
}