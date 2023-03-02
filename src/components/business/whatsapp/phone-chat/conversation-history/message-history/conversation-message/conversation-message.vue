<template>
  <div :class="`${APP_PREFIX}-conversation-message`">
    <span
      v-if="
        !multimediaMessage?.thumbail && !multimediaMessage.newMessageContent
      "
      class="message-history-text"
      >{{ multimediaMessage.messageContent }}</span
    >
    <span
      v-if="!multimediaMessage?.thumbail && multimediaMessage.newMessageContent"
      v-html="multimediaMessage.newMessageContent"
      class="message-history-text"
    ></span>
    <div v-if="multimediaMessage?.thumbail" class="message-history-emoji">
      <img
        class="message-history-emoji-image"
        :src="`data:image/png;base64,${multimediaMessage?.thumbail}`"
      />
    </div>
    <div class="space-message-history"></div>
  </div>
</template>

<script src="./conversation-message.ts" lang="ts"/>
<style src="./conversation-message.scss" lang="scss" scoped/>