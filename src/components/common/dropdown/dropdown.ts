import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    setup() {
        const isOpen = ref(false);

        const openCloseOptions = () => {
            isOpen.value = !isOpen.value;
        }

        return {
            isOpen,
            openCloseOptions
        }
    }
});