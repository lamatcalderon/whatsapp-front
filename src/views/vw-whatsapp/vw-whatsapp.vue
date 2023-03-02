<template>
  <overlay>
    <component :is="modalComponent || overspreadComponent" />
  </overlay>
  <whatsapp />
</template>

<script src="./vw-whatsapp.ts" lang="ts"/>