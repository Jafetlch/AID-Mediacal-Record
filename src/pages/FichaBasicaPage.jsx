import React from 'react'
import styled from 'styled-components'

import { StyledCard } from '../styles/StyledCard'
import { ContentData } from '../components/ContentData'

export const FichaBasicaPage = () => {
  const StyledFicha = styled.div`
    display: flex;
    flex-flow: row;
    div:nth-child(1) {
      width: 50%;
    }
  `
  return (
    <StyledCard style={{ marginTop: '40px' }}>
      <StyledFicha>
        <div>
          <ContentData label="Cédula" content="1-2345-6789" />
          <ContentData margintTop label="Tipo de Sangre" content="A+" />
          <ContentData
            margintTop
            label="Ocupación"
            content="Ingeniero Eléctrico"
          />
          <ContentData margintTop label="Estado" content="Casado" />
          <ContentData margintTop label="Dirección" content="San José" />
        </div>
        <div>
          <ContentData label="Email" content="johndoe@gmail.com" />
          <ContentData margintTop label="Teléfono" content="+506 8888-8888" />
        </div>
      </StyledFicha>
    </StyledCard>
  )
}
