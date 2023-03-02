import { defineComponent } from "vue";

import { APP_PREFIX } from "../../../../../../constants/app.constant";

export default defineComponent({
    props: {
        position: {
            type: String,
            default: 'fixed'
        }
    },
    setup() {
        return {
            APP_PREFIX
        }
    }
})