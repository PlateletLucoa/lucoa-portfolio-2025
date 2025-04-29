// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@unocss/nuxt',
    'vue3-pixi-nuxt',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      isUnderConstruction: true,
    },
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: true,
      },
    },
  },
});
