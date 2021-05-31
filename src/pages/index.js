import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

//Page Sections
import Portrait from "../components/sections/Portrait/Portrait"
import Contact from "../components/sections/Contact/Contact"
import Services from "../components/sections/Services/Service"
import About from "../components/sections/About/About"
import Footer from "../components/sections/Footer/Footer"

//Element
import Floating from "../components/layout/common/Floating"

function IndexPage() {
  const { t } = useI18next()
  return (
    <Layout>
      <SEO title={t("Inicio")} />
      <Portrait />
      <Floating />
      <Contact />
      <Services />
      <About />
      <Footer />
    </Layout>
  )
}
export default IndexPage
export const query = graphql`
  query($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
