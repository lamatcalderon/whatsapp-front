import Modal from './modal.vue';
import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `MODAL`;

const SUMMARY = `
    El componente <strong>MODAL</strong> representa un cuadro que se ubica al centro de la pantalla, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>title</strong>: Título del modal</li>
`;

const COMPONENT_BASE = `
<div style="width: 100%, margin-top: 20px;display:flex; align-content: center; justify-content:center; background-color: rbga(0,0,0, 0.1)">
    <modal v-bind="args"></modal>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-11-30][Luis Amat] Creación del componente</span>
    <span>[2022-12-10][Luis Amat] Se cambio estilos del componente</span>
`;

export default {
    title: 'Components-Common/Modal',
    component: Modal,
}

const TemplateBase = args => ({
    components: { Modal },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})


export const Base = TemplateBase.bind({});
Base.args = {
    "title": "Tema"
}