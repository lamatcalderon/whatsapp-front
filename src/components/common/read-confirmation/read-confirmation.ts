import { defineComponent } from "vue";

import { TypeReadConfirmationEnum } from "../../../enums/type-read-confirmation.enum";

import { APP_PREFIX } from "../../../constants/app.constant";

export default defineComponent({
    props: {
        readStatus: {
            type: String,
            default: 'sent'
        }
    },
    setup() {
        return {
            APP_PREFIX,
            TypeReadConfirmationEnum
        }
    }
});