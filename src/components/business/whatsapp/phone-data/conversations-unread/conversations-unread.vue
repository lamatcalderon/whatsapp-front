<template>
  <div
    class="conversations-unread"
    :class="{
      'with-notification': isOpenNotification,
      'normal': !isOpenNotification,
      'empty': conversationsUnread.length === 0
    }"
  >
    <div class="title">
      <span class="text">{{titleMessage}}</span>
    </div>
    <template
      v-for="conversation of conversationsUnread"
      :key="conversation.id"
    >
      <contact :contact="conversation" />
    </template>
    <div class="bottom-message">
      <div class="text">
        <span><em class="fas fa-lock"></em></span>
        <span>Tus mensajes personales estan cifrados de extremo a extremo</span>
      </div>
    </div>
  </div>
</template>

<script src="./conversations-unread.ts" lang="ts"/>
<style src="./conversations-unread.scss" lang="scss" scoped/>