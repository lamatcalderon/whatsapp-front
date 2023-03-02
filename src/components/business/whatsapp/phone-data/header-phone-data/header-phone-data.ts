import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router'

import Dropdown from "../../../../common/dropdown/dropdown.vue";

import useOverlayPhoneData from "../../../../../composables/business/overlay-phone-data.composable";
import useSession from "../../../../../composables/common/session.composable";

import { TypeOverlayPhoneDataEnum } from "../../../../../enums/type-overlay-phone-data.enum";

export default defineComponent({
    components: {
        Dropdown
    },
    setup() {
        const router = useRouter();
        const isOpen = ref(false);

        const {
            openCloseOverlayPhoneData,
            setTypeOverlayPhoneData
        } = useOverlayPhoneData();

        const {
            whatsappSession
        } = useSession();

        const closeSesion = () => {
            router.push({"name": "vw-login-whatsapp"});
        }

        const openCloseOptions = () => {
            isOpen.value = !isOpen.value;            
        }

        const openOverlayPhoneData = (type: number) => {
            openCloseOverlayPhoneData(true);
            setTypeOverlayPhoneData(type);
        }

        return {
            TypeOverlayPhoneDataEnum,
            isOpen,
            whatsappSession,
            closeSesion,
            openCloseOptions,
            openOverlayPhoneData
        }
    }
});