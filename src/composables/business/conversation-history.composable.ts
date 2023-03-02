import { computed } from "vue";
import { useStore } from "vuex";

import { executeAction } from "../../utils/vuex.util";

import { 
    CONVERSATION_HISTORY_GET_MESSAGES_HISTORY,
    CONVERSATION_HISTORY_LOAD_MESSAGES_HISTORY,
    CONVERSATION_HISTORY_PUSH_MESSAGE
} from '../../store/components/conversation-history.store';

export default function useConversationHistory() {
    const store = useStore();

    const messagesHistory = computed(
        () => store.getters[CONVERSATION_HISTORY_GET_MESSAGES_HISTORY]
    );

    const loadMessagesHistory = (id: number) => {
        executeAction(CONVERSATION_HISTORY_LOAD_MESSAGES_HISTORY, id);
    }

    const pushMessage = (message: any) => {
        executeAction(CONVERSATION_HISTORY_PUSH_MESSAGE, message);
    }

    return {
        messagesHistory,
        loadMessagesHistory,
        pushMessage
    }
}