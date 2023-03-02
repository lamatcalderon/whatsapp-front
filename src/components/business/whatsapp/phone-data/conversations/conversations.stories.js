import Conversations from './conversations.vue';
import {PLANTILLA_HTML} from "../../../../../constants/storybook.constant";

const TITULO = `CONVERSATIONS`;

const SUMMARY = `
    El componente <strong>CONVERSATIONS</strong> representa una lista de contactos o una lista de conversaciones grupales de whatsapp, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: 500px; margin-top: 20px">
    <conversations v-bind="args"></conversations>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneData/Conversations',
    component: Conversations,
}

const TemplateBase = args => ({
    components: {Conversations},
    setup() {
        return {args}
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}