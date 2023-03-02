import VwLoginWhatsapp from './vw-login-whatsapp.vue';
import { PLANTILLA_HTML } from "../../constants/storybook.constant";

const TITULO = `VW-WHATSAPP`;

const SUMMARY = `
    El componente <strong>VW-WHATSAPP</strong> representa la vista que contiene todo la aplicación de whatsapp,en él no se definen <strong>propiedades</strong>`;

const PROPS = `
`;

const COMPONENT_BASE = `
<vw-login-whatsapp v-bind="args"></vw-login-whatsapp>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Views/VwLoginWhatsapp',
    component: VwLoginWhatsapp,
}

const TemplateWhatsapp = args => ({
    components: { VwLoginWhatsapp },
    setup() {
        return { args }
    },
    //template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
    template: COMPONENT_BASE
})

export const ViewLoginWhatsapp = TemplateWhatsapp.bind({});
ViewLoginWhatsapp.args = {

}