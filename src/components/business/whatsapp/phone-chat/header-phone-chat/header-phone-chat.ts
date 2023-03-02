import { defineComponent } from "vue";

import Dropdown from "../../../../../components/common/dropdown/dropdown.vue";
import InfoUser from "../../../../common/info-user/info-user.vue";

import useContact from "../../../../../composables/common/contact.composable";

export default defineComponent({
    components: {
        Dropdown,
        InfoUser
    },
    setup() {
        const {
            getContactSelect
        } = useContact();

        const contactSelect = getContactSelect();

        return {
            contactSelect
        }
    }
});