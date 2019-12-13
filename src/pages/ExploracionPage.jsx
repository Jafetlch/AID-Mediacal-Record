import React, { useState } from 'react'
import styled from 'styled-components'

import { StyledCard } from '../styles/StyledCard'
import { StyledH2 } from '../styles/StyledH2'
import { useUsersValues } from '../context/UserContext'
import { FormExploracion } from '../components/FormExploracion'
import { FormAntecedentes } from '../components/FormAntecedentes'
import { ContentData } from '../components/ContentData'

export const ExploracionPage = () => {
  const [active, setActive] = useState(false)
  const [antecedentes, setantecedentes] = useState(false)
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
      <StyledCard>
        <StyledUserPage>
          <ContentData label="Cédula" content={users[0].cedula} />
          <ContentData label="Nombre" content={users[0].nombre} />
        </StyledUserPage>
      </StyledCard>
      {gloucoma && <>hola</>}
      {antecedentes && <FormAntecedentes />}
      {exploracion && <FormExploracion />}
    </div>
  )
}
