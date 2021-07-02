import React, { useState } from "react"
import styled, { css } from "styled-components"

import { device } from "../../../components/layout/responsive/device"

import { Trans } from "gatsby-plugin-react-i18next"
import Title from "../../layout/common/Title"

//src
import temp from "../../../images/FloatLogo.svg"
import temp_logo from "../../../images/services/logo_transparent.svg"

function Service() {
  const default_data = [
    {
      id: 1,
      img: temp,
      title: "Service Name 1",
      visible: true,
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: temp,
      title: "Service Name 2",
      visible: true,
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      img: temp,
      title: "Service Name 3",
      visible: true,
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      img: temp,
      title: "Service Name 4",
      visible: true,
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      img: temp,
      title: "Service Name 5",
      visible: true,
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      img: temp,
      title: "Service Name",
      visible: true,
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]
  const [services, setService] = useState([...default_data])

  function changeVisibility(id) {
    const service_index = services.findIndex(e => {
      return e.id === id
    })
    const temp_services = [...services]
    temp_services[service_index] = {
      ...temp_services[service_index], // establecemos todo el valor del objeto
      visible: !temp_services[service_index]?.visible, //Luego
    }
    setService(temp_services)
  }

  return (
    <Section id="services">
      <Title center>
        <Trans>NUESTROS SERVICIOS</Trans>
      </Title>
      <Content>
        {services.map(({ id, img, title, des, visible }) => {
          return (
            <ServiceContainer
              key={id}
              onClick={() => {
                changeVisibility(id)
              }}
            >
              <ServiceSecondframe visible={visible} background={temp_logo}>
                <ServiceDesc visible={visible}>{des}</ServiceDesc>
                <ServiceTitle>{title}</ServiceTitle>
              </ServiceSecondframe>
              <ServiceMainframe visible={visible}>
                <ServiceImg
                  src={img}
                  visible={visible}
                  alt={title}
                ></ServiceImg>
                <ServiceTitle centered>{title}</ServiceTitle>
              </ServiceMainframe>
            </ServiceContainer>
          )
        })}
      </Content>
    </Section>
  )
}

export default Service
const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;
  justify-content: center;

  padding: 0.5em 0;
  margin-top: 15vh;
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5em;
  background-color: #0c2461;

  color: white;

  width: 100%;
  height: 70vh;

  position: relative;
  @media ${device.tablet} {
    width: 100%;
    height: auto;
  }
`

const ServiceContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  background-color: #0c2461;
  width: 33.3%;
  height: 50%;

  border-bottom: 1px solid #fff;

  &:not(:first-child, :nth-child(4)) {
    border-left: 1px solid #fff;
  }

  @media ${device.tablet} {
    width: 100%;
    height: 50vh;

    &:not(:first-child, :nth-child(4)) {
      border-left: 0;
    }
  }
`

const Visible = css`
  height: 100%;
  visibility: visible;
  transition: all 200ms ease-out;
`
const NotVisible = css`
  height: 0;
  visibility: hidden;
  transition: all 200ms ease-out;
`

const ServiceMainframe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  ${props => (props.visible ? Visible : NotVisible)};

  background-color: #0c2461;
`

const alternativeTitle = css`
  margin-right: 0.5em;
  text-align: end;
`

const defaultTitle = css`
  text-align: center;
  margin-top: 1em;
`

const ServiceTitle = styled.h3`
  font-family: "Crimson Text";
  font-size: clamp(12px, 1.5em, 30px);
  ${props => (props.centered ? defaultTitle : alternativeTitle)};
  @media ${device.tablet} {
    font-size: clamp(12px, 3em, 30px);
  }
`

const ImgVisible = css`
  visibility: visible;
  transition: all 150ms ease-out;
`

const ImgNotVisible = css`
  visibility: hidden;
  transition: all 150ms ease-out;
`

const ServiceImg = styled.img`
  width: min(5em, 95px);
  ${props => (props.visible ? ImgVisible : ImgNotVisible)};
`

const ServiceSecondframe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #1e3799;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: min(5em, 95px);

  ${props => (props.visible ? NotVisible : Visible)};
`

const DescVisible = css`
  transform: scaleY(0);
  transition: all 150ms ease-in-out;
`
const DescNotVisible = css`
  transform: scaleY(1);
  transition: all 150ms ease-out;
`

const ServiceDesc = styled.p`
  font-family: "Lato";
  font-size: clamp(12px, 2em, 18px);
  margin: 1em 1.5em;
  ${props => (props.visible ? DescVisible : DescNotVisible)};
`

// const appearing = keyframes`
// from{
//
// }
// to{
//   background-image: url(${props => props.background});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: min(5em, 95px);
// }
// `
