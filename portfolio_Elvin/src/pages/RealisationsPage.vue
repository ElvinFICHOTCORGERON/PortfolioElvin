<template>
  <h1 class="text-3xl font-bold text-primary p-4">Mes Réalisations</h1>
  <div class="grid grid-cols-3">
    <Projet v-for="realisation in realisations" :realisation="realisation" />
  </div>
</template>

<script setup lang="ts">
import Projet from "../components/realisation/Projet.vue";
import { realisations } from "../data/realisation.ts";
</script>

<style scoped>
.grid-page {
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%), max(20rem, 98%/3)),
    1fr
  );
}
</style>
