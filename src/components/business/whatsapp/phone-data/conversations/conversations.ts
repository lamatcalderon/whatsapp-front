import { defineComponent, onMounted, ref } from "vue";

import chatService from "../../../../../services/whatsapp/chat.service";

import Contact from "../../../../common/contact/contact.vue";

import usePhoneData from "../../../../../composables/business/phone-data.composable";


export default defineComponent({
    components: {
        Contact
    },
    setup() {
        const { isOpenNotification } = usePhoneData();
        const conversations: any = ref([]);

        onMounted( async () => {
            conversations.value = await chatService.getConversations();
        });

        return {
            isOpenNotification,
            conversations            
        }
    }
});