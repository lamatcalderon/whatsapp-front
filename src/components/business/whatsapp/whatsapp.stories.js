import WhatsappComponent from './whatsapp.vue';
import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `WHATSAPP`;

const SUMMARY = `
    El componente <strong>WHATSAPP</strong> Representa el componente que contiene todo la aplicacion,en él no se definen <strong>propiedades</strong>`;

const PROPS = `
`;

const COMPONENT_BASE = `
<whatsapp-component v-bind="args"></whatsapp-component>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp',
    component: WhatsappComponent,
}

const TemplateWhatsapp = args => ({
    components: { WhatsappComponent },
    setup() {
        return { args }
    },
    //template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
    template: COMPONENT_BASE
})

export const Whatsapp = TemplateWhatsapp.bind({});
Whatsapp.args = {

}