import { defineComponent } from "vue";

import BatteryLow from "./battery-low/battery-low.vue";
import Desktop from "./desktop/desktop.vue";
import UpdateVersion from "./update-version/update-version.vue";

import usePhoneData from "../../../../../composables/business/phone-data.composable";
import { TypeNotificationEnum } from "../../../../../enums/type-notification.enum";

export default defineComponent({
    props: {
        type: {
            type: String,
            default: TypeNotificationEnum.DESKTOP
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    components: {        
        BatteryLow,
        Desktop,
        UpdateVersion
    },
    setup() {

        const { isOpenNotification, openCloseNotification } = usePhoneData();

        const closeNotification = () => {
            openCloseNotification(false)
        }

        return {
            TypeNotificationEnum,
            isOpenNotification,
            closeNotification
        }
    }
});