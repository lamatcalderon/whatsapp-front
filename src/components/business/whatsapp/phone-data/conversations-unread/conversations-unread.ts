import { defineComponent, ref } from "vue";

import Contact from "../../../../../components/common/contact/contact.vue";

import usePhoneData from "../../../../../composables/business/phone-data.composable";

export default defineComponent({
    components: {
        Contact
    },
    setup() {

        const {
            isOpenNotification
        } = usePhoneData();

        const titleMessage = ref("");

        const conversationsUnread: any = [
            {
                id: 50,
                alias: "+51 960 380 546",
                //newAlias: "+51 960 380 546",
                //newLastMessageContent: "comentario desde smartclick",
                lastMessage: {
                    content: "comentario desde smartclick",
                    date: "15:02",
                },
                unReadConversations: [
                    {}, {}, {}
                ]
            }
        ];

        titleMessage.value = conversationsUnread.length > 0 
        ? "Filtrado por chat no leídos" 
        : "No hay chats no leídos";

        return {
            conversationsUnread,
            isOpenNotification,
            titleMessage,
        }
    }
})