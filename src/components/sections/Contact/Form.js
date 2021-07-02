import React, { useState } from "react"
import styled, { css } from "styled-components"

import Input from "./Input"
import TextArea from "./TextArea"

//Form handler
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"

import { device } from "../../../components/layout/responsive/device"

export default function Form({ children }) {
  const [success, setSucess] = useState(false)
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(resolve, ms)
    })

  async function changeStyle(reset) {
    setSucess(true)
    console.log("Wey \n -----------")
    await delay(1000)
    console.log("Wey \n -----------")

    setSucess(false)
  }

  const sendEmail = (data, e) => {
    emailjs
      .sendForm(
        "service_s6w8x57",
        "carelaYpichardo_temp",
        e.target,
        "user_t5yip53PAJkGwGOXpZlxf"
      )
      .then(
        () => {
          reset()
          changeStyle()
          console.log("Todo nítido mi hermano 👍")
        },
        error => {
          console.log("JeJe", error)
        }
      )
  }
  const onSubmit = (data, e) => {
    console.table(data)
    console.log("---------------")
    changeStyle()
    reset()
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const { t } = useI18next()

  return (
    <FormLocation>
      {children}
      <ContactForm autoComplete="off" onSubmit={handleSubmit(sendEmail)}>
        <Input
          placeholder={t("Nombre del Contacto")}
          register={register("name", {
            required: "Este campo es obligatorio",
            maxLength: {
              value: 120,
              message: "Máximo de 120 caracteres",
            },
            minLength: {
              value: 8,
              message: "Mínimo de 8 caracteres",
            },
          })}
          err={errors.name && errors.name.message}
        ></Input>
        <Input
          placeholder={t("Teléfono")}
          register={register("phone", {
            required: { value: true, message: "Este campo es obligatorio" },
            maxLength: {
              value: 12,
              message: "Ingrese un número telefónico válido",
            },
            minLength: {
              value: 10,
              message: "Ingrese un número telefónico válido",
            },
          })}
          err={errors.phone && errors.phone.message}
          number={true}
        ></Input>
        <Input
          placeholder={t("Correo electrónico")}
          register={register("mail", {
            required: { value: true, message: "Este campo es obligatorio" },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Ingrese una dirección de correo válida",
            },
          })}
          err={errors.mail && errors.mail.message}
        ></Input>
        <TextArea
          placeholder={t("Descripción")}
          register={register("desc", {
            required: { value: true, message: "Este campo es obligatorio" },
            maxLength: {
              value: 300,
              message: "Máximo de 300 caracteres",
            },
            minLength: {
              value: 10,
              message: "Mínimo de 10 caracteres",
            },
          })}
          err={errors.desc && errors.desc.message}
        ></TextArea>
        <SendButton
          type="submit"
          value={t("ENVIAR")}
          sended={success}
          disabled={success}
        />
      </ContactForm>
    </FormLocation>
  )
}

const FormLocation = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  width: 55%;

  padding: 0 1em;
  padding-top: 1em;

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

const sendedStyle = css`
  background-color: #45aaf2;
  transition: all 100ms ease-in-out;
`

const notSendedStyle = css`
  background-color: #0c2461;
  transition: all 100ms ease-in-out;
`

const SendButton = styled.input`
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

  ${props => (props.sended ? sendedStyle : notSendedStyle)}

  @media ${device.tablet} {
    border-radius: 5px;
    font-size: min(1.5em, 22px);
  }
`
