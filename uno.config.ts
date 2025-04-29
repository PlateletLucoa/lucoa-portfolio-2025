import presetWind4 from '@unocss/preset-wind4';
import { presetAttributify, presetWebFonts, presetIcons, presetTypography, defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWind4(),
    presetTypography(),
    presetWebFonts(),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(icon => icon.default),
      },
    }),
  ],
});
