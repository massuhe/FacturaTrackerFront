import React, { useState } from 'react'
import Input from './Shared/Input'
import { css } from '@emotion/core'
import COLORS from '../theme/colors'
import eagleQuiet from '../assets/images/eagle-quiet.png'
import eagleAngry from '../assets/images/eagle-angry.png'
import useForm from '../hooks/useForm'
import RoundedButton from './Shared/RoundedButton'

const required = (value: any) => {
  return !Boolean(value) ? 'El campo es requerido' : ''
}

const Login = () => {
  const formController = useForm({
    fields: {
      user: {
        initialValue: '',
        validators: [required],
      },
      password: {
        initialValue: '',
        validators: [required],
      },
    },
  })

  const { user, password } = formController.controllers()

  const submit = (e: any) => {
    e.preventDefault()
    const isValid = formController.validateForm()
    if (!isValid) {
      return
    }
  }

  const valid = formController.isValid()

  return (
    <div
      css={css`
        background: radial-gradient(
          ellipse at center,
          #404343 45%,
          #0b0b0b 71%
        );
        max-width: 50rem;
        margin: 0 auto;
      `}
    >
      <form
        onSubmit={submit}
        css={css`
          max-width: 30rem;
          margin: 6rem auto;
          background: ${COLORS.gold};
          padding: 2rem 5rem;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          &::before {
            content: '';
            background: url(${valid ? eagleQuiet : eagleAngry}) no-repeat;
            height: 225px;
            margin-top: -7rem;
            background-position: ${valid ? 'center' : 'calc(50% + 10px)'} center;
            transition: all 0.1s ease-in-out;
            z-index: 1;
          }
          &::after {
            content: '';
            height: 100px;
            top: 0;
            left: 0;
            position: absolute;
            right: 0;
            bottom: 100px;
            background-color: #f9f5ef;
            border-bottom: solid 10px #feaa20;
            border-radius: 0.5rem 0.5rem 100% 100%;
          }
        `}
      >
        <Input
          label="Usuario"
          type="text"
          id="user"
          name="Usuario"
          controller={user}
        />
        <Input
          label="Contraseña"
          type="password"
          id="password"
          name="Contraseña"
          controller={password}
          css={css`
            margin-top: 1.5rem;
          `}
        />
        <RoundedButton textColor="white" buttonColor="#f8b430">
          Login
        </RoundedButton>
      </form>
    </div>
  )
}

export default Login
