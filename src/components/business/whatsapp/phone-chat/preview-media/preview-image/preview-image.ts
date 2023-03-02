import { defineComponent, ref } from "vue";

import usePhoneChat from "../../../../../../composables/business/phone-chat.composable";

import { TypeMediaContentEnum } from "../../../../../../enums/type-media-content.enum";

export default defineComponent({
    setup(props, {emit}) {

        const refText: any = ref(null);

        const {
            typePreviewMedia,
            objectPreview
        } = usePhoneChat();

        const pressKeys = () => {
            emit('write-message-document-preview', refText.value.textContent)
        }

        const srcObj = URL.createObjectURL(objectPreview.value);
        return {
            TypeMediaContentEnum,
            typePreviewMedia,
            refText,
            srcObj,
            pressKeys
        }
    }
})