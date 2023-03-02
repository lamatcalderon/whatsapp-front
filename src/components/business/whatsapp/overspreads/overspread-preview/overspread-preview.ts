import { defineComponent } from "vue";

import OverspreadPreviewSummary from "./overspread-preview-summary/overspread-preview-summary.vue";
import OverspreadPreviewVisor from "./overspread-preview-visor/overspread-preview-visor.vue";

import useOverspread from "../../../../../composables/common/overspread.composable";

export default defineComponent({
    components: {
        OverspreadPreviewSummary,
        OverspreadPreviewVisor
    },
    setup() {
        const {
            isOpen,
            openCloseOverspread
        } = useOverspread();

        const close = () => {
            openCloseOverspread(false);
        }

        return {
            isOpen,
            close
        }
    }
});