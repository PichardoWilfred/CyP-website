import React from "react"
import styled from "styled-components"
import Info from "../../layout/common/Info"

import { device } from "../../layout/responsive/device"

export default function Cyan() {
  return (
    <CyanStripe>
      <Info mobile_visible={true}></Info>
    </CyanStripe>
  )
}
const CyanStripe = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8em;
  background-color: rgba(45, 152, 218, 0.5);

  @media ${device.tablet} {
    height: 100%;
  }
`
