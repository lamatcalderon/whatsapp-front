import Notification from './notification.vue';
import { PLANTILLA_HTML } from "../../../../../constants/storybook.constant";
import { TypeNotificationEnum } from "../../../../../enums/type-notification.enum";

const TITULO = `NOTIFICATION`;

const SUMMARY = `
    El componente <strong>NOTIFICATION</strong> representa una notificación de whatsapp, en él no se definen <strong>propiedades</strong>`;

const PROPS = ``;

const COMPONENT_BASE = `
<div style="width: 500px; margin-top: 20px">
    <notification v-bind="args"></notification>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-12-03][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Whatsapp/PhoneData/Notification',
    component: Notification,
}

const TemplateBase = args => ({
    components: { Notification },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Desktop = TemplateBase.bind({});
Desktop.args = {
    type: TypeNotificationEnum.DESKTOP,
    visible: true
}

export const UpdateVersion = TemplateBase.bind({});
UpdateVersion.args = {
    type: TypeNotificationEnum.UPDATE_VERSION,
    visible: true
}