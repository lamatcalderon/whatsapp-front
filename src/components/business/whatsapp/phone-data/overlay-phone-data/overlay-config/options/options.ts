import { defineComponent } from "vue";

import useModal from "../../../../../../../composables/common/modal.composable";

import { TypeModalEnum } from "../../../../../../../enums/type-modal.enum";

export default defineComponent({
    setup() {

        const { openCloseModal, setType } = useModal();

        const openModalTheme = (type: number) => {
            setType(type);
            openCloseModal(true);
        }       

        return {
            TypeModalEnum,
            openModalTheme
        }
    }
});