import { defineComponent } from "vue";

import usePhoneChat from "../../../../../../composables/business/phone-chat.composable";

export default defineComponent({
    setup() {
        const {
            multimediaMessage
        } = usePhoneChat();

        return {
            multimediaMessage
        }
    }
});