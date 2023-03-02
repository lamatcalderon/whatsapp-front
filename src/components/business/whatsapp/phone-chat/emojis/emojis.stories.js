import Emojis from './emojis.vue';
import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `EMOJIS`;

const SUMMARY = `
    El componente <strong>EMOJIS</strong> representa una lista con emojis que el usuario puede seleccionar, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: 100%; margin-top: 20px">
    <emojis v-bind="args"></emojis>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneChat/Emojis',
    component: Emojis,
}

const TemplateBase = args => ({
    components: { Emojis },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {
    visible: true
}