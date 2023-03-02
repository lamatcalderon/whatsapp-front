import { defineComponent, onMounted, onUnmounted } from "vue";

import useModal from "../../../composables/common/modal.composable";

export default defineComponent({
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    setup() {
        const { isOpen, openCloseModal } = useModal();

        const close = () => {
            openCloseModal(false);
        }

        return {
            isOpen,
            close
        }
    }
});