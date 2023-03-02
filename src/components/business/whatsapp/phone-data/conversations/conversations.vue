<template>
  <div class="conversations" :class="{'with-notification': isOpenNotification, 'normal': !isOpenNotification}">
    <template v-for="conversation in conversations" :key="conversation.id">
      <contact :contact="conversation"/>
    </template>
  </div>
</template>

<script src="./conversations.ts" lang="ts"/>
<style src="./conversations.scss" lang="scss" scoped/>