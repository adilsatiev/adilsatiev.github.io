module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-mixins'),
          require('precss'),
          require('autoprefixer'),
        ],
      },
    },
  ],
}
