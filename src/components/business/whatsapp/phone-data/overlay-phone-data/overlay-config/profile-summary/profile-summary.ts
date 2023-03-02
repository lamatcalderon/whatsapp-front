import { defineComponent } from "vue";

import useSession from "../../../../../../../composables/common/session.composable";

export default defineComponent({
    setup() {
        const {
            whatsappSession
        } = useSession();

        return {
            whatsappSession
        }
    }
})