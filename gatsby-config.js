module.exports = {
  siteMetadata: {
    title: 'Hey! My name is Adil and',
    author: 'Adil'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
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
    'gatsby-transformer-remark'
  ],
}
