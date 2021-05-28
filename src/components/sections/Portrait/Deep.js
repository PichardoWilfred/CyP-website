import React from "react"
import styled from "styled-components"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"

import Logo from "../../layout/common/Logo"

import { device } from "../../layout/responsive/device"
import Info from "../../layout/common/Info"

export default function Deep() {
  const { languages, originalPath, t } = useI18next()

  return (
    <DeepStripe>
      <LogoLocation>
        <Logo></Logo>
        <LanguageList>
          {languages.map(lng => (
            <Link to={originalPath} language={lng}>
              <Trans>{lng}</Trans>
            </Link>
          ))}
        </LanguageList>
      </LogoLocation>
      <Nav>
        <Nlinks>
          <CornerLink>
            <Trans>SERVICIOS</Trans>
          </CornerLink>
          <MiddleLink>
            <Trans>NOSOTROS</Trans>
          </MiddleLink>
          <CornerLink>
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
const LogoLocation = styled.div`
  width: 25%;
  height: 100%;
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

  font-size: 1rem;

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

// ---------------------------------------------

const Nav = styled.nav`
  display: flex;
  font-size: 0.45em;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
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

const MiddleLink = styled.li`
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

const CornerLink = styled.li`
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
