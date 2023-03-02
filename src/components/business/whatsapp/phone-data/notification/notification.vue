<template>
  <div class="notification" :class="{'is-open': (isOpenNotification || visible)}">
    <desktop v-if="type === TypeNotificationEnum.DESKTOP" @close="closeNotification"/>
    <update-version v-if="type === TypeNotificationEnum.UPDATE_VERSION" @close="closeNotification"/>
    <battery-low v-if="type === TypeNotificationEnum.BATTERY_LOW" @close="closeNotification"/>
  </div>
</template>

<script src="./notification.ts" lang="ts"/>
<style src="./notification.scss" lang="scss" scoped/>