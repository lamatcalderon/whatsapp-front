import { computed } from "vue";
import { useStore } from "vuex";

import {
    EMOJIS_STORE_GET_CATEGORY_SELECT,
    EMOJIS_STORE_GET_EMOJI_SELECT,
    EMOJIS_STORE_GET_IS_OPEN,
    EMOJIS_STORE_SET_CATEGORY_SELECT,
    EMOJIS_STORE_SET_EMOJI_SELECT,
    EMOJIS_STORE_SET_IS_OPEN    
} from "../../store/components/emojis.store";

import { executeAction } from "../../utils/vuex.util";

import categories from "../../assets/emojis/categories.json";
import emojis from "../../assets/emojis/data-by-group2.json";

export default function useEmojis() {
    
    const store = useStore();

    const isOpen = computed(
        () => store.getters[EMOJIS_STORE_GET_IS_OPEN]
    );

    const categorySelect = computed(
        () => store.getters[EMOJIS_STORE_GET_CATEGORY_SELECT]
    );

    const emojiSelect = computed(
        () => store.getters[EMOJIS_STORE_GET_EMOJI_SELECT]
    );

    const openCloseEmojis = (flag: boolean) => {
        executeAction(EMOJIS_STORE_SET_IS_OPEN, flag);
    }

    const setCategorySelect = (category: Object) => {
        executeAction(EMOJIS_STORE_SET_CATEGORY_SELECT, category);
    }

    const setEmojiSelect = (emoji: any) => {
        executeAction(EMOJIS_STORE_SET_EMOJI_SELECT, emoji);
    }

    const getEmojisByCategory = (category: string) => {
        //@ts-ignore
        return emojis[category];
    }

    const getCategoriesEmoji = () => {
        return categories;
    }

    const getFirstCategory = () => {
        return categories[0];
    }

    return {
        categorySelect,
        isOpen,
        emojiSelect,
        getEmojisByCategory,
        getFirstCategory,
        openCloseEmojis,
        setCategorySelect,
        setEmojiSelect,getCategoriesEmoji
    }
}