module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    extends: [
      '@nuxtjs/eslint-config-typescript',
      'prettier',
      'prettier/vue',
      // 'plugin:prettier/recommended', // ←削除
      'plugin:nuxt/recommended'
    ],
    plugins: [
      // 'prettier' // ←削除
    ]
}