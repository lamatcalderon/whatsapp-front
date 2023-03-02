import { computed, shallowRef, watch } from "vue";
import { useStore } from "vuex";

import OverlayConfig from "../../components/business/whatsapp/phone-data/overlay-phone-data/overlay-config/overlay-config.vue";
import OverlayContacts from "../../components/business/whatsapp/phone-data/overlay-phone-data/overlay-contacts/overlay-contacts.vue";

import { TypeOverlayPhoneDataEnum } from "../../enums/type-overlay-phone-data.enum";

import { 
    OVERLAY_PHONE_DATA_STORE_SET_IS_OPEN, 
    OVERLAY_PHONE_DATA_STORE_SET_TYPE,
    OVERLAY_PHONE_DATA_STORE_GET_IS_OPEN,
    OVERLAY_PHONE_DATA_STORE_GET_TYPE
} from "../../store/components/overlay-phone-data.store";

import { executeAction } from "../../utils/vuex.util";

export default function useOverlayPhoneData(){
    
    const overlayComponent: any = shallowRef();
    const store = useStore();

    const isOpen = computed(
        () => store.getters[OVERLAY_PHONE_DATA_STORE_GET_IS_OPEN]
    );

    const getType = computed(
        () => store.getters[OVERLAY_PHONE_DATA_STORE_GET_TYPE]
    );

    const openCloseOverlayPhoneData = (flag: boolean) => {
        executeAction(OVERLAY_PHONE_DATA_STORE_SET_IS_OPEN, flag);
    }

    const setTypeOverlayPhoneData = (type: number) => {
        executeAction(OVERLAY_PHONE_DATA_STORE_SET_TYPE, type);
    }

    const chooseOverlayComponent = () => {
        const type = getType.value;
        if(+type === +TypeOverlayPhoneDataEnum.OVERLAY_CONFIG) {
            return OverlayConfig;
        } else if(+type === +TypeOverlayPhoneDataEnum.OVERLAY_CONTACTS) {
            return OverlayContacts;
        }
    }

    watch(getType, () => {
        overlayComponent.value = chooseOverlayComponent();
    })

    return {
        getType,
        isOpen,
        overlayComponent,
        openCloseOverlayPhoneData,
        setTypeOverlayPhoneData
    }
}