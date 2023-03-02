import { defineComponent, ref, watch } from "vue";

import ButtonBottom from "./button-bottom/button-bottom.vue";
import MessageHistory from "./message-history/message-history.vue";

import useContact from "../../../../../composables/common/contact.composable";
import useConversationHistory from "../../../../../composables/business/conversation-history.composable";
import useEmojis from "../../../../../composables/business/emojis.composable";
import useTheme from "../../../../../composables/common/theme.composable";

import { TypeThemeEnum } from "../../../../../enums/type-theme.enum";

export default defineComponent({
    components: {
        ButtonBottom,
        MessageHistory
    },
    setup() {
        const {
            isOpen
        } = useEmojis();

        const {
            type
        } = useTheme();

        const {
            getContactSelect
        } = useContact();

        const {
            messagesHistory,
            loadMessagesHistory
        } = useConversationHistory();

        const contactSelect = getContactSelect();
        const showBottomDown = ref(false);

        const handleScroll = (data: any) => {
            const container: any = document.querySelector(".conversation-history");
            const diff = container.scrollHeight - container.scrollTop;

            showBottomDown.value = diff !== container.clientHeight;
        }

        watch(contactSelect, async () => {
            loadMessagesHistory(contactSelect.value.id);
        });

        return {
            TypeThemeEnum,
            'isOpenEmojis': isOpen,
            'typeTheme': type,
            messagesHistory,
            showBottomDown,
            handleScroll,
            scrollToBottom
        }
    }
});

function scrollToBottom() {
    const container: any = document.querySelector(".conversation-history");
    const scrollHeight = container.scrollHeight;
    container.scrollTop = scrollHeight;
}