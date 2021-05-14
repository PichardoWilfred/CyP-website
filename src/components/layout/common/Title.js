import React, { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import useIsInViewport from "use-is-in-viewport"

import { device } from "../../../components/layout/responsive/device"

function Title(props) {
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
    <TitleBox>
      <TitleSpace ref={reference} viewport={wasInViewportAtleastOnce}>
        <Space ref={reference} viewport={wasInViewportAtleastOnce}>
          <MainTitle>{props.children}</MainTitle>
        </Space>
      </TitleSpace>
    </TitleBox>
  )
}

const from_left_30 = keyframes`
  from {
    width:0;
  }

  to {
      width:40%;
  }
`
const from_left_73 = keyframes`
  from {
    width:0;
  }

  to {
      width:100%;
  }
`

const from_center_80 = keyframes`
  from {
    transform:scaleX(0);
  }

  to {
    transform:scaleX(1);  
}
`
const from_center_100 = keyframes`
  from {
    transform:scaleX(0);
  }

  to {
    transform:scaleX(1);  
}
`

const animation_short = css`
  animation: ${from_left_30} 0.7s ease-out 1;
  @media ${device.tablet} {
    animation: ${from_center_80} 0.7s ease-out 1;
  }
`
const animation_long = css`
  animation: ${from_left_73} 0.6s ease-out 1;
  @media ${device.tablet} {
    animation: ${from_center_100} 0.3s ease-out 1;
  }
`

const TitleBox = styled.div`
  display: flex;

  align-items: flex-start;
  @media ${device.tablet} {
    display: flex;
    flex-wrap: nowrap;
    align-self: center;
  }
`

const TitleSpace = styled.div`
  margin-top: 2.3em;

  &:after {
    content: "";
    margin-top: 4px;
    display: block;
    width: 40%;
    height: 4px;
    background-color: #3867d6;

    ${props => (props.viewport ? animation_short : "")};
  }
  @media ${device.tablet} {
    &:after {
      margin: 5px 10%;
      width: 80%;
      height: 2px;
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

    ${props => (props.viewport ? animation_long : "")};
  }
  @media ${device.tablet} {
    &:after {
      width: 100%;
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
