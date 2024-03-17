<template>
  <h1 class="text-3xl font-bold text-primary p-4">Mon parcours</h1>
  <div class="block">
    <div>
      <p>
        Depuis mon plus jeune âge j'ai toujours été passionné par
        l'informatique. J'ai notamment commencé à découvrir ce monde en 2018
        quand j'ai fait mon stage d'observation de 3èmme chez l'entreprise
        Maincare à Dijon. J'ai poursuivi cette vocation en obtenant un bac
        général au lycée Louis Davier à Joigny avec les spécialités
        Mathématiques, Physique-Chimie et Sciences de l'ingénieur. J'ai ensuite
        intégré l'IUT Informatique de Dijon avec le parcours CDV afin de me
        spécialisé dans le domaine du développement
      </p>
      <br />
      <p>
        Actuellement en 3ème année je cherche à poursuire mes études avec un
        master en ingénierie logiciel
      </p>
    </div>

    <ul class="p-4">
      <Diplome v-for="diplome in diplomes" :diplome="diplome" />
    </ul>

    <ParcoursPro class="p-4" />
  </div>
</template>

<script setup lang="ts">
import ParcoursPro from "../components/parcours/ParcoursPro.vue";
import Diplome from "../components/parcours/Diplome.vue";
import { diplomes } from "../data/diplomes";
</script>
