import { defineAsyncComponent, defineComponent } from "vue";

//import ConversationHistory from "./conversation-history/conversation-history.vue";
import Emojis from "./emojis/emojis.vue";
import FooterPhoneChat from "./footer-phone-chat/footer-phone-chat.vue";
import HeaderPhoneChat from "./header-phone-chat/header-phone-chat.vue";
import OverlayPhoneChat from "./overlay-phone-chat/overlay-phone-chat.vue";
import PreviewMedia from "./preview-media/preview-media.vue";

export default defineComponent({
    components: {
        ConversationHistory: defineAsyncComponent(() =>
            import('./conversation-history/conversation-history.vue')
        ),
        Emojis: defineAsyncComponent(() =>
            import('./emojis/emojis.vue')
        ),
        FooterPhoneChat: defineAsyncComponent(() =>
            import('./footer-phone-chat/footer-phone-chat.vue')
        ),
        HeaderPhoneChat: defineAsyncComponent(() =>
            import('./header-phone-chat/header-phone-chat.vue')
        ),
        OverlayPhoneChat: defineAsyncComponent(() =>
            import('./overlay-phone-chat/overlay-phone-chat.vue')
        ),
        PreviewMedia: defineAsyncComponent(() =>
            import('./preview-media/preview-media.vue')
        ),
    }
});