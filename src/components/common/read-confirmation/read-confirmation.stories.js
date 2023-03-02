import ReadConfirmation from './read-confirmation.vue';
import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `READ-CONFIRMATION`;

const SUMMARY = `
    El componente <strong>READ-CONFIRMATION</strong> representa el estado de un mensaje, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>readStatus</strong>: Estado del mensaje</li>
`;

const COMPONENT_BASE = `
<div style="width: auto; margin-top: 20px;">
    <read-confirmation v-bind="args"></read-confirmation>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-11-30][Luis Amat] Creación del componente</span>
    <span>[2022-12-10][Luis Amat] Se cambio estilos del componente</span>
`;

export default {
    title: 'Components-Common/ReadConfirmation',
    component: ReadConfirmation,
}

const TemplateBase = args => ({
    components: { ReadConfirmation },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})


export const Sent = TemplateBase.bind({});
Sent.args = {
    "readStatus": "sent"
}

export const Read = TemplateBase.bind({});
Read.args = {
    "readStatus": "read"
}

export const Delivered = TemplateBase.bind({});
Delivered.args = {
    "readStatus": "delivered"
}