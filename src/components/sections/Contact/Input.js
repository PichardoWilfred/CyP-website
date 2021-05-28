import React from "react"

import styled from "styled-components"
import { device } from "../../../components/layout/responsive/device"
import { Trans } from "gatsby-plugin-react-i18next"

export default function Input({ placeholder, err, register, number }) {
  return (
    <InputBox>
      <NormalInput placeholder={placeholder} type={number} {...register} />
      <Error>
        <Trans>{err}</Trans>
      </Error>
    </InputBox>
  )
}
const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  height: 79px;

  font-family: "Crimson Text";

  margin: 0.9rem 0;

  @media ${device.tablet} {
    height: 59px;
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

const NormalInput = styled.input.attrs(props => ({
  type: props.type ? "number" : "text",
}))`
  font-size: min(1.5em, 22px);
  font-weight: bold;

  width: 100%;
  height: 55px;

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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }

  @media ${device.tablet} {
    height: 40px;
  }
`
