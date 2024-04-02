<template>
  <h1 class="text-3xl font-bold text-primary p-4">Mon parcours</h1>
  <div class="p-8">
    <p>
      Depuis mon plus jeune âge j'ai toujours été passionné par l'informatique.
      J'ai notamment commencé à découvrir ce monde en 2018 quand j'ai fait mon
      stage d'observation de 3ème chez l'entreprise Maincare à Dijon. J'ai
      poursuivi cette vocation en obtenant un bac général au lycée Louis Davier
      à Joigny avec les spécialités Mathématiques, Physique-Chimie et Sciences
      de l'ingénieur. J'ai ensuite intégré l'IUT Informatique de Dijon avec le
      parcours CDV afin de me spécialisé dans le domaine du développement
    </p>
    <br />
    <p>
      Actuellement en 3ème année je cherche à poursuire mes études avec un
      master en ingénierie logiciel
    </p>
  </div>

  <div class="grid grid-cols-3">
    <div class="col-span-1 m-10">
      <ul>
        <Diplome v-for="diplome in diplomes" :diplome="diplome" />
      </ul>
    </div>
    <ParcoursPro class="col-span-2 m-10" />
  </div>
</template>

<script setup lang="ts">
import ParcoursPro from "../components/parcours/ParcoursPro.vue";
import Diplome from "../components/parcours/Diplome.vue";
import { diplomes } from "../data/diplomes";
</script>
