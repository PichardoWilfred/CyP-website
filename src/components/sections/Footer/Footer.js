import React from "react"
import styled from "styled-components"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"
import { Link as NavLink } from "react-scroll"

import phone from "../../../images/portrait/phone__icon.svg"
import mail from "../../../images/portrait/mail__icon.svg"
import background from "../../../images/footer/footer_logo.svg"

import { device } from "../../../components/layout/responsive/device"

import Logo from "../../layout/common/Logo"

const Footer = () => {
  const { languages, originalPath } = useI18next()

  const page_sections = [
    {
      section: "contact",
      title: "CONTACTO",
    },
    {
      section: "services",
      title: "SERVICIOS",
    },
    {
      section: "about",
      title: "NOSOTROS",
    },
    {
      section: "meet",
      title: "REPRESENTANTES",
    },
  ]

  return (
    <FooterS>
      <Content>
        <LeftSide>
          <List>
            {page_sections.map(({ section, title }, index) => {
              return (
                <Item to={section} spy smooth duration={500} key={index}>
                  <PageSection>
                    <Trans>{title}</Trans>
                  </PageSection>
                </Item>
              )
            })}
          </List>
          <FooterInfo>
            <IconText>
              <Icon src={phone} size={"18px"} alt="phone" />
              <Text>(809) 426-0656</Text>
            </IconText>
            <IconText>
              <Icon src={mail} size={"21px"} alt="mail" />
              <Text>info@Carela&Pichardo.com</Text>
            </IconText>
          </FooterInfo>
        </LeftSide>
        <RightSide>
          <Direction>
            <Direction1>
              <Trans>Entrada Coconut Palms, Urb. Vista del Caribe,</Trans>
            </Direction1>
            <Direction2>
              Cabarete, Puerto Plata, <Trans>Rep. Dom.</Trans>
            </Direction2>
          </Direction>
          <FooterLocation>
            <Logo margint={"-30px"} size={"100%"}></Logo>
          </FooterLocation>
        </RightSide>
        {/*  */}
      </Content>
      <BottomSide>
        <Copyright>
          <CopyrightText>
            <Trans>Todos los derechos reservados © 2021</Trans>
          </CopyrightText>
        </Copyright>
        <Languages>
          <LanguageList>
            {languages.map((lng, index) => (
              <Link to={originalPath} language={lng} key={index}>
                <Trans>{lng}</Trans>
              </Link>
            ))}
          </LanguageList>
        </Languages>
        <Blank></Blank>
      </BottomSide>
    </FooterS>
  )
}

export default Footer

const FooterS = styled.footer``

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;

  padding: 1.5em 1.2em;
  /* margin-top: 30em; */

  background-color: #0c2461;
  color: white;

  font-size: min(2em, 25px);

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 18em;
  background-position: center top 11em;
  background-attachment: fixed;

  @media ${device.tablet} {
    padding: 0;
    font-size: min(1.5em, 25px);
    //Mobile Image
    background-position: center;
  }
`

// Left side
const LeftSide = styled.div`
  justify-self: flex-start;

  @media ${device.tablet} {
    width: 100%;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

const PageSection = styled.li``

const Item = styled(NavLink)`
  cursor: pointer;

  text-decoration: none;
  padding: 0.5em 0;

  @media ${device.tablet} {
    text-align: center;
    padding: 1.2em 0;
    border-bottom: 1.5px solid white;
  }
`

const FooterInfo = styled.div`
  margin-top: 30px;

  @media ${device.tablet} {
    margin-top: 1.5em;
  }
`
const IconText = styled.div`
  display: flex;
  margin: 5px 0;

  @media ${device.tablet} {
    justify-content: center;
  }
`
const Icon = styled.img`
  width: ${props => props.size};
`
const Text = styled.p`
  margin-left: 18px;
  font-weight: 100;
  /* font-family: "Lato"; */
`
// Right side
const RightSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  @media ${device.tablet} {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
  }
`
const Direction = styled.div`
  margin: 0.5em;
  text-align: end;
  @media ${device.tablet} {
    margin-top: 2em;
    text-align: center;
  }
`
const Direction1 = styled.p`
  font-weight: 700;
`
const Direction2 = styled.p`
  font-weight: 200;
`

const FooterLocation = styled.div`
  width: 15em;
  @media ${device.tablet} {
    margin-top: 30px;
    width: 12em;
  }
`
//

// Bottom side
const BottomSide = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1em 1.5em;
  background-color: #0c2461;

  width: 100%;

  border-top: 1px solid white;
  @media ${device.tablet} {
    flex-wrap: nowrap;
    width: 100%;
    flex-direction: column-reverse;
  }
`

//First Div
const Copyright = styled.div`
  width: 25%;
  @media ${device.tablet} {
    width: 100%;
  }
`
const CopyrightText = styled.p`
  font-weight: 300;
  font-family: "Libre Baskerville";
  color: rgba(255, 255, 255, 0.4);

  @media ${device.tablet} {
    text-align: center;
  }
`
//Second Div
const Languages = styled.div`
  color: rgba(255, 255, 255, 0.4);

  width: 25%;
  @media ${device.tablet} {
    margin-bottom: 15px;
    width: 100%;
  }
`

const LanguageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  color: white;

  a {
    color: white;
    text-decoration: none;
    padding: 10px 10px;

    &:nth-child(2) {
      border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  li {
    font-family: "Libre Baskerville";
  }
`

const Blank = styled.div`
  width: 25%;
  @media ${device.tablet} {
    display: none;
  }
`
