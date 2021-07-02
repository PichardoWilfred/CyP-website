import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

import { device } from "../../../components/layout/responsive/device"
import Title from "../../layout/common/Title"

//Img source
import image_src from "../../../images/lawyer.jpg"
import phone_src from "../../../images/portrait/phone__icon.svg"
import wsp_img from "../../../images/representatives/wsp.svg"
import mail_img from "../../../images/representatives/mail.svg"

export default function Meet() {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  const members = [
    {
      img: image_src,
      name: "Lorenzo Pichardo",
      desc: desc,
      wsp: "(809) 543-6038",
      mail: "lorenzo@gmail.com",
    },
    {
      img: image_src,
      name: "Esteban Carela",
      desc: desc,
      wsp: "(829) 593-6145",
      mail: "carela@gmail.com",
    },
    {
      img: image_src,
      name: "Edwin Carela",
      desc: desc,
      wsp: "(849) 423-4876",
      mail: "edwin@gmail.com",
    },
  ]

  return (
    <Section id="meet">
      <Title center limit>
        <Trans>NUESTROS REPRESENTANTES</Trans>
      </Title>
      <Content>
        {members.map(({ img, name, desc, wsp, mail }, index) => {
          return (
            <MemberContainer key={index}>
              <Avatar src={img}></Avatar>
              <Member>
                <TitleMember>{name}</TitleMember>
                <DescriptionMember>{desc}</DescriptionMember>
                <MemberBottom>
                  <InfoBottom>
                    <ContainerInfo>
                      <ContainerIcon src={wsp_img} alt={wsp}></ContainerIcon>
                      <ContainerDesc>{wsp}</ContainerDesc>
                    </ContainerInfo>
                    <ContainerInfo>
                      <ContainerIcon src={mail_img} alt={mail}></ContainerIcon>
                      <ContainerDesc>{mail}</ContainerDesc>
                    </ContainerInfo>
                  </InfoBottom>
                  <CallBottom>
                    <CallIcon src={phone_src} alt={wsp}></CallIcon>
                  </CallBottom>
                </MemberBottom>
              </Member>
            </MemberContainer>
          )
        })}
      </Content>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 4em;
  margin-top: 15vh;

  width: 100%;

  @media ${device.tablet} {
    padding: 0;
    padding-top: 2em;
  }
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 0.5em;

  width: 100%;
`

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0.2em 0.3em;

  @media ${device.tablet} {
    width: 100%;
    margin: 0;
    &:not(:first-child) {
      margin-top: 3em;
    }
  }
`

const Avatar = styled.img`
  align-self: center;
  margin-bottom: -2em;
  border: 3px solid #fff;
  width: 5em;
  justify-self: center;
  z-index: 1;

  @media ${device.tablet} {
    width: 100%;

    margin: 0;
    border: 0;
    z-index: 0;
  }
`

const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color: #0c2461;

  width: 10em;
  height: 13em;
  @media ${device.tablet} {
    width: 100%;
    height: auto;
  }
`

const TitleMember = styled.h3`
  text-align: center;
  margin: 0 2em;
  margin-top: 30%;

  color: #fff;
  font-size: 30px;
  @media ${device.tablet} {
    margin-top: 20px;
  }
`

const DescriptionMember = styled.p`
  margin: 0 2em;
  margin-top: 0.5em;
  color: #fff;

  font-family: "Lato";
  font-size: 18px;
  text-align: justify;
`

//Bottom part

const MemberBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;

  margin-top: auto;

  width: 100%;
  height: 17%;

  background-color: #1e3799;

  @media ${device.tablet} {
    height: 7em;
    margin-top: 3em;
  }
`

const InfoBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  width: 80%;
  height: 100%;
`

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  height: 50%;

  &:nth-child(2) {
    border-top: 1px solid #3867d6;
  }
`

const ContainerIcon = styled.img`
  height: 70%;
  margin: auto 12px;

  width: 22px;
`
const ContainerDesc = styled.p`
  margin: auto 0;

  width: 80%;

  font-size: 16px;
  font-family: "Lato";

  color: #87abff;
`

//Calling Button
const CallBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  background-color: #3867d6;

  width: 20%;
  height: 100%;
`
const CallIcon = styled.img`
  width: 30px;
  height: 2em;
`
