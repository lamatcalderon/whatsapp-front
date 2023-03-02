<template>
  <header class="header-phone-data">
    <div class="avatar">
      <img
        class="avatar-image"
        :src="`data:image/png;base64,${whatsappSession.user.photo}`"
      />
    </div>
    <nav class="options">
      <ul class="nav-options">
        <li>
          <div class="content">
            <a href="javascript:void(0)"><em class="fas fa-users"></em></a>
          </div>
        </li>
        <li>
          <div
            class="content"
          >
            <a href="javascript:void(0)"
              ><em class="fas fa-circle-notch"></em
            ></a>
          </div>
        </li>
        <li>
          <div
            class="content"
            @click="
              openOverlayPhoneData(TypeOverlayPhoneDataEnum.OVERLAY_CONTACTS)
            "
          >
            <a href="javascript:void(0)"
              ><em class="fas fa-comment-dots"></em
            ></a>
          </div>
        </li>
        <dropdown>
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
      </ul>
    </nav>
  </header>
</template>

<script src="./header-phone-data.ts" lang="ts"/>
<style src="./header-phone-data.scss" lang="scss" scoped/>