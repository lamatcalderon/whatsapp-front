import OverlayContacts from './overlay-contacts.vue';
import { PLANTILLA_HTML } from "../../../../../../constants/storybook.constant";

const TITULO = `OVERLAY-CONTACT`;

const SUMMARY = `
    El componente <strong>OVERLAY-CONTACT</strong> representa un screen que contiene los contactos del usuario de la aplicación, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: auto; margin-top: 20px">
    <overlay-contacts v-bind="args"></overlay-contacts>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneData/OverlayPhoneData/OverlayContacts',
    component: OverlayContacts,
}

const TemplateBase = args => ({
    components: { OverlayContacts },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = TemplateBase.bind({});
Base.args = {

}