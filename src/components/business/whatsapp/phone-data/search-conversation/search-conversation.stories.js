import SearchConversation from './search-conversation.vue';
import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `SEARCH-CONVERSATION`;

const SUMMARY = `
    El componente <strong>SEARCH-CONVERSATION</strong> representa una notificación de whatsapp, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: 500px; margin-top: 20px">
    <search-conversation v-bind="args"></search-conversation>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneData/SearchConversation',
    component: SearchConversation,
}

const TemplateBase = args => ({
    components: { SearchConversation },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}