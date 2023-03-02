<template>
  <div class="emojis" :class="{ 'is-open': (isOpen || visible) }">
    <categories-emoji/>
    <div class="emojis-panel">
      <span class="title-category">{{categorySelect.description}}</span>
      <div class="emojis-container">
        <template v-for="emoji of emojis" :key="emoji.emoji">
          <emoji :data="emoji" @click="selectEmoji(emoji)"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./emojis.ts" lang="ts"/>
<style src="./emojis.scss" lang="scss" scoped/>