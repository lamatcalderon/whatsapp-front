<template>
  <div class="search-conversation">
    <div class="search-text">
        <div class="icon" v-if="!isFocus">
            <em class="fas fa-search"></em>
        </div>
        <div class="icon" v-if="isFocus">
            <em class="fas fa-arrow-left"></em>
        </div>
        <input class="input" :placeholder="isOpenConversationsUnread ? 'Buscar en chats no leídos': 'Busca un chat o inicia uno nuevo'" @focus="focusInput" @blur="blurInput"/>
    </div>
    <div class="search-option" :class="{'selected': isOpenConversationsUnread}" @click="openConversationsUnread"><em class="fas fa-filter"></em></div>
  </div>
</template>

<script src="./search-conversation.ts" lang="ts"/>
<style src="./search-conversation.scss" lang="scss" scoped/>