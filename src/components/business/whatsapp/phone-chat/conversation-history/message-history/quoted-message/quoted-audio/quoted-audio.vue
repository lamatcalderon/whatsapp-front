<template>
  <div :class="`${APP_PREFIX}-quoted-audio`">
    <em v-if="!quotedMessage.self" class="fas fa-headphones"></em>
    <em v-if="quotedMessage.self" class="fas fa-microphone"></em>
    <span>{{quotedMessage.duration}}</span>
    <span v-if="!quotedMessage.self">Audio</span>
  </div>
</template>

<script src="./quoted-audio.ts" lang="ts"/>
<style src="./quoted-audio.scss" lang="scss" scoped/>