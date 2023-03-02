import { defineComponent } from "vue";

import AudioMessage from "./audio-message/audio-message.vue";
import ConversationMessage from "./conversation-message/conversation-message.vue";
import DocumentMessage from "./document-message/document-message.vue";
import ImageMessage from "./image-message/image-message.vue";
import StickerMessage from "./sticker-message/sticker-message.vue";

import ReadConfirmation from "../../../../../common/read-confirmation/read-confirmation.vue";
import QuotedMessage from "./quoted-message/quoted-message.vue";

import { TypeMessageHistoryEnum } from "../../../../../../enums/type-message-history.enum";

export default defineComponent({
    components: {
        AudioMessage,
        ConversationMessage,
        DocumentMessage,
        ImageMessage,
        StickerMessage,
        ReadConfirmation,
        QuotedMessage
    },
    props: {
        multimediaMessage: {
            type: Object,
            default: {}
        }
    },
    setup() {
        return {
            TypeMessageHistoryEnum
        }
    }
});