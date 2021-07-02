import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

import Image from "../../../images/logo.svg"
import { device } from "../../layout/responsive/device"

const Logo = ({ margint, size }) => {
  return (
    <LogoDiv>
      <Img src={Image} alt="Carela Y Pichardo" h={size} />
      <Title margint={margint}>
        <Trans>Abogados</Trans>
      </Title>
    </LogoDiv>
  )
}

const LogoDiv = styled.div`
  width: 100%;
  padding: 0 10px;
  margin-top: 15px;
  @media ${device.tablet} {
    width: 100%;
  }
`
const Title = styled.p`
  font-family: "Monotype Corsiva";
  font-weight: 200;
  font-size: clamp(30px, 2rem, 50px);
  color: rgba(255, 255, 255, 0.6);

  margin-top: ${props => props.margint || "-35px"};
  text-align: center;
  @media ${device.tablet} {
    padding-top: 10px;
  }
`

const Img = styled.img`
  height: ${props => props.h || "140px"};
  width: 100%;
`
export default Logo
