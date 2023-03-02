import { computed } from "vue";
import { useStore } from "vuex";

import { 
    OVERLAY_STORE_GET_IS_OPEN,
    OVERLAY_STORE_SET_IS_OPEN,
} from "../../store/components/overlay.store";

import { executeAction } from "../../utils/vuex.util";

export default function useOverlay() {
    
    const store = useStore();

    const isOpen = computed(
        () => store.getters[OVERLAY_STORE_GET_IS_OPEN]
    );

    const openCloseOverlay = (flag: boolean) => {
        executeAction(OVERLAY_STORE_SET_IS_OPEN, flag);
    }

    return {
        isOpen,
        openCloseOverlay,
    }
}