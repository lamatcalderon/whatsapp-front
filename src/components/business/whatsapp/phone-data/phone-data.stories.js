import PhoneData from './phone-data.vue';
import { PLANTILLA_HTML } from "../../../../constants/storybook.constant";

const TITULO = `PHONE-DATA`;

const SUMMARY = `
    El componente <strong>PHONE-DATA</strong> representa la parte izquierda de la aplicación, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: auto; margin-top: 20px">
    <phone-data v-bind="args"></phone-data>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneData',
    component: PhoneData,
}

const TemplateBase = args => ({
    components: { PhoneData },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}