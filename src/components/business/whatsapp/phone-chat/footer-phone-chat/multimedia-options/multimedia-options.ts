import { defineComponent, onMounted, onUnmounted, ref } from "vue";

import { TypeMediaContentEnum } from "../../../../../../enums/type-media-content.enum";

import useMultimediaOptions from "../../../../../../composables/business/multimedia-options.composable";
import usePhoneChat from "../../../../../../composables/business/phone-chat.composable";

export default defineComponent({
    setup(props, { emit }) {

        const typeMediaContent = ref(0);

        const {
            isOpen,
            openCloseMultimediaOptions
        } = useMultimediaOptions();

        const {
            objectPreview,
            setObjectPreview,
            setTypePreviewMedia
        } = usePhoneChat();

        const setTypeMediaContent = (type: number) => {
            typeMediaContent.value = type;
        }

        const uploadFile = async (e: any) => {
            if (e.target.files.length === 1) {
                const file = e.target.files[0];
                setObjectPreview(file);
                setTypePreviewMedia(typeMediaContent.value);
                emit('close-multimedia-options');
            }
        }

        return {
            TypeMediaContentEnum,
            isOpen,
            typeMediaContent,
            openCloseMultimediaOptions,
            setTypeMediaContent,
            uploadFile
        }
    }
})