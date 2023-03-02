<template>
  <div class="overlay" :class="{ 'is-open': isOpen, 'is-close': !isOpen }">
    <slot />
  </div>
</template>

<script src="./overlay.ts" lang="ts"/>
<style src="./overlay.scss" lang="scss" scoped/>