import { defineComponent } from "vue";

export default defineComponent({
    props: {
        name: {
            type: String,
            default: ""
        },
        photo: {
            type: String,
            default: ""
        },
        lastConnection: {
            type: String,
            default: ""
        }
    }
});