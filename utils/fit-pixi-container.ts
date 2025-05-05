import type { ContainerEvents } from 'vue3-pixi';

export default function (center: boolean, stage: ContainerEvents['added'][0], screenWidth: number, screenHeight: number, virtualWidth: number, virtualHeight: number) {
  stage.scale.set(screenWidth / virtualWidth, screenHeight / virtualHeight);

  if (stage.scale.x < stage.scale.y) {
    stage.scale.set(stage.scale.x);
  }
  else {
    stage.scale.set(stage.scale.y);
  }

  const virtualWidthInScreenPixels = virtualWidth * stage.scale.x;
  const virtualHeightInScreenPixels = virtualHeight * stage.scale.y;
  const centerXInScreenPixels = screenWidth * 0.5;
  const centerYInScreenPixels = screenHeight * 0.5;

  if (center) {
    stage.position.set(centerXInScreenPixels, centerYInScreenPixels);
  }
  else {
    stage.position.set(centerXInScreenPixels - virtualWidthInScreenPixels * 0.5, centerYInScreenPixels - virtualHeightInScreenPixels * 0.5);
  }
}
