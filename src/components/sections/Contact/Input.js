import React from "react"

import styled from "styled-components"
import { device } from "../../../components/layout/responsive/device"

export default function Input({ placeholder }) {
  return (
    <InputBox>
      <NormalInput placeholder={placeholder} />
      <Error>Error, askere</Error>
    </InputBox>
  )
}
const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  font-family: "Crimson Text";

  margin: 0.9rem 0;
`

const Error = styled.label`
  font-size: min(0.9em, 17px);
  color: #4b7bec;

  width: 100%;

  margin-top: 5px;
  margin-left: 4px;

  font-weight: bold;
`

const NormalInput = styled.input`
  font-size: min(1.5em, 22px);
  font-weight: 600;

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

  @media ${device.tablet} {
    height: 40px;
  }
`
