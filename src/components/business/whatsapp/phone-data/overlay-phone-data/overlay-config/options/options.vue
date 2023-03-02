<template>
  <div class="options">
    <div class="option">
        <div class="icon">
            <em class="fas fa-bell"></em>
        </div>
        <div class="description">
            <span>Notificaciones</span>
        </div>
    </div>
    <div class="option">
        <div class="icon">
            <em class="fas fa-lock"></em>
        </div>
        <div class="description">
            <span>Privacidad</span>
        </div>
    </div>
    <div class="option">
        <div class="icon">
            <em class="fas fa-shield-alt"></em>
        </div>
        <div class="description">
            <span>Seguridad</span>
        </div>
    </div>
    <div class="option" @click="openModalTheme(+TypeModalEnum.CHANGE_THEME)">
        <div class="icon">
            <em class="fas fa-sun"></em>
        </div>
        <div class="description">
            <span>Tema</span>
        </div>
    </div>
        <div class="option">
        <div class="icon">
            <em class="fas fa-image"></em>
        </div>
        <div class="description">
            <span>Fondo de pantalla de chat</span>
        </div>
    </div> 
    <div class="option">
        <div class="icon">
            <em class="fas fa-file-alt"></em>
        </div>
        <div class="description">
            <span>Solicitar info. de mi cuenta</span>
        </div>
    </div>
        <div class="option">
        <div class="icon">
            <em class="fas fa-question-circle"></em>
        </div>
        <div class="description">
            <span>Ayuda</span>
        </div>
    </div>
  </div>
</template>

<script src="./options.ts" lang="ts"/>
<style src="./options.scss" lang="scss" scoped/>