<template>
  <modal :title="title">
    <template #content>
      <div class="theme-options">
        <v-radio :color="themes.normal.baseColor" :label="themes.normal.label" name="theme" :value="TypeThemeEnum.NORMAL" v-model="selectItem"/>
        <v-radio :color="themes.dark.baseColor" :label="themes.dark.label" name="theme" :value="TypeThemeEnum.DARK" v-model="selectItem"/>
        <!--<v-radio :color="themes.blue.baseColor" :label="themes.blue.label" name="theme" :value="TypeThemeEnum.BLUE" v-model="selectItem"/>
        <v-radio :color="themes.orange.baseColor" :label="themes.orange.label" name="theme" :value="TypeThemeEnum.ORANGE" v-model="selectItem"/>
        <v-radio :color="themes.purple.baseColor" :label="themes.purple.label" name="theme" :value="TypeThemeEnum.PURPLE" v-model="selectItem"/>-->
      </div>
    </template>
    <template #footer>
      <v-button class="v-button secondary" @click="openCloseModal(false)">cancelar</v-button>
      <v-button class="v-button primary" @click="changeTheme">ok</v-button>
    </template>
  </modal>
</template>

<script src="./modal-change-theme.ts" lang="ts"/>
<style src="./modal-change-theme.scss" lang="scss" scoped/>