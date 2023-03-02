import { defineComponent, ref } from "vue";

import Conversations from "./conversations/conversations.vue";
import HeaderPhoneData from "./header-phone-data/header-phone-data.vue";
import Notification from "./notification/notification.vue";
import OverlayPhoneData from "./overlay-phone-data/overlay-phone-data.vue";
import SearchConversation from "./search-conversation/search-conversation.vue";

import usePhoneData from "../../../../composables/business/phone-data.composable";

import { executeAction } from "../../../../utils/vuex.util";

import { PHONE_DATA_STORE_SET_IS_OPEN_NOTIFICATION } from "../../../../store/components/phone-data.store";

import useMultimediaOptions from "@/composables/business/multimedia-options.composable";

export default defineComponent({
    components: {
        Conversations,
        HeaderPhoneData,
        Notification,
        OverlayPhoneData,
        SearchConversation
    },
    setup() {

        const {
            chooseConversationsComponent
        } = usePhoneData();

        setTimeout(() => {
            executeAction(PHONE_DATA_STORE_SET_IS_OPEN_NOTIFICATION, true);
        }, 2000);

        return {
            chooseConversationsComponent
        }
    }
});