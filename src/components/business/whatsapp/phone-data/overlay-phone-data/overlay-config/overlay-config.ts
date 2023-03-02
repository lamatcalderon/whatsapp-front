import { defineComponent, onMounted, onUnmounted } from "vue";

import HeaderOverlayConfig from "./header-overlay-config/header-overlay-config.vue";
import Options from "./options/options.vue";
import ProfileSummary from "./profile-summary/profile-summary.vue";

export default defineComponent({
    components: {
        HeaderOverlayConfig,
        Options,
        ProfileSummary
    },
    setup() {

    }
});