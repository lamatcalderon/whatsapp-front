import { defineComponent } from "vue";

import Overlay from '../../components/common/overlay/overlay.vue';
import Whatsapp from '../../components/business/whatsapp/whatsapp.vue';

import useModal from "../../composables/common/modal.composable";
import useOverspread from "../../composables/common/overspread.composable";

export default defineComponent({
    components: {
        Overlay,
        Whatsapp
    },
    setup() {

        const { modalComponent } = useModal();
        const { overspreadComponent } = useOverspread();
    
        return {
          modalComponent,
          overspreadComponent      
        };
      },
});