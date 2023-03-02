<template>
  <footer class="footer-phone-chat">
    <div class="icon-footer" :class="{ 'is-open': isOpenEmojis }">
      <a href="javascript:void(0)" @click="openCloseEmojis(!isOpenEmojis)"
        ><em class="far fa-smile"></em
      ></a>
    </div>
    <div>      
      <component :is="multimediaOptionsComponent" @close-multimedia-options="openCloseMultimediaOptions(!isOpenMultimediaOptions)"/>
      <div class="icon-footer" :class="{ 'is-open': isOpenMultimediaOptions }">
        <a href="javascript:void(0)" @click="openCloseMultimediaOptions(!isOpenMultimediaOptions)"
          ><em class="fas fa-paperclip"></em
        ></a>
      </div>
    </div>

    <div
      class="message-multimedia"
      contenteditable="true"
      placeholder="Escribe un mensaje aqui"
      @keyup="showIconSendMessage"
    ></div>
    <div class="icon-footer">
      <a href="javascript:void(0)" v-if="!showIconSend"
        ><em class="fas fa-microphone"></em
      ></a>
      <a href="javascript:void(0)" v-if="showIconSend" @click="sendMessage"
        ><em class="fas fa-paper-plane"></em
      ></a>
    </div>
  </footer>
</template>

<script src="./footer-phone-chat.ts" lang="ts"/>
<style src="./footer-phone-chat.scss" lang="scss" scoped/>