<template>
  <div class="info-user">
    <div class="avatar">
      <img v-if="photo && photo !== ''" class="image" :src="`data:image/png;base64,${photo}`"/>
      <img v-else class="image" src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"/>
    </div>
    <div class="info">
      <span>{{name}}</span>
      <span>{{lastConnection}}</span>
    </div>
  </div>
</template>

<script src="./info-user.ts" lang="ts"/>
<style src="./info-user.scss" lang="scss" scoped/>