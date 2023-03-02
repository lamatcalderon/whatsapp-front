<template>
  <div class="overspread-preview-visor">
    <div class="media-visor">
      <div class="content">
        <img v-if="multimediaMessage?.preview" class="image" :src="`${multimediaMessage.preview}`"/>
        <img v-else class="image" :src="`${multimediaMessage.thumbail}`" />
      </div>
    </div>
    <div class="media-carousel"></div>
  </div>
</template>

<script src="./overspread-preview-visor.ts" lang="ts"/>
<style src="./overspread-preview-visor.scss" lang="scss" scoped/>