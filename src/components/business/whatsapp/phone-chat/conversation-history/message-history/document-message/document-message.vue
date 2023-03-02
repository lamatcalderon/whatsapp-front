<template>
  <div :class="`${APP_PREFIX}-document-message`">
    <div class="preview" :class="{'no-from-me': !multimediaMessage.fromMe}">
        <div class="content">
            <div class="icon">
                <em class="fa-solid fa-file fa-2x"></em>
            </div>
            <div class="description">
                <div class="name">
                    <span>{{multimediaMessage?.name}}</span>
                </div>
                <div class="features">
                    <span>{{multimediaMessage?.extension ? `${multimediaMessage?.extension} - ${multimediaMessage?.size}` : `${multimediaMessage?.size}`}}</span>
                </div>
            </div>
            <div class="icon">
                <em class="fa-sharp fa-regular fa-circle-down fa-2x"></em>
            </div>
        </div>
    </div>
    <div class="text-message">
        <span>{{multimediaMessage?.messageContent}}</span>
        <div class="space-message-history"></div>
    </div>
  </div>
</template>

<script src="./document-message.ts" lang="ts"/>
<style src="./document-message.scss" lang="scss" scoped/>