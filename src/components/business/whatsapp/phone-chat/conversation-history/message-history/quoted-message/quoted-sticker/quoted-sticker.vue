<template>
  <div :class="`${APP_PREFIX}-quoted-sticker`">
    <div class="content">
        <img class="image" :src="`data:image/png;base64,${quotedMessage.thumbail}`"/>
    </div>
  </div>
</template>

<script src="./quoted-sticker.ts" lang="ts"/>
<style src="./quoted-sticker.scss" lang="scss" scoped/>