module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/Side-project-Store--frontend/'
      : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
}
