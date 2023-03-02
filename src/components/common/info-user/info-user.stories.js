import InfoUser from './info-user.vue';
import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `INFO-USER`;

const SUMMARY = `
    El componente <strong>INFO-USER</strong> representa informacion del usuario o un contacto, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>name</strong>: Nombre del usuario o contacto</li>
    <li><strong>photo</strong>: Photo del usuario o contacto</li>
    <li><strong>lastConnection</strong>: Fecha de ultima conección del usuario o contacto</li>
`;

const COMPONENT_BASE = `
<div style="width: auto; margin-top: 20px; background-color: #f5f6f6">
    <info-user v-bind="args"></info-user>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-11-30][Luis Amat] Creación del componente</span>
    <span>[2022-12-10][Luis Amat] Se cambio estilos del componente</span>
`;

export default {
    title: 'Components-Common/InfoUser',
    component: InfoUser,
}

const TemplateBase = args => ({
    components: { InfoUser },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})


export const Base = TemplateBase.bind({});
Base.args = {
    "name": "Tu @ Grupo prueba",
    "photo": "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",
    "lastConnection": "28/9/2022 a la(s) 19:57"
}