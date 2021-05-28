import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

const Example = () => {
  return (
    <Section>
      <h3>Buenas tardes caballeros</h3>
      <h1>
        <Trans>saludos</Trans>
      </h1>
      <p>
        <Trans>Porfavor expliqueme la problemática?</Trans>
      </p>
      <i>
        <Trans>Puede ser el ser apodado tras una cifra?</Trans>
      </i>
      <p>
        <Trans>9x9?</Trans>
      </p>
      <p>
        <Trans>entonces, así mismo</Trans>
      </p>
      <strong>
        <Trans>100 - 1?</Trans>
      </strong>
    </Section>
  )
}

const size = "2em"

const Section = styled.section``

export default Example
