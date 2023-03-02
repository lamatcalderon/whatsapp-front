import Overlay from './overlay.vue';
import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `OVERLAY`;

const SUMMARY = `
    El componente <strong>OVERLAY</strong> representa un screen tenue que cubre toda la aplicación, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    
`;

const COMPONENT_BASE = `
<div style="width: 100%;margin-top: 20px;">
    <overlay></overlay>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-11-30][Luis Amat] Creación del componente</span>
    <span>[2022-12-10][Luis Amat] Se cambio estilos del componente</span>
`;

export default {
    title: 'Components-Common/Overlay',
    component: Overlay,
}

const TemplateBase = args => ({
    components: { Overlay },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})


export const Base = TemplateBase.bind({});
Base.args = {

}