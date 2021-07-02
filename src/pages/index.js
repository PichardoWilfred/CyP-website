import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

//Page Sections
import Portrait from "../components/sections/Portrait/Portrait"
import Contact from "../components/sections/Contact/Contact"
import Services from "../components/sections/Services/Service"
import About from "../components/sections/About/About"
import Footer from "../components/sections/Footer/Footer"
import Meet from "../components/sections/Meet Us/Meet"

//Element
import Floating from "../components/layout/common/Floating"

function IndexPage() {
  const { t } = useI18next()
  return (
    <Layout>
      <Seo title={t("title")} description={t("desc")} />
      <Portrait />
      <Floating />
      <Contact />
      <Services />
      <About />
      <Meet />
      <Footer />
    </Layout>
  )
}
export default IndexPage
export const query = graphql`
  query($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["form", "navigation", "white", "seo"] }
        language: { eq: $language }
      }
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
