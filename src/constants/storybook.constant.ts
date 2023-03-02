export const PLANTILLA_HTML = `
<div class="whatsapp-storybook-contenedor">
    <span class="whatsapp-storybook-titulo">$$TITULO$$</span>
    <div class="whatsapp-storybook-cuerpo">
        <div>
            <p class="whatsapp-storybook-resumen whatsapp-storybook-texto">$$SUMMARY$$</p>
            <ul class="whatsapp-storybook-propiedades" style="margin-top: 20px">
                $$PROPS$$
            </ul>
            <div style="display:flex;align-items: center;justify-content: center;">
                $$COMPONENT$$
            </div>
            <div style="margin-top: 10px">
                <p class="whatsapp-storybook-resumen whatsapp-storybook-texto"><strong>Autor:</strong> $$AUTOR$$</p>
            </div>
            <div class="whatsapp-storybook-historial" style="margin-top: 10px">
                <p class="whatsapp-storybook-resumen" style="margin-bottom: 10px"><strong>Historial de modificaciones</strong></p>
                $$HISTORY$$
            </div>
        </div>
    </div>
</div>`;