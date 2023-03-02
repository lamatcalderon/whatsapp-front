import { computed } from "vue";
import { useStore } from "vuex";

import { executeAction } from "../../utils/vuex.util";

import {
    SESSION_STORE_GET_WHATSAPP_SESSION,
    SESSION_STORE_SET_WHATSAPP_SESSION
} from "../../store/common/session.store";

export default function useSession(){
    const store = useStore();

    const whatsappSession = computed(
        () => store.getters[SESSION_STORE_GET_WHATSAPP_SESSION]
    );

    const setWhatsappSession = (whatsappSession: Object) => {
        executeAction(SESSION_STORE_SET_WHATSAPP_SESSION, whatsappSession);
    }

    return {
        whatsappSession,
        setWhatsappSession
    }
}