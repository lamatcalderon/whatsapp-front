<template>
  <div class="desktop">
    <div class="icon">
      <span>
        <em class="fas fa-bell-slash"></em>
      </span>
    </div>
    <div class="info">
      <div class="message-update">
        <span class="title">Recibe notificaciones de mensajes nuevos</span>
        <span class="comment">Activar notificaciones de escritorio &#62;</span>
      </div>
    </div>
    <div class="options">
      <a href="javascript:void(0)" @click="close">
        <!--<em class="fas fa-times"></em>-->
        <em class="fa-solid fa-xmark"></em>
      </a>
    </div>
  </div>
</template>

<script src="./desktop.ts" lang="ts"/>
<style src="./desktop.scss" lang="scss" scoped/>