import React from "react"
import styled from "styled-components"

import Input from "./Input"
import TextArea from "./TextArea"
import { device } from "../../../components/layout/responsive/device"

export default function Form(props) {
  return (
    <FormLocation>
      {props.children}
      <ContactForm>
        <Input placeholder={"Nombre"}></Input>
        <Input placeholder={"Correo Electrónico"}></Input>
        <Input placeholder={"Teléfono"}></Input>
        <TextArea placeholder={"Descripción"}></TextArea>
        <SendButton type="button">ENVIAR</SendButton>
      </ContactForm>
    </FormLocation>
  )
}

const FormLocation = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  /* ---- */

  width: 55%;
  padding: 1em 1em;

  align-items: flex-start;

  @media ${device.tablet} {
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 1rem 1rem;
    width: 100%;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* --- */
  width: 100%;
  margin-top: 1.5rem;
  @media ${device.tablet} {
    margin-top: 0;
    padding: 0 0.3em;
    width: 100%;
  }
`

const SendButton = styled.button`
  padding: 0.7rem;
  width: 100%;

  font-size: 1em;
  font-weight: 300;

  border-radius: 10px;

  //Animable specs
  color: white;
  background-color: #0c2461;
  border: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:active {
  }
  outline: none;
  cursor: pointer;

  @media ${device.tablet} {
    border-radius: 5px;
    font-size: min(1.5em, 22px);
  }
`
