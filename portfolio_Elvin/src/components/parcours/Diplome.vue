<template>
  <ul class="timeline timeline-vertical">
    <li>
      <div class="timeline-start">
        {{ props.diplome.annee.year().toString() }}
      </div>
      <div class="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-end timeline-box w-48">
        {{ props.diplome.titre }}
      </div>
      <hr />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Diplome } from "../../data/diplomes";

interface Props {
  diplome: Diplome;
}

const props = defineProps<Props>();
</script>
