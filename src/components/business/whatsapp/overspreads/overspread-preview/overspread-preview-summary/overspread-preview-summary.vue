<template>
  <header class="overspread-preview-summary">
    <div class="content">
      <info-user
        name="Tu @ Grupo prueba"
        :photo="whatsappSession.user.photo"
        lastConnection="28/9/2022 a la(s) 19:57"
      />
      <div class="options">
        <div class="option" @click="close"><em class="fa-regular fa-message"></em></div>
        <div class="option" @click="close"><i class="fa-regular fa-share-from-square"></i></div>
        <div class="option" @click="close">
          <em class="fa-solid fa-arrow-down"></em>
        </div>
        <div class="option" @click="close"><em class="fa-solid fa-xmark"></em></div>
      </div>
    </div>
  </header>
</template>

<script src="./overspread-preview-summary.ts" lang="ts"/>
<style src="./overspread-preview-summary.scss" lang="scss" scoped/>