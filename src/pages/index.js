import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { graphql } from "gatsby"

//Page Sections
import Portrait from "../components/sections/Portrait/Portrait"
import Contact from "../components/sections/Contact/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Portrait />
      <Contact />
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
