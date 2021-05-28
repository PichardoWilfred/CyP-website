import React from "react"
import styled from "styled-components"
// import { Trans } from "gatsby-plugin-react-i18next"

import Deep from "./Deep"
import White from "./White"
import Cyan from "./Cyan"

import BackgroundSection from "../../layout/common/bg_img"
import { graphql, useStaticQuery } from "gatsby"

const Portrait = () => {
  const data = useStaticQuery(
    graphql`
      {
        bonk: file(relativePath: { eq: "bonk.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        books: file(relativePath: { eq: "biblioteca.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const bonk = data.bonk.childImageSharp.fluid
  const books = data.books.childImageSharp.fluid

  return (
    <Section>
      <BackgroundSection img={books} width={"100%"}>
        <Deep></Deep>
      </BackgroundSection>
      <White></White>
      <BackgroundSection img={bonk} width={"100%"}>
        <Cyan></Cyan>
      </BackgroundSection>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export default Portrait
