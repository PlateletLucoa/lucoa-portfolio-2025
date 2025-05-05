<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'white',
  },
});

const headingLetters = computed(() => props.text ? [...props.text.toUpperCase()] : []);
</script>

<template>
  <div
    class="under-construction__heading"
    font="anton"
    text="transparent [12.140625vw]/[0.8em] sm:[13.140625vw]/[0.8em] shadow-[0_0_2.2px_#fff]"
    tracking="[0.015em]"
    flex
    w="full"
  >
    <div
      v-for="letter in headingLetters"
      :key="letter"
      class="under-construction__heading-letter-container"
      :class="[
        letter && letter !== ' ' ? 'min-w-0' : 'min-w-[1.5rem] sm:min-w-[3rem]',
      ]"
    >
      <span class="under-construction__heading-letter">
        {{ letter }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.under-construction__heading-letter {
  display: block;
}
</style>
