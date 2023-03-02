import FooterPhoneChat from './footer-phone-chat.vue';
import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";

const TITULO = `FOOTER-PHONE-CHAT`;

const SUMMARY = `
    El componente <strong>FOOTER-PHONE-CHAT</strong> representa la barra inferior del lado del historial de mensajes, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: 100%; margin-top: 20px">
    <footer-phone-chat v-bind="args"></footer-phone-chat>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneChat/FooterPhoneChat',
    component: FooterPhoneChat,
}

const TemplateBase = args => ({
    components: { FooterPhoneChat },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}