import Dropdown from './dropdown.vue';
import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `DROPDOWN`;

const SUMMARY = `
    El componente <strong>DROPDOWN</strong> representa un menú desplegable para la aplicación, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    
`;

const COMPONENT_BASE = `
<div style="width: auto; margin-top: 20px;">
    <dropdown v-bind="args">
        <template #items={openCloseOptions}>
            <ul class="dropdown-container">
            <li class="dropdown-item">Nuevo grupo</li>
            <li class="dropdown-item">Nueva comunidad</li>
            <li class="dropdown-item">
                <span>Mensajes destacados</span>
            </li>
            <li class="dropdown-item" @click="() => {openCloseOptions(); openOverlayPhoneData(TypeOverlayPhoneDataEnum.OVERLAY_CONFIG);}">
                <span>Configuración</span>
            </li>
            <li class="dropdown-item" @click="closeSesion()">
                <span>Cerrar sesión</span>
            </li>
            </ul>
        </template>
    </dropdown>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2022-11-30][Luis Amat] Creación del componente</span>
    <span>[2022-12-10][Luis Amat] Se cambio estilos del componente</span>
`;

export default {
    title: 'Components-Common/Dropdown',
    component: Dropdown,
}

const TemplateBase = args => ({
    components: { Dropdown },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})


export const Base = TemplateBase.bind({});
Base.args = {

}