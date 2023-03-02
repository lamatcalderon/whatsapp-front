<template>
  <div class="preview-image">
    <div class="preview">
      <img class="image" :src="srcObj" />
    </div>
    <div class="message" v-if="typePreviewMedia === TypeMediaContentEnum.IMAGE">
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

<script src="./preview-image.ts" lang="ts"/>
<style src="./preview-image.scss" lang="scss" scoped/>