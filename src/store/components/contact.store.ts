export const CONTACT_STORE_GET_CONTACT_SELECT = "contactStore/getContactSelect";

export const CONTACT_STORE_SET_CONTACT_SELECT = "contactStore/setContactSelect";

export default {
    namespaced: true,
    state: {
        contactSelect: {},
    },
    mutations: {
        SET_CONTACT_SELECT(state: any, contactSelect: Object) {
            state.contactSelect = contactSelect;
        }
    },
    actions: {
        setContactSelect({commit}: any, contactSelect: Object) {
            commit('SET_CONTACT_SELECT', contactSelect);
        }
    },
    getters: {
        getContactSelect(state: any) {
            return state.contactSelect;
        }
    }
}