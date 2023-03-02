import { defineComponent } from "vue";

import useEmojis from "../../../../../../composables/business/emojis.composable";

export default defineComponent({
    setup() {

        const {
            categorySelect,
            getCategoriesEmoji,
            setCategorySelect
        } = useEmojis();

        const selectCategory = (category: Object) => {
            setCategorySelect(category);
        }

        return {
            categorySelect,
            getCategoriesEmoji,
            selectCategory
        }
    }
});