<script setup lang="ts">
import type { ContainerEvents } from 'vue3-pixi';

const breakpoints = useBreakpoints({
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536,
}, { ssrWidth: 640 });

const isMobileBreakpoint = breakpoints.smallerOrEqual('sm');

const roomWidth = 2710;
const roomHeight = 1288;
const displayWidth = 1046;
const displayHeight = 767;

function onContainerAddedToStage(el: ContainerEvents['added'][0]) {
  el.position.set(el.width / 2, el.height / 1.455);
  el.pivot.set(el.width / 2, el.height / 1.455);
}
</script>

<template>
  <div class="relative overflow-hidden">
    <UnderConstructionHeading
      class="absolute top-0 z-1"
      text="Under Construction"
      px="4"
      pt="12 sm:24"
    />
    <div
      class="pixi-app-wrapper h-screen w-screen"
      :class="{ 'pixi-app-wrapper--mobile': isMobileBreakpoint }"
    >
      <Application
        :width="roomWidth"
        :height="roomHeight"
        :background-alpha="0"
      >
        <Container
          @added="onContainerAddedToStage"
        >
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
              :width="displayWidth"
              :height="displayHeight"
              :alpha=".3"
              :position-x="(roomWidth / 2) - (displayWidth / 2)"
              :position-y="(roomHeight / 1.455) - (displayHeight / 2)"
              :anchor-y=".325"
              :anchor-x="-.057"
              :scale=".85"
            />
          </Loader>
        </Container>
      </Application>
    </div>
  </div>
</template>

<style scoped>
.pixi-app-wrapper canvas {
  position: relative;
  width: 100% !important;
  height: 100% !important;
}
</style>
