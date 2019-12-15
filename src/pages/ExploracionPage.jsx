import React, { useState } from 'react'
import styled from 'styled-components'

import { StyledCard } from '../styles/StyledCard'
import { useUsersValues } from '../context/UserContext'
import { FormExploracion } from '../components/FormExploracion'
import { FormAntecedentes } from '../components/FormAntecedentes'
import { ContentData } from '../components/ContentData'

import Button from '@material-ui/core/es/Button'
import CloseIcon from '@material-ui/icons/Close'
import { GloucomaPage } from './GloucomaPage'

export const ExploracionPage = () => {
  const [activeUser, setActiveUser] = useState(true)
  const [antecedentes, setAntecedentes] = useState(false)
  const [exploracion, setExploracion] = useState(false)
  const [gloucoma, setGloucoma] = useState(false)

  const { users } = useUsersValues()

  const StyledUserPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
  `

  return (
    <div style={{ margin: '40px 0 40px 0' }}>
      {activeUser && (
        <StyledCard>
          <StyledUserPage>
            <ContentData label="Cédula" content={users[0].cedula} />
            <ContentData label="Nombre" content={users[0].nombre} />
          </StyledUserPage>
          <div style={{ margin: '50px 0 15px 0' }} />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              setActiveUser(prev => !prev)
              setAntecedentes(prev => !prev)
            }}
          >
            Antecedentes
          </Button>
          <div style={{ margin: '15px 0' }} />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              setActiveUser(prev => !prev)
              setExploracion(prev => !prev)
            }}
          >
            Exploracion
          </Button>
          <div style={{ margin: '15px 0' }} />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              setActiveUser(prev => !prev)
              setGloucoma(prev => !prev)
            }}
          >
            Gloucoma
          </Button>
        </StyledCard>
      )}
      <div style={{ marginTop: '20px' }} />

      {!activeUser && (
        <>
          {gloucoma && (
            <GloucomaPage
              close={
                <CloseIcon
                  style={{
                    marginTop: '5px',
                    cursor: 'pointer',
                    position: 'absolute',
                    right: '20px'
                  }}
                  onClick={() => {
                    setActiveUser(prev => !prev)
                    setGloucoma(prev => !prev)
                  }}
                />
              }
              submit={
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setActiveUser(prev => !prev)
                    setGloucoma(prev => !prev)
                  }}
                >
                  Aceptar
                </Button>
              }
            />
          )}
          {antecedentes && (
            <FormAntecedentes
              close={
                <CloseIcon
                  style={{
                    marginTop: '5px',
                    cursor: 'pointer',
                    position: 'absolute',
                    right: '20px'
                  }}
                  onClick={() => {
                    setActiveUser(prev => !prev)
                    setAntecedentes(prev => !prev)
                  }}
                />
              }
              submit={
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setActiveUser(prev => !prev)
                    setAntecedentes(prev => !prev)
                  }}
                >
                  Aceptar
                </Button>
              }
            />
          )}

          {exploracion && (
            <FormExploracion
              close={
                <CloseIcon
                  style={{
                    marginTop: '5px',
                    cursor: 'pointer',
                    position: 'absolute',
                    right: '20px'
                  }}
                  onClick={() => {
                    setActiveUser(prev => !prev)
                    setExploracion(prev => !prev)
                  }}
                />
              }
              submit={
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setActiveUser(prev => !prev)
                    setExploracion(prev => !prev)
                  }}
                >
                  Aceptar
                </Button>
              }
            />
          )}
        </>
      )}
    </div>
  )
}
