import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

import Image from "../../../images/Recurso 42.svg"
import { device } from "../../layout/responsive/device"

const Logo = ({ margint }) => {
  return (
    <LogoDiv>
      <Img src={Image} alt="Carela Y Pichardo" />
      <Title margint={margint}>
        <Trans>Abogados</Trans>
      </Title>
    </LogoDiv>
  )
}

const LogoDiv = styled.div`
  width: 100%;
  padding: 0 2px;
  margin-top: 15px;
  @media ${device.tablet} {
    width: 100%;
  }
`
const Title = styled.p`
  font-family: "Monotype Corsiva";
  font-weight: 200;
  font-size: clamp(35px, 1.5rem, 200px);
  color: rgba(255, 255, 255, 0.6);

  margin-top: ${props => props.margint || "-40px"};
  text-align: center;
  @media ${device.tablet} {
    padding-top: 10px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 150px;
`
export default Logo
