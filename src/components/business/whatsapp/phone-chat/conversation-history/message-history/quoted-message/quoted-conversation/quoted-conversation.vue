<template>
  <div v-if="quotedMessage.newMessageContent" :class="`${APP_PREFIX}-quoted-conversation`" v-html="quotedMessage.newMessageContent">
  </div>
  <div v-else :class="`${APP_PREFIX}-quoted-conversation`">
    <span v-if="!quotedMessage.newMessageContent">{{quotedMessage.messageContent}}</span>
  </div>
</template>

<script src="./quoted-conversation.ts" lang="ts"/>
<style src="./quoted-conversation.scss" lang="scss" scoped/>