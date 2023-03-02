import { defineComponent, ref } from "vue";

import usePhoneChat from "../../../../../../composables/business/phone-chat.composable";

import { getSizeDocument } from "../../../../../../utils/file.util";

export default defineComponent({
    setup(props, {emit}) {

        const refText: any = ref(null);

        const {
            objectPreview,
        } = usePhoneChat();

        const pressKeys = () => {
            emit('write-message-document-preview', refText.value.textContent)
        }

        return {
            objectPreview,
            refText,
            getSizeDocument,
            pressKeys
        }
    }
})