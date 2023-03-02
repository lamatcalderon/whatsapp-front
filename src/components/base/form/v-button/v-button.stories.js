import VButton from './v-button.vue';
import { PLANTILLA_HTML } from "../../../../constants/storybook.constant";

const TITULO = `V-BUTTON`;

const SUMMARY = `
    El componente <strong>V-BUTTON</strong> representa un botón del aplicativo, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE_PRIMARY = `
<div style="width: auto; margin-top: 20px">
    <v-button class="v-button primary" v-bind="args">Primary</v-button>
</div>`;

const COMPONENT_BASE_SECONDARY = `
<div style="width: auto; margin-top: 20px">
    <v-button class="v-button secondary" v-bind="args">Secondary</v-button>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Base/VButton',
    component: VButton,
}

const TemplateBasePrimary = args => ({
    components: { VButton },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE_PRIMARY}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

const TemplateBaseSecondary = args => ({
    components: { VButton },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE_SECONDARY}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Primary = TemplateBasePrimary.bind({});
Primary.args = {
    visible: true
}

export const Secondary = TemplateBaseSecondary.bind({});
Secondary.args = {
    visible: true
}