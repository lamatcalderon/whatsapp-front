import { defineComponent } from "vue";

import useConversationHistory from "../../../../../composables/business/conversation-history.composable";
import usePhoneChat from "../../../../../composables/business/phone-chat.composable";

import { TypeMediaContentEnum } from "../../../../../enums/type-media-content.enum";

import { getExtensionFile, getSizeDocument } from "../../../../../utils/file.util";
import { convertBase64 } from "../../../../../utils/media.util";

export default defineComponent({
    setup() {
        let message = "";

        const {
            isOpenPreviewMedia,
            objectPreview,
            typePreviewMedia,
            choosePreviewMediaComponent,
            openClosePreviewMedia,
            setTypePreviewMedia         
        } = usePhoneChat();

        const {
            pushMessage
        } = useConversationHistory();

        const close = async () => {
            setTypePreviewMedia(0);
            openClosePreviewMedia(false);
            message = "";
        }

        const send = async () => {
            if (typePreviewMedia.value === TypeMediaContentEnum.STICKER) {
                pushMessage({
                    "type": "sticker",
                    "thumbail": ''+await convertBase64(objectPreview.value)
                })
            } else if (typePreviewMedia.value === TypeMediaContentEnum.IMAGE) {
                pushMessage({
                    "type": "image",
                    "messageContent": message,
                    "preview": ''+await convertBase64(objectPreview.value)
                })
            } else if (typePreviewMedia.value === TypeMediaContentEnum.DOCUMENT) {
                pushMessage({
                    "type": "document",
                    "messageContent": message,
                    "size": getSizeDocument(objectPreview.value?.size),
                    "name": objectPreview.value?.name,
                    "extension": getExtensionFile(objectPreview.value?.name)
                })
            }
            setTypePreviewMedia(0);
            openClosePreviewMedia(false);
            message = "";
        }

        const setMessage = (text: string) => {
            message = text;
        }

        return {
            isOpenPreviewMedia,
            objectPreview,
            choosePreviewMediaComponent,
            close,
            send,
            setMessage
        }
        
    }
});