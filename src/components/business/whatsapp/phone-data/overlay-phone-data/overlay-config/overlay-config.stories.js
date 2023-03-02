import OverlayConfig from './overlay-config.vue';
import { PLANTILLA_HTML } from "../../../../../../constants/storybook.constant";

const TITULO = `OVERLAY-CONFIG`;

const SUMMARY = `
    El componente <strong>OVERLAY-CONFIG</strong> representa un screen que contiene opciones de configuración de la aplicación de whatsapp, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: auto; margin-top: 20px">
    <overlay-config v-bind="args"></overlay-config>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneData/OverlayPhoneData/OverlayConfig',
    component: OverlayConfig,
}

const TemplateBase = args => ({
    components: { OverlayConfig },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}