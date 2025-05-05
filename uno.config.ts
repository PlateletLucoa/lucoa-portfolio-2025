import presetWind4 from '@unocss/preset-wind4';
import { presetAttributify, presetWebFonts, presetIcons, presetTypography, defineConfig } from 'unocss';
import axios from 'axios';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWind4(),
    presetTypography(),
    presetWebFonts({
      themeKey: 'font',
      customFetch: (url: string) => axios.get(url).then(it => it.data),
      provider: 'google',
      fonts: {
        sans: 'Cabinet Grotesk',
        gambarino: 'Gambarino',
        anton: [
          {
            name: 'Anton',
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(icon => icon.default),
      },
    }),
  ],
});
