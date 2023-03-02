<template>
  <div class="preview-document">
    <div class="preview">
      <div class="icon"></div>
      <p class="title">No hay vista previa disponible</p>
      <p class="subtitle">{{ getSizeDocument(objectPreview?.size) }}</p>
    </div>
    <div class="message">
      <div
        class="text"
        contenteditable="true"
        placeholder="Escribe un mensaje aqui"
        ref="refText"
        @keyup="pressKeys"
      ></div>
    </div>
  </div>
</template>

<script src="./preview-document.ts" lang="ts"/>
<style src="./preview-document.scss" lang="scss" scoped/>