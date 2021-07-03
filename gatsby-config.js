module.exports = {
  siteMetadata: {
    title: `Carela & Pichardo`,
    description: `Firma de Abogados.`,
    author: `@Null Systems`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/src/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`es`, `en`],
        defaultLanguage: `es`,
        redirect: true,

        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `C&P`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0C2461`,
        theme_color: `#1E3799`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "Crimson Text:200,300,400,500,600,700",
          "Playfair Display:200,300,400,500,600,700",
          "Lato:200,300,400,500,600,700",
          "Charm:200,300,400,500,600,700",
        ],
        display: "block",
      },
    },
  ],
}
