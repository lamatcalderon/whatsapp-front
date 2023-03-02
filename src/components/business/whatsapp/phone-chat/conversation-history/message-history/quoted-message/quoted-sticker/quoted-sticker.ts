import { defineComponent } from "vue";

import { APP_PREFIX } from "../../../../../../../../constants/app.constant";

export default defineComponent({
    props: {
        quotedMessage: {
            type: Object,
            default: {}
        }
    },
    setup() {
        return {
            APP_PREFIX
        }
    }
});