import VwWhatsapp from './vw-whatsapp.vue';
import { PLANTILLA_HTML } from "../../constants/storybook.constant";

const TITULO = `VW-WHATSAPP`;

const SUMMARY = `
    El componente <strong>VW-WHATSAPP</strong> representa la vista que contiene todo la aplicación de whatsapp,en él no se definen <strong>propiedades</strong>`;

const PROPS = `
`;

const COMPONENT_BASE = `
<vw-whatsapp v-bind="args"></vw-whatsapp>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Views/VwWhatsapp',
    component: VwWhatsapp,
}

const TemplateWhatsapp = args => ({
    components: { VwWhatsapp },
    setup() {
        return { args }
    },
    //template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
    template: COMPONENT_BASE
})

export const ViewWhatsapp = TemplateWhatsapp.bind({});
ViewWhatsapp.args = {

}