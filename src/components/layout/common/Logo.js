import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

import Image from "../../../images/logo.svg"
import { device } from "../../layout/responsive/device"

const Logo = ({ margint, size, footer }) => {
  return (
    <LogoDiv>
      <Img src={Image} alt="Carela Y Pichardo" h={size} />
      <Title margint={margint} size={footer}>
        <Trans>Abogados</Trans>
      </Title>
    </LogoDiv>
  )
}

const LogoDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 0 10px;
  margin-top: 15px;
  @media ${device.tablet} {
    width: 100%;
  }
`
const Title = styled.p`
  font-family: "Charm", "Playfair Display", "Crimson Text";
  font-weight: 100;
  font-size: ${props =>
    props.size ? "clamp(30px, 3rem, 50px)" : "clamp(20px, 1.5rem, 50px)"};
  text-align: center;
  color: rgba(255, 255, 255, 0.6);

  margin-top: -12px;

  @media ${device.tablet} {
    padding-top: 10px;
    margin-top: -15px;
  }
`

const Img = styled.img`
  height: ${props => props.h || "120px"};
  width: 100%;
`
export default Logo
