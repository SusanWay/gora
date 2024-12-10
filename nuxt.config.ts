// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo-loader',
    '@nuxtjs/google-fonts',
  ],
  plugins: [
    '~/plugins/pinia.ts',
    '~/plugins/maska.ts',
  ],
  svgoLoader: {
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              convertColors: {
                currentColor: true,
              },
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Gogh: [400, 800],
    },
  },
})
