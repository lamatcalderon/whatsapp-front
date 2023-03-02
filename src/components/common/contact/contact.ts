import { defineComponent } from "vue";

import ReadConfirmation from "../read-confirmation/read-confirmation.vue";

import useContact from "../../../composables/common/contact.composable";
import useEmojis from "../../../composables/business/emojis.composable";
import useOverlayPhoneChat from "../../../composables/business/overlay-phone-chat.composable";

export default defineComponent({
    components: {
        ReadConfirmation
    },
    props: {
        contact: {
            type: Object,
            default: {}
        }
    },
    setup() {

        const {
            setContactSelect,
            getContactSelect
        } = useContact();

        const {
            openCloseEmojis
        } = useEmojis();

        const {
            openCloseOverlayPhoneChat
        } = useOverlayPhoneChat();
       
        const contactSelect = getContactSelect();

        const selectItem = (contact: any) => {
            setContactSelect(contact);
            openCloseOverlayPhoneChat(false);
            openCloseEmojis(false);
        }

        return {
            contactSelect,
            selectItem
        }
    }
});