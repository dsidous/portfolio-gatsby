module.exports = {
  siteMetadata: {
    title: `Tamas Jonas :: Front-end Developer`,
    description: `Freelance Web Development Portfolio of Tamas Jonas, offering valid and semantic HTML5, CSS3, javascript, React, Redux coding.`,
    author: `Tamas Jonas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/components/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:300,400,500']
        }
      }
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-4069714-6`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'tamasjonas.com'
      },
    },
  ],
}
