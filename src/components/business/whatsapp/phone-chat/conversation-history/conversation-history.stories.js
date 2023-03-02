import ConversationHistory from './conversation-history.vue';
import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `CONVERSATION-HISTORY`;

const SUMMARY = `
    El componente <strong>CONVERSATION-HISTORY</strong> representa el historial de mensajes entre el usuario y sus contactos, un sticker o un video, en él se definen las siguientes <strong>propiedades</strong>`;

const PROPS = `
    
`;

const COMPONENT_BASE = `
<div style="width: auto; margin-top: 20px">
    <conversation-history v-bind="args"></conversation-history>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneChat/ConversationHistory',
    component: ConversationHistory,
}

const Template = args => ({
    components: { ConversationHistory },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {

}