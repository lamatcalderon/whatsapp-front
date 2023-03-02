<template>
  <div
    class="conversation-history"
    :class="{
      'normal': !isOpenEmojis,
      'with-emoji': isOpenEmojis,
      'dark': +typeTheme === TypeThemeEnum.DARK,
    }"
    v-on:scroll="handleScroll"
  >
    <template v-for="message of messagesHistory" :key="message.id">
      <message-history :multimediaMessage="message" />
    </template>
    <button-bottom :class="{'hide': !showBottomDown}" @click="scrollToBottom"/>
  </div>
</template>

<script src="./conversation-history.ts" lang="ts"/>
<style src="./conversation-history.scss" lang="scss" scoped/>