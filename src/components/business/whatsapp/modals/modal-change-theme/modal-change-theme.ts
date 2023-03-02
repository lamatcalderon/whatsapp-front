import { defineComponent, ref } from "vue";

import Modal from "../../../../common/modal/modal.vue";
import VRadio from "../../../../base/form/v-radio/v-radio.vue";
import VButton from "../../../../base/form/v-button/v-button.vue";

import useModal from "../../../../../composables/common/modal.composable";
import useTheme from "../../../../../composables/common/theme.composable";

import { TypeThemeEnum } from "../../../../../enums/type-theme.enum";

import themes from "../../../../../assets/themes/themes.json";

export default defineComponent({
    components: {
        Modal,
        VButton,
        VRadio
    },
    setup() {
        const { openCloseModal } = useModal();
        const { setType, type } = useTheme();

        const title = "Elegir tema";
        const selectItem = ref(type.value);

        const changeTheme = () => {
            openCloseModal(false);
            setType(selectItem.value);
        }

        return {
            TypeThemeEnum,
            title,
            themes,
            selectItem,
            changeTheme,
            openCloseModal
        }
    }
});