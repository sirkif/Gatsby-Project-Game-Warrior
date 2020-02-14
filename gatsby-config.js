module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: false,
    //     develop: false,
    //     tailwind: true,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
  ],
}
