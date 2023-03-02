import ButtonBottom from './button-bottom.vue';
import {PLANTILLA_HTML} from "../../../../../../constants/storybook.constant";

const TITULO = `BUTTON-BOTTOM`;

const SUMMARY = `
    El componente <strong>BUTTON-BOTTOM</strong> representa un contacto o una conversacion grupal de whatsapp, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
<li><strong>position</strong>: valor que indica que tipo de pocisión tendra el objeto</li>
`;

const COMPONENT_BASE = `
<div style="width:50px; margin-top: 20px;">
    <button-bottom v-bind="args"></button-bottom>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-11-30][Luis Amat] Creación del componente</span>
    <span>[2022-12-10][Luis Amat] Se cambio estilos del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneChat/ConversationHistory/ButtonBottom',
    component: ButtonBottom,
}

const TemplateBase = args => ({
    components: {ButtonBottom},
    setup() {
        return {args}
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {
    position: 'initial'
}