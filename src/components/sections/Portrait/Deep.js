import React from "react"
import styled from "styled-components"

import logo from "../../../images/logo.svg"

import { device } from "../../layout/responsive/device"
import Info from "../../layout/common/Info"

export default function Deep() {
  return (
    <DeepStripe>
      <Logo src={logo} alt="Carela Y Pichardo" />
      <Nav>
        <Nlinks>
          <CornerLink>SERVICIOS</CornerLink>
          <MiddleLink>NOSOTROS</MiddleLink>
          <CornerLink>CONTACTO</CornerLink>
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
const Logo = styled.img`
  width: 25%;
  padding: 8px 2px;
  @media ${device.tablet} {
    width: 85%;
    padding-top: 2em;
  }
`
// ---------------------------------------------

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
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
