import { TypeThemeEnum } from "../../enums/type-theme.enum";

export const THEME_STORE_GET_TYPE = "themeStore/getType";
export const THEME_STORE_SET_TYPE = "themeStore/setType";

export default {
    namespaced: true,
    state: {
        type: TypeThemeEnum.NORMAL,
    },
    mutations: {
        SET_TYPE(state: any, type: number) {
            state.type = type;
        }
    },
    actions: {
        setType({commit}: any, type: boolean) {
            commit('SET_TYPE', type);
        }
    },
    getters: {
        getType(state: any) {
            return state.type;
        }
    }
}