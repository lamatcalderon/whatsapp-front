<template>
  <div class="overlay-phone-chat" :class="{'is-open': isOpen}">
    <component :is="overlayComponent"/>
  </div>
</template>

<script src="./overlay-phone-chat.ts" lang="ts"/>
<style src="./overlay-phone-chat.scss" lang="scss" scoped/>