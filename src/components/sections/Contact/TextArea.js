import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import styled from "styled-components"

import { device } from "../../../components/layout/responsive/device"

export default function TextArea({ placeholder, register, err }) {
  return (
    <TextAreaBox>
      <NTextArea placeholder={placeholder} {...register} />
      <Error>
        <Trans>{err}</Trans>
      </Error>
    </TextAreaBox>
  )
}

const TextAreaBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 344px;

  font-family: "Crimson Text";

  margin: 0.9rem 0;
  @media ${device.tablet} {
    height: 270px;
  }
`
const NTextArea = styled.textarea`
  font-size: min(1.5em, 22px);
  font-weight: bold;
  resize: none;

  width: 100%;
  height: 20rem;

  margin: 0;
  padding: 15px;

  border-radius: 5px;
  outline: none;
  border: 0;

  background-color: #e4ecff;
  color: #0c2461;

  &::placeholder {
    color: #0c2461;
    opacity: 0.7;
  }

  &:focus {
    padding: 13px;
    border: solid 2px #0c2461;
  }

  @media ${device.tablet} {
    height: 15rem;
  }
`
const Error = styled.label`
  font-size: min(0.9em, 17px);
  font-family: "Libre Baskerville";
  font-weight: bold;

  width: 100%;

  color: #4b7bec;

  margin-top: 5px;
  margin-left: 4px;
`
