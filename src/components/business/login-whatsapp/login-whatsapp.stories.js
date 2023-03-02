import LoginWhatsappComponent from './login-whatsapp.vue';
import {PLANTILLA_HTML} from "../../../constants/storybook.constant";

const TITULO = `LOGIN-WHATSAPP`;

const SUMMARY = `
    El componente <strong>LOGIN-WHATSAPP</strong> representa el componente que contiene la generación del código qr para ser escaneado por el teléfono,en él no se definen <strong>propiedades</strong>`;

const PROPS = `
`;

const COMPONENT_BASE = `
<login-whatsapp-component v-bind="args"></login-whatsapp-component>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/LoginWhatsapp',
    component: LoginWhatsappComponent,
}

const TemplateWhatsapp = args => ({
    components: {LoginWhatsappComponent},
    setup() {
        return {args}
    },
    //template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
    template: COMPONENT_BASE
})

export const LoginWhatsapp = TemplateWhatsapp.bind({});
LoginWhatsapp.args = {

}