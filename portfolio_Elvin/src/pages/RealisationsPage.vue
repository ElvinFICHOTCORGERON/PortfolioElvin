<template>
  <h1 class="text-3xl font-bold text-primary p-4">Mes Réalisations</h1>
  <div>
    <Projet v-for="realisation in realisations" :realisation="realisation" />
  </div>
</template>

<script setup lang="ts">
import Projet from "../components/realisation/Projet.vue";
import { realisations } from "../data/realisation.ts";
</script>
