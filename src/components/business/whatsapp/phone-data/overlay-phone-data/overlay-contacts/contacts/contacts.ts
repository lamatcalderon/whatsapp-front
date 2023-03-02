import { defineComponent, onMounted, ref} from "vue";

import chatService from "../../../../../../../services/whatsapp/chat.service";

import Contact from "../../../../../../common/contact/contact.vue";

export default defineComponent({
    components: {
        Contact
    },
    setup() {
        const contacts: any = ref([]);

        onMounted( async () => {
            contacts.value = await chatService.getContacts();
        });
        
        return {
            contacts
        };
    }
});