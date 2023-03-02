import { defineComponent } from "vue";

import QuotedAudio from "./quoted-audio/quoted-audio.vue";
import QuotedConversation from "./quoted-conversation/quoted-conversation.vue";
import QuotedImage from "./quoted-image/quoted-image.vue";
import QuotedSticker from "./quoted-sticker/quoted-sticker.vue";

import { TypeMessageHistoryEnum } from "../../../../../../../enums/type-message-history.enum";

import { APP_PREFIX } from "../../../../../../../constants/app.constant";

export default defineComponent({
    components: {
        QuotedAudio,
        QuotedConversation,
        QuotedImage,
        QuotedSticker
    },
    props: {
        quotedMessage: {
            type: Object,
            default: {}
        },
        fromMe: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        return {
            APP_PREFIX,
            TypeMessageHistoryEnum
        }
    }
})