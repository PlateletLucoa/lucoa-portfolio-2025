<script setup lang="ts">
// const zenlessTvCanvas = useTemplateRef('zenless-tv-canvas');
// const zenlessTvImg = useTemplateRef('zenless-tv-img');

onMounted(() => {
  // if (zenlessTvCanvas.value && zenlessTvImg.value) {
  //   const context = zenlessTvCanvas.value.getContext('2d');

  //   if (context) {
  //     context.drawImage(zenlessTvImg.value, 0, 0);
  //     context.beginPath();
  //     context.rect(188, 50, 200, 100);
  //     context.fillStyle = 'yellow';
  //     context.fill();
  //     context.lineWidth = 7;
  //     context.strokeStyle = 'black';
  //     context.stroke();
  //   }

  // context?.fillRect(45, 45, 100, 100);
  // }
});
</script>

<template>
  <!-- <div
    class="bg-black"
    h="screen"
    w="screen"
    overflow="hidden"
  >
    <div class="flex flex-1 items-center">
      <div class="under-construction__image-container">
        <img
          src="/zenless-title-screen-centered_optimized.png"
          alt="Vintage TV in cozy apartment"
        >
      </div>
    </div>
  </div> -->
  <!-- <div
    class="bg-black"
    h="screen"
    w="screen"
  >
    <div
      class="canvas-container"
      relative
      flex
      justify="center"
      items="end"
      overflow="hidden"
    >
      <canvas
        ref="zenless-tv-canvas"
        class="relative w-full"
        width="2710"
        height="1288"
      />
      <div style="display: none;">
        <img
          ref="zenless-tv-img"
          src="/zenless-title-screen-centered_optimized.png"
        >
      </div>
    </div>
  </div> -->
  <Application
    :width="2710"
    :height="1288"
    :background-alpha="0"
  >
    <Loader :resources="['/zenless-title-screen-centered_optimized.png']">
      <Sprite texture="/zenless-title-screen-centered_optimized.png" />
    </Loader>
  </Application>
</template>

<style scoped>

</style>
