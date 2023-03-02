<template>
  <div class="contacts normal">
    <template v-for="contact in contacts" :key="contact.id">
        <contact :contact="contact"/>
    </template>
  </div>
</template>

<script src="./contacts.ts" lang="ts"/>
<style src="./contacts.scss" lang="scss" scoped/>