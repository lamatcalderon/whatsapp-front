<template>
  <header class="header-phone-chat">
    <info-user
      :name="contactSelect.alias"
      :photo="contactSelect.photo"
      lastConnection="últ. vez hoy a la(s) 13:28"
    />
    <div class="options-contact">
      <dropdown>
        <template #items="{ openCloseOptions }">
          <ul class="dropdown-container">
            <li class="dropdown-item">Info. del contacto</li>
            <li class="dropdown-item">Reportar empresa</li>
            <li class="dropdown-item">
              <span>Bloquear</span>
            </li>
            <li class="dropdown-item" @click="openCloseOptions()">
              <span>Seleccionar mensajes</span>
            </li>
            <li class="dropdown-item">Cerrar chat</li>
            <li class="dropdown-item">Silenciar notificaciones</li>
            <li class="dropdown-item">Mensajes temporales</li>
            <li class="dropdown-item">Vaciar mensajes</li>
            <li class="dropdown-item">Eliminar chat</li>
          </ul>
        </template>
      </dropdown>
    </div>
  </header>
</template>

<script src="./header-phone-chat.ts" lang="ts"/>
<style src="./header-phone-chat.scss" lang="scss" scoped/>