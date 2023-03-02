import { computed, shallowRef, watch } from "vue";
import { useStore } from "vuex";

import OverspreadPreview from "../../components/business/whatsapp/overspreads/overspread-preview/overspread-preview.vue";

import { executeAction } from "../../utils/vuex.util";

import { TypeOverspreadEnum } from "../../enums/type-overspread.enum";

import { 
    OVERSPREAD_STORE_GET_IS_OPEN,
    OVERSPREAD_STORE_GET_TYPE,
    OVERSPREAD_STORE_SET_IS_OPEN,
    OVERSPREAD_STORE_SET_TYPE
} from "../../store/common/overspread.store";

import { 
    OVERLAY_STORE_SET_IS_OPEN 
} from "../../store/components/overlay.store";

export default function useModal() {
    
    const overspreadComponent: any = shallowRef();
    const store = useStore();

    const isOpen = computed(
        () => store.getters[OVERSPREAD_STORE_GET_IS_OPEN]
    );

    const type = computed(
        () => store.getters[OVERSPREAD_STORE_GET_TYPE]
    );

    const openCloseOverspread = (flag: boolean) => {
        executeAction(OVERSPREAD_STORE_SET_IS_OPEN, flag);
        executeAction(OVERLAY_STORE_SET_IS_OPEN, flag);

        if(!flag) {
            setTimeout(() => {
                setType(0);
            }, 500)
        }
    }

    const setType = (type: number) => {
        executeAction(OVERSPREAD_STORE_SET_TYPE, type);
    }

    const chooseModalComponent = () => {
        const typeOverspread = type.value;
        if(+typeOverspread === +TypeOverspreadEnum.PREVIEW) {
            return OverspreadPreview;
        } else {
            return null;
        }
    }

    watch(type, () => {
        overspreadComponent.value = chooseModalComponent();
    })

    return {
        isOpen,
        type,        
        overspreadComponent,
        openCloseOverspread,
        setType
    }
}