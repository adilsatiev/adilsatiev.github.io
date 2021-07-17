module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-mixins'),
          require('precss'),
          require('autoprefixer'),
        ],
      },
    },
  ],
}
