import { defineComponent } from "vue";

import useOverlayPhoneData from "../../../../../../../composables/business/overlay-phone-data.composable";

export default defineComponent({
    setup() {
        const {openCloseOverlayPhoneData} = useOverlayPhoneData();

        const close = () => {
            openCloseOverlayPhoneData(false);
        }

        return {
            close
        }
    }
});