import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

import { device } from "../../../components/layout/responsive/device"
import Title from "../../layout/common/Title"

import BackgroundSection from "../../layout/common/bg_img"
import { graphql, useStaticQuery } from "gatsby"

export default function Contact() {
  const data = useStaticQuery(
    graphql`
      {
        lawyer: file(relativePath: { eq: "lawyer.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const lawyer = data.lawyer.childImageSharp.fluid

  return (
    <Section id="about">
      <Title center>
        <Trans>SOBRE NOSOTROS</Trans>
      </Title>
      <Content>
        <LeftDeep>
          <BackgroundSection img={lawyer} width={"100%"}>
            <ImageBg></ImageBg>
          </BackgroundSection>
        </LeftDeep>
        <RightDeep>
          <Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Text>
        </RightDeep>
      </Content>
    </Section>
  )
}
const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;
  justify-content: center;

  padding: 0.5em 0;
  margin-top: 15vh;

  @media ${device.tablet} {
    padding: 0;
    padding-top: 2em;
    height: 100%;
  }
`

const Content = styled.div`
  display: flex;
  margin-top: 0.5em;

  width: 100%;
  height: 70vh;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    height: 40rem;
  }
`

const LeftDeep = styled.div`
  width: 40%;
  height: 100%;
  @media ${device.tablet} {
    width: 100%;
  }
`

// ImageSection inside the Background image
const ImageBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(56, 103, 214, 0.65);
  padding: 0.5em;
`

// Text Section
const RightDeep = styled.div`
  display: flex;
  align-items: center;
  background-color: #0c2461;

  width: 60%;

  padding: 1.2em;

  @media ${device.tablet} {
    height: 100vh;
    width: 100%;
  }
`

const Text = styled.p`
  color: white;
  font-size: clamp(20px, 1em, 28px);
  text-align: end;
  align-self: center;
  @media ${device.tablet} {
    text-align: justify;
  }
`
