import { defineComponent } from "vue";

import InfoUser from "../../../../../../components/common/info-user/info-user.vue";

import useOverspread from "../../../../../../composables/common/overspread.composable";
import useSession from "../../../../../../composables/common/session.composable";

export default defineComponent({
    components: {
        InfoUser
    },
    setup() {

        const {
            openCloseOverspread
        } = useOverspread();

        const {
            whatsappSession
        } = useSession();

        const close = () => {
            openCloseOverspread(false);
        }

        return {
            whatsappSession,
            close
        }
        
    }
})