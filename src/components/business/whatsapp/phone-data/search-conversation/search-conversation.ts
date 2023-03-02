import { defineComponent, ref } from "vue";

import usePhoneData from "../../../../../composables/business/phone-data.composable";

export default defineComponent({
    setup() {

        const placeholderMessage = ref("");
        const isFocus = ref(false);

        const {
            isOpenConversationsUnread,
            openCloseConversationsUnread
        } = usePhoneData();

        const focusInput = () => {
            isFocus.value = true;
        }

        const blurInput = () => {
            isFocus.value = false;
        }

        const openConversationsUnread = () => {
            isOpenConversationsUnread.value 
            ? openCloseConversationsUnread(false) 
            : openCloseConversationsUnread(true);
        }

        return {
            isFocus,
            isOpenConversationsUnread,
            blurInput,
            focusInput,
            openConversationsUnread
        }
    }
})