import React from "react"
import { device } from "../../../components/layout/responsive/device"
import styled from "styled-components"

export default function TextArea({ placeholder }) {
  return (
    <TextAreaBox>
      <NTextArea placeholder={placeholder} />
      <Error>Error, mucho askere</Error>
    </TextAreaBox>
  )
}

const TextAreaBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  font-family: "Crimson Text";

  margin: 0.9rem 0;
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
  color: #4b7bec;

  width: 100%;

  margin-top: 5px;
  margin-left: 4px;

  font-weight: bold;
`
