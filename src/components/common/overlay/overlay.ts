import { defineComponent } from "vue";

import useOverlay from "../../../composables/business/overlay.composable";

export default defineComponent({
    setup() {
        const { isOpen } = useOverlay();

        return {
            isOpen
        }
    }
});