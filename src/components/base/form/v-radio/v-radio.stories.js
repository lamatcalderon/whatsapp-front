import VRadio from './v-radio.vue';
import { PLANTILLA_HTML } from "../../../../constants/storybook.constant";

import { TypeThemeEnum } from "../../../../enums/type-theme.enum";

import themes from '../../../../assets/themes/themes.json';

const TITULO = `V-RADIO`;

const SUMMARY = `
    El componente <strong>V-RADIO</strong> representa un radio botón del aplicativo, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: auto; margin-top: 20px">
    <v-radio color='#54656f' label='Claro' name="theme" value='1' v-model="selectItem"/>
    <v-radio color='#111b21' label='Oscuro' name="theme" value='2' v-model="selectItem"/>
    <v-radio color='#0094bf' label='Azul' name="theme" value='3' v-model="selectItem"/>
    <v-radio color='#FF9800' label='Naranja' name="theme" value='4' v-model="selectItem"/>
    <v-radio color='#7F1974' label='Morado' name="theme" value='5' v-model="selectItem"/>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Base/VRadio',
    component: VRadio,
}

const TemplateBase = args => ({
    components: { VRadio },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}