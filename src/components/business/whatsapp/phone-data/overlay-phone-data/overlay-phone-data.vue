<template>
  <div class="overlay-phone-data" :class="{ 'is-open': isOpenOverlay }">
      <component :is="overlayComponent"/>
  </div>
</template>

<script src="./overlay-phone-data.ts" lang="ts"/>
<style src="./overlay-phone-data.scss" lang="scss" scoped/>