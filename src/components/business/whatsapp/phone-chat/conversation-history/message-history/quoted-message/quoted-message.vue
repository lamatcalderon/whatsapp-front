<template>
  <div :class="[`${APP_PREFIX}-quoted-message`, { 'no-from-me': !fromMe }]">
    <div class="content">
      <div class="participant">
        <span>{{ quotedMessage.participant }}</span>
      </div>
      <quoted-audio
        v-if="quotedMessage.type === TypeMessageHistoryEnum.AUDIO"
        :quotedMessage="quotedMessage"
      />
      <quoted-conversation
        v-if="quotedMessage.type === TypeMessageHistoryEnum.CONVERSATION"
        :quotedMessage="quotedMessage"
      />
      <quoted-image
        v-if="quotedMessage.type === TypeMessageHistoryEnum.IMAGE"
        :quotedMessage="quotedMessage"
      />
      <quoted-sticker
        v-if="quotedMessage.type === TypeMessageHistoryEnum.STICKER"
        :quotedMessage="quotedMessage"
      />
    </div>
    <div class="preview" v-if="quotedMessage.preview">
      <img class="image" :src="`data:image/png;base64,${quotedMessage.preview}`"/>
    </div>
  </div>
</template>

<script src="./quoted-message.ts" lang="ts"/>
<style src="./quoted-message.scss" lang="scss" scoped/>