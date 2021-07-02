import React from "react"
import styled, { keyframes } from "styled-components"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
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
    <DeepStripe>
      <LogoLocation>
        <Logo></Logo>
        <LanguageListD>
          <Select
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
        <PageSections>
          {page_sections.map(({ section, title }, index) => {
            return (
              <Link to={section} spy smooth duration={500} key={index}>
                <li>
                  <Trans>{title}</Trans>
                </li>
              </Link>
            )
          })}
        </PageSections>
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
  justify-content: space-between;

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

const PageSections = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;
  }
`

//Se coloca solamente enlaces o attachments porque luego el Link es un lio ponerlo en el <li>
const Link = styled(NavLink)`
  color: #ffffff;
  padding: 1.1em 1.5em;
  &:not(:first-child) {
    border-left: 1px solid #ffffff;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  @media ${device.tablet} {
    padding: 1.4em;
    width: 100%;
    text-align: center;
    &:not(:first-child) {
      border-left: 0;
      border-top: 1px solid #ffffff;
    }
  }
`
