<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  delimiter: {
    type: String,
    default: ' ',
  },
});

const subheadingWords = computed(() => props.text ? props.text.split(props.delimiter) : []);
</script>

<template>
  <div class="under-construction__subheading">
    <div
      v-for="word in subheadingWords"
      :key="word"
      class="under-construction__subheading-word"
    >
      {{ word }}
    </div>
  </div>
</template>

<style scoped>

</style>
