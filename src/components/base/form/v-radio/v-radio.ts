import { computed, defineComponent, PropType } from "vue";

type RadioColor =
    | undefined
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";

export default defineComponent({
    props: {
        value: {
            type: [String, Number],
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: undefined,
        },
        color: {
            type: String,
            default: "#f0f2f5"
        },
        modelValue: [String, Number],
    },
    setup(props, {emit}) {
        const checked = computed(() => props.value === props.modelValue)

        const change = () => {
          emit('update:modelValue', props.value)
        }
    
        return {
            checked,
            change
        }
    }
})