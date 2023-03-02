import HeaderPhoneData from './header-phone-data.vue';
import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `HEADER-PHONE-DATA`;

const SUMMARY = `
    El componente <strong>HEADER-PHONE-DATA</strong> representa la barra superior del lado izquierdo del aplicativo, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: 500px; margin-top: 20px">
    <header-phone-data v-bind="args"></header-phone-data>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneData/HeaderPhoneData',
    component: HeaderPhoneData,
}

const TemplateBase = args => ({
    components: { HeaderPhoneData },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}