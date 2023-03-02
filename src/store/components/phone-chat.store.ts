export const PHONE_CHAT_STORE_GET_IS_OPEN_PREVIEW_MEDIA = "phoneChatStore/getIsOpenPreviewMedia";
export const PHONE_CHAT_STORE_GET_MULTIMEDIA_MESSAGE = "phoneChatStore/getMultimediaMessage";
export const PHONE_CHAT_STORE_GET_OBJECT_PREVIEW = "phoneChatStore/getObjectPreview";
export const PHONE_CHAT_STORE_GET_TYPE_PREVIEW_MEDIA = "phoneChatStore/getTypePreviewMedia";

export const PHONE_CHAT_STORE_SET_IS_OPEN_PREVIEW_MEDIA = "phoneChatStore/setIsOpenPreviewMedia";
export const PHONE_CHAT_STORE_SET_MULTIMEDIA_MESSAGE = "phoneChatStore/setMultimediaMessage";
export const PHONE_CHAT_STORE_SET_OBJECT_PREVIEW = "phoneChatStore/setObjectPreview";
export const PHONE_CHAT_STORE_SET_TYPE_PREVIEW_MEDIA = "phoneChatStore/setTypePreviewMedia";

export default {
    namespaced: true,
    state: {
        isOpenPreviewMedia: false,
        multimediaMessage: {},
        objectPreview: {},
        typePreviewMedia: 0
    },
    mutations: {
        SET_IS_OPEN_PREVIEW_MEDIA(state: any, isOpenPreviewMedia: boolean) {
            state.isOpenPreviewMedia = isOpenPreviewMedia;
        },
        SET_MULTIMEDIA_MESSAGE(state: any, multimediaMessage: Object) {
            state.multimediaMessage = multimediaMessage;
        },
        SET_OBJECT_PREVIEW(state: any, objectPreview: Object) {
            state.objectPreview = objectPreview;
        },
        SET_TYPE_PREVIEW_MEDIA(state: any, typePreviewMedia: boolean) {
            state.typePreviewMedia = typePreviewMedia;
        }
    },
    actions: {
        setIsOpenPreviewMedia({commit}: any, isOpenPreviewMedia: boolean) {
            commit('SET_IS_OPEN_PREVIEW_MEDIA', isOpenPreviewMedia);
        },
        setMultimediaMessage({commit}: any, multimediaMessage: Object) {
            commit('SET_MULTIMEDIA_MESSAGE', multimediaMessage);
        },
        setObjectPreview({commit}: any, objectPreview: Object) {
            commit('SET_OBJECT_PREVIEW', objectPreview);
        },
        setTypePreviewMedia({commit}: any, typePreviewMedia: boolean) {
            commit('SET_TYPE_PREVIEW_MEDIA', typePreviewMedia);
        }
    },
    getters: {
        getIsOpenPreviewMedia(state: any) {
            return state.isOpenPreviewMedia;
        },
        getMultimediaMessage(state: any) {
            return state.multimediaMessage;
        },
        getObjectPreview(state: any) {
            return state.objectPreview;
        },   
        getTypePreviewMedia(state: any) {
            return state.typePreviewMedia;
        }
    }
}