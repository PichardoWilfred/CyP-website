import React from "react"
import styled from "styled-components"

import BackgroundSection from "../../layout/common/bg_img"
import { graphql, useStaticQuery } from "gatsby"

export default function Deep_Image() {
  return (
    <Section>
      <Title center>SOBRE NOSOTROS</Title>
      <Image_Text>
        <BackgroundSection>
          <ImageBg></ImageBg>
        </BackgroundSection>
        <TextBg>
          <Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </TextBg>
      </Image_Text>
    </Section>
  )
}
