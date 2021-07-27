module.exports = {
  flags: {
    THE_FLAG: false
  },

  siteMetadata: {
    title: 'ADIL SATIEV',
  },
  
  plugins: [
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-react-helmet',
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
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 950,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
