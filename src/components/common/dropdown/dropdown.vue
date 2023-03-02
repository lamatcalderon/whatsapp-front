<template>
  <div class="dropdown">
    <div
      class="dropdown-toggle"
      :class="{ 'is-open': isOpen }"
      @click="openCloseOptions"
    >
      <a href="javascript:void(0)"><em class="fas fa-ellipsis-v"></em></a>
    </div>
    <div class="dropdown-menu" :class="{ 'is-close': !isOpen }">
      <slot name="items" :openCloseOptions="openCloseOptions" />
    </div>
  </div>
</template>

<script src="./dropdown.ts" lang="ts"/>