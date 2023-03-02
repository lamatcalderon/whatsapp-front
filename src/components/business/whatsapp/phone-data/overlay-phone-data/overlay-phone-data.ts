import { defineComponent } from "vue";

import { TypeOverlayPhoneDataEnum } from "../../../../../enums/type-overlay-phone-data.enum";
import useOverlayPhoneData from "../../../../../composables/business/overlay-phone-data.composable";

export default defineComponent({
    setup() {
        const { isOpen, overlayComponent } = useOverlayPhoneData();
        const isOpenOverlay = isOpen;

        return {
            TypeOverlayPhoneDataEnum,
            isOpenOverlay,
            overlayComponent
        }
    }
});