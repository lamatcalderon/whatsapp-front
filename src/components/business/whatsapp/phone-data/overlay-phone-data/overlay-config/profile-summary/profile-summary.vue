<template>
    <div class="profile-summary">
        <div class="avatar">
            <img :src="`data:image/png;base64, ${whatsappSession.user.photo}`"/>
        </div>
        <div class="info">
            <div class="data-info">
                <span class="title">L</span>
                <span class="message">¡Hola! Estoy usando Whatsapp.</span>
            </div>
        </div>
    </div>
</template>

<script src="./profile-summary.ts" lang="ts"/>
<style src="./profile-summary.scss" lang="scss" scoped/>