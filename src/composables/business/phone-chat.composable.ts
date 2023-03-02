import { computed } from "vue";
import { useStore } from "vuex";

import PreviewDocument from "../../components/business/whatsapp/phone-chat/preview-media/preview-document/preview-document.vue";
import PreviewImage from "../../components/business/whatsapp/phone-chat/preview-media/preview-image/preview-image.vue";

import { 
    PHONE_CHAT_STORE_GET_IS_OPEN_PREVIEW_MEDIA,
    PHONE_CHAT_STORE_GET_MULTIMEDIA_MESSAGE,
    PHONE_CHAT_STORE_GET_OBJECT_PREVIEW,
    PHONE_CHAT_STORE_GET_TYPE_PREVIEW_MEDIA,
    PHONE_CHAT_STORE_SET_IS_OPEN_PREVIEW_MEDIA,
    PHONE_CHAT_STORE_SET_MULTIMEDIA_MESSAGE,
    PHONE_CHAT_STORE_SET_OBJECT_PREVIEW,
    PHONE_CHAT_STORE_SET_TYPE_PREVIEW_MEDIA
} from "../../store/components/phone-chat.store";

import { TypeMediaContentEnum } from "../../enums/type-media-content.enum";

import { executeAction } from "../../utils/vuex.util";

export default function usePhoneChat() {
    const store = useStore();

    const isOpenPreviewMedia = computed(
        () => store.getters[PHONE_CHAT_STORE_GET_IS_OPEN_PREVIEW_MEDIA]
    );

    const multimediaMessage = computed(
        () => store.getters[PHONE_CHAT_STORE_GET_MULTIMEDIA_MESSAGE]
    );

    const objectPreview = computed(
        () => store.getters[PHONE_CHAT_STORE_GET_OBJECT_PREVIEW]
    );

    const typePreviewMedia = computed(
        () => store.getters[PHONE_CHAT_STORE_GET_TYPE_PREVIEW_MEDIA]
    );

    const openClosePreviewMedia = (flag: boolean) => {
        executeAction(PHONE_CHAT_STORE_SET_IS_OPEN_PREVIEW_MEDIA, flag);
    }

    const setMultimediaMessage = (obj: Object) => {
        executeAction(PHONE_CHAT_STORE_SET_MULTIMEDIA_MESSAGE, obj);
    }

    const setObjectPreview = (obj: Object) => {
        executeAction(PHONE_CHAT_STORE_SET_OBJECT_PREVIEW, obj);
    }

    const setTypePreviewMedia = (type: number) => {
        if (type) {
            openClosePreviewMedia(true);
        }        
        executeAction(PHONE_CHAT_STORE_SET_TYPE_PREVIEW_MEDIA, type);
    }

    const choosePreviewMediaComponent = () => {
        if (typePreviewMedia.value === TypeMediaContentEnum.STICKER) {
            return PreviewImage;
        } else if (typePreviewMedia.value === TypeMediaContentEnum.IMAGE) {
            return PreviewImage;
        } else if (typePreviewMedia.value === TypeMediaContentEnum.DOCUMENT) {
            return PreviewDocument;
        }
    }

    return {
        isOpenPreviewMedia,
        multimediaMessage,
        objectPreview,
        typePreviewMedia,
        openClosePreviewMedia,
        choosePreviewMediaComponent,
        setMultimediaMessage,
        setObjectPreview,
        setTypePreviewMedia
    }
}