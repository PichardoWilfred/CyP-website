import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { graphql } from "gatsby"

//Page Sections
import Portrait from "../components/sections/Portrait/Portrait"
import Contact from "../components/sections/Contact/Contact"
import About from "../components/sections/About/About"
import Footer from "../components/sections/Footer/Footer"

import Example from "../components/sections/Example"

const IndexPage = () => {
  return (
    <Layout>
      {/* <Example /> */}
      <SEO />
      <Portrait />
      <Contact />
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
