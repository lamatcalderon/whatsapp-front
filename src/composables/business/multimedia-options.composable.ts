import { computed, shallowRef, watch, watchEffect } from "vue";
import { useStore } from "vuex";

import MultimediaOptions from "../../components/business/whatsapp/phone-chat/footer-phone-chat/multimedia-options/multimedia-options.vue"

import { 
    MULTIMEDIA_OPTIONS_STORE_GET_IS_OPEN,
    MULTIMEDIA_OPTIONS_STORE_SET_IS_OPEN
} from "../../store/components/multimedia-options.store";

import { executeAction } from "../../utils/vuex.util";

export default function useMultimediaOptions() {
    
    const store = useStore();

    const multimediaOptionsComponent = shallowRef();

    const isOpen = computed(
        () => store.getters[MULTIMEDIA_OPTIONS_STORE_GET_IS_OPEN]
    );

    const openCloseMultimediaOptions = (flag: boolean) => {
        if(flag) {
            multimediaOptionsComponent.value = MultimediaOptions;
        } else {
            setTimeout(() => {
                multimediaOptionsComponent.value = null;
            }, 500);  
        }
        executeAction(MULTIMEDIA_OPTIONS_STORE_SET_IS_OPEN, flag);
    }

    return {
        isOpen,
        multimediaOptionsComponent,
        openCloseMultimediaOptions,
    }
}