<template>
  <div class="preview-media" :class="{ 'is-open': isOpenPreviewMedia }">
    <header class="options">
      <div @click="close"><em class="fa-solid fa-xmark"></em></div>
      <span>{{objectPreview?.name}}</span>
    </header>
    <main class="container">
      <component :is="choosePreviewMediaComponent()" @write-message-document-preview="setMessage"/>
    </main>
    <footer class="carousel">
      <span></span>
      <div class="button-send" @click="send">
        <div class="icon"><em class="fas fa-paper-plane"></em></div>
      </div>
    </footer>
  </div>
</template>

<script src="./preview-media.ts" lang="ts"/>
<style src="./preview-media.scss" lang="scss" scoped/>