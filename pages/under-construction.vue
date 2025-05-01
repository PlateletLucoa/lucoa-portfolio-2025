<script setup lang="ts">
import type { ContainerEvents } from 'vue3-pixi';

function onContainerAddedToStage(el: ContainerEvents['added'][0]) {
  el.position.set(el.width / 2, el.height / 1.455);
  el.pivot.set(el.width / 2, el.height / 1.455);
}
</script>

<template>
  <Application
    :width="2710"
    :height="1288"
    :background-alpha="0"
  >
    <Container @added="onContainerAddedToStage">
      <Loader
        :resources="[
          ['room', '/zenless-title-screen-centered_optimized.png'],
          ['display', '/zenless-tv-display.png'],
        ]"
      >
        <Sprite
          texture="room"
        />
        <Sprite
          texture="display"
          :width="1046"
          :height="767"
          :alpha="1"
          :position-x="(2710 / 2) - (1046 / 2)"
          :position-y="(1288 / 1.455) - (767 / 2)"
        />
      </Loader>
    </Container>
  </Application>
</template>

<style scoped>

</style>
