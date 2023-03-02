import { computed } from "vue";
import { useStore } from "vuex";

import { 
    CONTACT_STORE_GET_CONTACT_SELECT,
    CONTACT_STORE_SET_CONTACT_SELECT
} from "../../store/components/contact.store";

import { executeAction } from "../../utils/vuex.util";

export default function useContact(){
    const store = useStore();

    const setContactSelect = (contact: any) => {
        executeAction(CONTACT_STORE_SET_CONTACT_SELECT, contact);
    }

    const getContactSelect = () => {
        const contactSelect = computed(
            () => store.getters[CONTACT_STORE_GET_CONTACT_SELECT]
        );

        return contactSelect;
    }

    return {
        setContactSelect,
        getContactSelect
    }
}