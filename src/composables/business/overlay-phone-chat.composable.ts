import { computed, shallowRef, watch } from "vue";
import { useStore } from "vuex";

import OverlayIntro from "../../components/business/whatsapp/phone-chat/overlay-phone-chat/overlay-intro/overlay-intro.vue";

import { TypeOverlayPhoneChatEnum } from "../../enums/type-overlay-phone-chat.enum";

import { 
    OVERLAY_PHONE_CHAT_STORE_SET_IS_OPEN, 
    OVERLAY_PHONE_CHAT_STORE_SET_TYPE,
    OVERLAY_PHONE_CHAT_STORE_GET_IS_OPEN,
    OVERLAY_PHONE_CHAT_STORE_GET_TYPE
} from "../../store/components/overlay-phone-chat.store";

import { executeAction } from "../../utils/vuex.util";

export default function useOverlayPhoneChat(){
    
    const overlayComponent: any = shallowRef();
    const store = useStore();

    const isOpen = computed(
        () => store.getters[OVERLAY_PHONE_CHAT_STORE_GET_IS_OPEN]
    );

    const getType = computed(
        () => store.getters[OVERLAY_PHONE_CHAT_STORE_GET_TYPE]
    );

    const openCloseOverlayPhoneChat = (flag: boolean) => {
        executeAction(OVERLAY_PHONE_CHAT_STORE_SET_IS_OPEN, flag);
    }

    const setTypeOverlayPhoneChat = (type: number) => {
        executeAction(OVERLAY_PHONE_CHAT_STORE_SET_TYPE, type);
    }

    const chooseOverlayComponent = () => {
        const type = getType.value;
        if(+type === +TypeOverlayPhoneChatEnum.OVERLAY_INTRO) {
            return OverlayIntro;
        }
    }

    watch(getType, () => {
        overlayComponent.value = chooseOverlayComponent();
    })

    return {
        getType,
        isOpen,
        overlayComponent,
        openCloseOverlayPhoneChat,
        setTypeOverlayPhoneChat
    }
}