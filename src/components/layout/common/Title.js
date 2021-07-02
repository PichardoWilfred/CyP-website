import React, { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import useIsInViewport from "use-is-in-viewport"

import { device } from "../../../components/layout/responsive/device"

function Title({ center, limit, children }) {
  const [isInViewport, reference] = useIsInViewport({ threshold: 50 })
  const [wasInViewportAtleastOnce, setWasInViewportAtleastOnce] = useState(
    isInViewport
  )
  useEffect(() => {
    setWasInViewportAtleastOnce(prev => {
      // this will clamp it to the first true
      // received from useIsInViewport
      if (!prev) {
        return isInViewport
      }
      return prev
    })
  }, [isInViewport]) //

  return (
    <TitleBox center={center}>
      <TitleSpace
        ref={reference}
        viewport={wasInViewportAtleastOnce}
        center={center}
      >
        <Space
          ref={reference}
          viewport={wasInViewportAtleastOnce}
          center={center}
          limit={limit}
        >
          <MainTitle>{children}</MainTitle>
        </Space>
      </TitleSpace>
    </TitleBox>
  )
}

//Mobile use animations
const fromLeft_30 = keyframes`
  from {
    width:0;
  }

  to {
      width:40%;
  }
`
const fromLeft_73 = keyframes`
  from {
    width:0;
  }

  to {
      width:100%;
  }
`

//Mobile use animations
const fromCenter_80 = keyframes`
  from {
    transform:scaleX(0);
  }

  to {
    transform:scaleX(1);  
}
`
const fromCenter_100 = keyframes`
  from {
    transform:scaleX(0);
  }

  to {
    transform:scaleX(1);  
}
`

//Left Align animation
const LeftAlign_cyan = css`
  animation: ${fromLeft_30} 0.7s ease-out 1;

  @media ${device.tablet} {
    animation: ${fromCenter_80} 0.7s ease-out 1;
  }
`

const LeftAlign_deep = css`
  animation: ${fromLeft_73} 0.6s ease-out 1;
  @media ${device.tablet} {
    animation: ${fromCenter_100} 0.3s ease-out 1;
  }
`

//Center Align animation
const fromCenter_deep = css`
  animation: ${fromCenter_100} 0.5s ease-out 1;
`
const fromCenter_cyan = css`
  animation: ${fromCenter_80} 0.7s ease-out 1;
`

//Components
const TitleBox = styled.div`
  display: flex;
  @media ${device.tablet} {
    flex-wrap: nowrap;
    align-self: center;
  }
`

//Styles for centering Cyan stripe
const center_cyan = css`
  width: 80%;
  margin: 5px 10%;
`

const TitleSpace = styled.div`
  &:after {
    content: "";
    margin-top: 4px;
    display: block;
    width: 40%;

    height: 4px;
    background-color: #3867d6;

    //Left animation & position rendering
    ${props => props.viewport && LeftAlign_cyan}

    //But if the conditions are  met we will change the animation property (CYAN)

    //Center animation & position rendering
    ${props => props.viewport & props.center && center_cyan}
    ${props => props.viewport & props.center && fromCenter_cyan}
  }

  @media ${device.tablet} {
    &:after {
      height: 2px;
      ${center_cyan}
    }
    margin-top: 0;
  }
`

const Space = styled.div`
  &:after {
    content: "";
    margin-top: -10px;
    display: block;
    width: 100%;
    height: 4px;
    background-color: #1e3799;

    //Left animation & position rendering
    ${props => props.viewport && LeftAlign_deep}

    //But if the conditions are  met we will change the animation property (DEEP)

    //Center animation & position rendering
    ${props => props.viewport & props.center && fromCenter_deep}
  }
  @media ${device.tablet} {
    &:after {
      margin: 0 auto;
      width: ${props => props.limit && "90%"};
      /* width: 90%; */
      height: 2px;
    }
  }
`

const MainTitle = styled.h1`
  font-family: "Crimson Text";
  font-size: min(2em, 3.5rem);
  color: #0c2461; //font color
  //when loading
  @media ${device.tablet} {
    text-align: center;
  }
`

export default Title
