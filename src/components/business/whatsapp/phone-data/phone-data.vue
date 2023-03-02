<template>
  <div class="phone-data">
    <overlay-phone-data/>
    <header-phone-data/>
    <notification type="desktop"/>
    <search-conversation/>
    <component :is="chooseConversationsComponent()"/>
  </div>
</template>

<script src="./phone-data.ts" lang="ts"/>
<style src="./phone-data.scss" lang="scss" scoped/>