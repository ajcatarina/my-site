module.exports = {
  siteMetadata: {
    title: `AJ Catarina`,
    siteUrl: `https://ajcatarina.tk`,
    description: `AJ Catarina is a Web Designer and Developer mainly focused on JavaScript with React for frontend.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "portfolio-feed",
        accessToken: "MC5XMmZZZWlzQUFIWmFYb1Nz.D--_vSzvv73vv73vv70A77-977-9cgZ3bS7vv73vv71777-9ODpU77-9WW56Jh1a77-9Ge-_vVw",
        linkResolver: ({ node, key, value }) => doc = {

        },
        htmlSerializer: ({ node, key, value }) => (
          (type, element, content, children) => {

          }
        )

      }
    }
  ],
}
