<template>
  <div class="multimedia-options">
    <div style="position: relative">
      <div class="options" :class="{'is-open': isOpen, 'is-close': !isOpen}">
        <ul class="menu-options">
          <li class="option">
            <label
              ><a class="media-sticker"
              @click="setTypeMediaContent(TypeMediaContentEnum.STICKER)"
                ><em class="fas fa-images"></em></a
              >
              <input
                type="file"
                style="display: none"
                @change="uploadFile"
                accept="image/webp"
                ref="refUploadAudio"
              />
            </label>
          </li>
          <li class="option">
            <label
              ><a class="media-image"
              @click="setTypeMediaContent(TypeMediaContentEnum.IMAGE)"
                ><em class="fas fa-image"></em></a
              >
              <input
                type="file"
                style="display: none"
                @change="uploadFile"
                accept="image/*"
                ref="refUpload"
              />
            </label>
          </li>
          <li class="option">
            <label
              ><a class="media-document"
              @click="setTypeMediaContent(TypeMediaContentEnum.DOCUMENT)"
                ><em class="fas fa-file"></em></a
              >
              <input
                type="file"
                style="display: none"
                @change="uploadFile"
                ref="refUploadAudio"
              />
            </label>
          </li>
          <li class="option">
            <label
              ><a class="media-contact"
                ><em class="fas fa-music"></em></a
              >
              <input
                type="file"
                style="display: none"
                @change="uploadFile"
                accept="audio/mp3"
                ref="refUploadAudio"
              />
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./multimedia-options.ts" lang="ts"/>
<style src="./multimedia-options.scss" lang="scss" scoped/>