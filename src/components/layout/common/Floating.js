import React from "react"
import styled from "styled-components"

import { device } from "../../../components/layout/responsive/device"
import src from "../../../images/FloatLogo.svg"
import { animateScroll as scroll } from "react-scroll"

function Floating() {
  return (
    <Button
      onClick={() => {
        scroll.scrollToTop()
      }}
    >
      <Logo src={src} alt="logoFloating" />
    </Button>
  )
}

const Button = styled.div`
  position: fixed;
  top: auto;
  bottom: 40px;
  right: 40px;

  z-index: 2;

  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-color: #0c2461;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  @media ${device.tablet} {
    width: 80px;
    height: 80px;

    bottom: 15px;
    right: 15px;
  }
`
const Logo = styled.img`
  padding: 0 5px;
  padding-top: 10px;

  height: 90px;
  width: 100%;

  @media ${device.tablet} {
    padding: 5px 2px;
    padding-top: 8px;

    width: 80px;
    height: 75px;
  }
`

export default Floating
