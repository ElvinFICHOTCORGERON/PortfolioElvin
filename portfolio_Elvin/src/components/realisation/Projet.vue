<template>
  <div class="flex justify-center">
    <div class="card w-96 bg-secondary shadow-xl text-neutral-content m-8">
      <div class="card-body">
        <h2 class="card-title">
          {{ props.realisation.title }}
        </h2>
        <p>{{ props.realisation.description }}</p>

        <a
          class="btn btn-primary"
          v-if="props.realisation.link"
          :href="props.realisation.link"
          >Lien vers le projet</a
        >

        <div class="card-actions justify-end">
          <div
            class="badge badge-outline"
            v-for="tech in props.realisation.stack"
          >
            {{ tech }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Realisation } from "../../data/realisation";
interface Props {
  realisation: Realisation;
}
const props = defineProps<Props>();
</script>
