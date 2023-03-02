<template>
  <div :class="`${APP_PREFIX}-audio-message`">
    <audio
      v-if="multimediaMessage.src"
      controls
      ref="refAudio"
      style="display: none"
    >
      <source v-if="!multimediaMessage?.self && num === 0" src="../../../../../../../assets/resources/pokemon-trailer.mp3" type="audio/mpeg"/>
      <source v-if="!multimediaMessage?.self && num === 1" src="../../../../../../../assets/resources/obsesion-miguel-mateos.mp3" type="audio/mpeg"/>
      <source v-if="multimediaMessage?.self" src="../../../../../../../assets/resources/audio-1.mp3" type="audio/mp3"/>
    </audio>
    <div class="phones">
      <span v-if="!multimediaMessage?.self"><em class="fa-solid fa-headphones-simple"></em></span>
      <img v-else class="profile-photo" :src="`data:image/png;base64,${whatsappSession.user.photo}`"/>
      <span v-if="multimediaMessage?.self" class="profile-icon"><em class="fa-solid fa-microphone"></em></span>
    </div>
    <div class="audio-player">
      <div class="option">
        <span @click="playAudio" v-if="!isPlaying"
          ><em class="fas fa-play"></em
        ></span>
        <span @click="pauseAudio" v-if="isPlaying"
          ><em class="fas fa-pause"></em
        ></span>
      </div>
      <div class="container-seek">
        <input
        :disabled="!multimediaMessage.src"
        type="range"
        class="seek-slider"
        min="0"
        :max="refAudio?.duration"
        v-model="playbackTime"
        ref="refSlider"
        />
        <div class="seek-duration">
            <span v-if="!isPlaying">{{ convertTime(refAudio?.duration) }}</span>
            <span v-if="isPlaying">{{ elapsedTime() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./audio-message.ts" lang="ts"/>
<style src="./audio-message.scss" lang="scss" scoped/>