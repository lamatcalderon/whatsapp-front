<template>
  <label
    class="v-radio" :style="{'--theme-base-color': color}"
  >
    <input
      type="radio"
      :name="name"
      :checked="checked"
      v-bind="$attrs"
      @change="change"
    />
    {{ label || value }}
  </label>
</template>

<script src="./v-radio.ts" lang="ts"/>
<style src="./v-radio.scss" lang="scss" scoped/>