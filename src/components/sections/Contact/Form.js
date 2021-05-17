import React from "react"
import styled from "styled-components"

import Input from "./Input"
import TextArea from "./TextArea"
import { device } from "../../../components/layout/responsive/device"

//Form handler
import { useForm } from "react-hook-form"

export default function Form(props) {
  const { register, errors, handleSubmit } = useForm({
    mode: "onTouched",
  })
  return (
    <FormLocation onSubmit={handleSubmit()} autoComplete="off">
      {props.children}
      <ContactForm>
        <Input
          placeholder={"Nombre"}
          name="name"
          ref={register({
            required: "Este campo es requerido.",
            minLength: { value: 5, message: "Mínimo 5 caracteres." },
            maxLength: { value: 50, message: "Máximo 50 caracteres." },
          })}
          err={errors.name && errors.name.message}
        ></Input>
        {/* <Input
          placeholder={"Correo Electrónico"}
          name="mail"
          ref={register({
            value: /^\S+@\S+$/i,
            message: "Ingrese una dirección de correo válida.",
          })}
        ></Input> */}
        {/*  <Input
          placeholder={"Teléfono"}
          name="phone"
          ref={...register({
            required: "Este campo es requerido.",
            minLength: { value: 10, message: "Mínimo 10 caracteres." },
            maxLength: { value: 12, message: "Máximo 12 caracteres." },
          })}
        ></Input>
        <TextArea
          placeholder={"Descripción"}
          name="description"
          ref={...register({
            required: "Este campo es requerido.",
            minLength: { value: 10, message: "Mínimo 10 caracteres." },
            maxLength: { value: 300, message: "Máximo 300 caracteres." },
          })}
        ></TextArea> */}
        <SendButton type="submit">ENVIAR</SendButton>
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
