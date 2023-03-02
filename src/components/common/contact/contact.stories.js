import Contact from './contact.vue';
import {PLANTILLA_HTML} from "../../../constants/storybook.constant";

const TITULO = `CONTACT`;

const SUMMARY = `
    El componente <strong>CONTACT</strong> representa un contacto o una conversacion grupal de whatsapp, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>contact</strong>: Objeto que contiene informacion del contacto o conversacion grupal y consta de: id, photo, alias, lastMessage, dateLastMessage</li>
`;

const COMPONENT_BASE = `
<div style="width: 300px; margin-top: 20px;">
    <contact v-bind="args"></contact>
</div>`;
const COMPONENT_SELECTED = `
<div style="width: 300px; margin-top: 20px">
    <contact class="selected" v-bind="args"></contact>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-11-30][Luis Amat] Creación del componente</span>
    <span>[2022-12-10][Luis Amat] Se cambio estilos del componente</span>
`;

export default {
    title: 'Components-Common/Contact',
    component: Contact,
}

const TemplateBase = args => ({
    components: {Contact},
    setup() {
        return {args}
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

const TemplateSelected = args => ({
    components: {Contact},
    setup() {
        return {args}
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_SELECTED}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {
    'contact': {
        id: 1, 
        alias: "Wallas",
        lastMessage: {
            content: "A ver q tal",
            date: "sabado",
            status: "read"
        }
    }
}

export const Selected = TemplateSelected.bind({});
Selected.args = {
    'contact': {
        id: 2, 
        photo: "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",
        alias: "Sandra",
        lastMessage: {
            content: "Ntp que si o si te tomaras foto con la rata 😊👌",
            date: "ayer",
            status: "read"
        }
    }
}