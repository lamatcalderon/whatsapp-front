<template>
  <div class="emoji">
    <div :class="data.class" :style="{'background-position': data.position}"></div>
  </div>
</template>

<script src="./emoji.ts" lang="ts"/>
<style src="./emoji.scss" lang="scss" scoped/>