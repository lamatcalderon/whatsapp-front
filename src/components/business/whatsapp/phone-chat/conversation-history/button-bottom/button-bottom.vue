<template>
  <div :class="`${APP_PREFIX}-button-bottom`" v-bind="$attrs" :style="{'--panel-button-bottom-position': position} ">
    <em class="fas fa-chevron-down"></em>
  </div>
</template>

<script src="./button-bottom.ts" lang="ts"/>
<style src="./button-bottom.scss" lang="scss" scoped/>