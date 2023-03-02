<template>
  <div
    class="overspread-preview"
    :class="{ 'is-open': isOpen, 'is-close': !isOpen }"
  >
    <overspread-preview-summary />
    <overspread-preview-visor />
  </div>
</template>

<script src="./overspread-preview.ts" lang="ts"/>
<style src="./overspread-preview.scss" lang="scss" scoped/>