<template>
  <div :class="`${APP_PREFIX}-icon-message`">
    <img v-if="readStatus === TypeReadConfirmationEnum.SENT" src="../../../assets/resources/whatsapp-history-message-sent.png"/>
    <img v-if="readStatus === TypeReadConfirmationEnum.DELIVERED" src="../../../assets/resources/whatsapp-history-message-delivered.png"/>
    <img v-if="readStatus === TypeReadConfirmationEnum.READ" src="../../../assets/resources/whatsapp-history-message-read.png"/>
  </div>
</template>

<script src="./read-confirmation.ts" lang="ts"/>
<style src="./read-confirmation.scss" lang="scss" scoped/>