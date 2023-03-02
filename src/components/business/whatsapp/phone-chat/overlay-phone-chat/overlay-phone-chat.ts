import { defineComponent } from "vue";

import useOverlayPhoneChat from "../../../../../composables/business/overlay-phone-chat.composable";

import { TypeOverlayPhoneChatEnum } from "../../../../../enums/type-overlay-phone-chat.enum";

export default defineComponent({
    setup() {
        const { 
            isOpen, 
            overlayComponent, 
            setTypeOverlayPhoneChat 
        } = useOverlayPhoneChat();

        setTypeOverlayPhoneChat(TypeOverlayPhoneChatEnum.OVERLAY_INTRO);
        return {
            isOpen,
            overlayComponent
        }
    }
});