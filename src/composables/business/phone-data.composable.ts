import { computed } from "vue";
import { useStore } from "vuex";

import Conversations from "../../components/business/whatsapp/phone-data/conversations/conversations.vue";
import ConversationsUnread from "../../components/business/whatsapp/phone-data/conversations-unread/conversations-unread.vue";

import { 
    PHONE_DATA_STORE_GET_IS_OPEN_CONVERSATIONS_UNREAD,
    PHONE_DATA_STORE_GET_IS_OPEN_NOTIFICATION,
    PHONE_DATA_STORE_SET_IS_OPEN_CONVERSATIONS_UNREAD,
    PHONE_DATA_STORE_SET_IS_OPEN_NOTIFICATION
} from "../../store/components/phone-data.store";

import { executeAction } from "../../utils/vuex.util";

export default function usePhoneData() {
    const store = useStore();

    const openCloseNotification = (flag: boolean) => {
        executeAction(PHONE_DATA_STORE_SET_IS_OPEN_NOTIFICATION, flag);
    }

    const openCloseConversationsUnread = (flag: boolean) => {
        executeAction(PHONE_DATA_STORE_SET_IS_OPEN_CONVERSATIONS_UNREAD, flag);
    }

    const isOpenNotification = computed(
        () => store.getters[PHONE_DATA_STORE_GET_IS_OPEN_NOTIFICATION]
    );

    const isOpenConversationsUnread = computed(
        () => store.getters[PHONE_DATA_STORE_GET_IS_OPEN_CONVERSATIONS_UNREAD]
    );

    const chooseConversationsComponent = () => {
        if (!isOpenConversationsUnread.value) {
            return Conversations;
        } else {
            return ConversationsUnread;
        }
    }

    return {
        isOpenConversationsUnread,
        isOpenNotification,
        chooseConversationsComponent,
        openCloseConversationsUnread,
        openCloseNotification
    }
}