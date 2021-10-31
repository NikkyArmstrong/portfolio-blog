/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Nikky Armstrong",
    description: "Software Engineer",
    author: "nikkyarmstrong",
    keywords: "C++, portfolio, blog, TDD",
  },
  plugins: [
      "gatsby-plugin-sass",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      "gatsby-plugin-react-helmet",
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "posts",
          path: `${__dirname}/src/posts`,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: `${__dirname}/src/images`,
        },
      },
    ],
}
