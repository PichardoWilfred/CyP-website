import React from "react"
import styled, { keyframes } from "styled-components"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"
import { Link as NavLink } from "react-scroll"
import ReactFlagsSelect from "react-flags-select"

import Logo from "../../layout/common/Logo"

import { device } from "../../layout/responsive/device"
import Info from "../../layout/common/Info"

export default function Deep() {
  const { t, changeLanguage } = useI18next()
  function changelng(code) {
    if (code === "US") {
      changeLanguage("en")
    } else {
      changeLanguage("es")
    }
  }

  return (
    <DeepStripe>
      <LogoLocation>
        <Logo></Logo>
        <LanguageListD>
          <Select
            className="flags-select"
            countries={["US", "ES"]}
            customLabels={{
              US: "English",
              ES: "Español",
            }}
            placeholder={t("Seleccionar Idioma")}
            selectedSize={16}
            optionSize={16}
            onSelect={code => changelng(code)}
          />
        </LanguageListD>
      </LogoLocation>
      <Nav>
        <Nlinks>
          <CornerLink to="services" spy smooth duration={500}>
            <Trans>SERVICIOS</Trans>
          </CornerLink>
          <MiddleLink to="about" spy smooth duration={500}>
            <Trans>NOSOTROS</Trans>
          </MiddleLink>
          <CornerLink to="contact" spy smooth duration={500}>
            <Trans>CONTACTO</Trans>
          </CornerLink>
        </Nlinks>
      </Nav>
      <Info mobile_visible={false}></Info>
    </DeepStripe>
  )
}
const DeepStripe = styled.div`
  display: flex;
  width: 100%;
  height: 25vh;

  background-color: rgba(56, 103, 214, 0.65);
  justify-content: space-around;

  @media ${device.tablet} {
    height: 100%;
    flex-direction: row;
    width: 100vw;
    flex-wrap: wrap;
  }
`

const fade_in = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;  
  }
`

const LogoLocation = styled.div`
  width: 25%;
  height: 100%;
  animation: ${fade_in} 1s ease-out 1;
  @media ${device.tablet} {
    width: 100%;
  }
`

const LanguageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;
  color: white;

  font-size: 16px;
  margin-top: 2px;

  a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;

    &:nth-child(2) {
      border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  li {
    font-family: "Libre Baskerville";
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`

const LanguageListD = styled.div`
  display: flex;
  justify-content: center;

  font-size: 16px;
  margin-top: 2px;

  @media ${device.tablet} {
    font-size: 20px;
  }
`

const Select = styled(ReactFlagsSelect)`
  button {
    color: white;
    border-color: white;
    &:after {
      border-top: 5px solid #fff;
    }
    &[aria-expanded="true"]:after {
      border-bottom: 5px solid #fff;
    }
    span {
      font-family: "Libre Baskerville";
    }
  }
`

// ---------------------------------------------

const Nav = styled.nav`
  display: flex;
  font-size: 0.45em;
  animation: ${fade_in} 1s ease-out 1;
  @media ${device.tablet} {
    font-size: 1.5em;
    width: 100%;
    padding-top: 1em;
  }
`

const Nlinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;
  }
`

const MiddleLink = styled(NavLink)`
  color: #ffffff;
  padding: 1.1em 1.9em;
  border-left: solid 1.5px #ffffff;
  border-right: solid 1.5px #ffffff;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: all 0.2s;
  }

  @media ${device.tablet} {
    border-left: 0;
    border-right: 0;
    border-bottom: solid 1px #ffffff;
    border-top: solid 1px #ffffff;
    width: 100%;
    text-align: center;
    padding: 1.4em;
  }
`

const CornerLink = styled(NavLink)`
  color: #ffffff;
  padding: 1.1em 1.9em;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
  @media ${device.tablet} {
    padding: 1.4em;
    width: 100%;
    text-align: center;
  }
`
