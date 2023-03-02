import { defineComponent } from "vue";

export default defineComponent({
    setup(props, {emit}) {
        const close = () => {
            emit('close');
        }

        return {
            close
        }
    }
});