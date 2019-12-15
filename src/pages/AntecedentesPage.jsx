import React from 'react'

import { StyledCard } from '../styles/StyledCard'
import { StyledTwoPanels } from '../styles/StyledTwoPanels'
import { ContentData } from '../components/ContentData'
import { StyledH2 } from '../styles/StyledH2'
import { useUsersValues } from '../context/UserContext'

export const AntecedentesPage = () => {
  const { users, currentUser } = useUsersValues()
  return (
    <>
      <StyledH2 style={{ margin: '50px 0 0 20px' }}>
        Mi historial de <span style={{ color: '#B70C12' }}>Antecedentes</span>
      </StyledH2>
      {users[currentUser].antecedentes.map(antecedente => (
        <StyledCard style={{ marginTop: '20px' }} key={antecedente.id}>
          <StyledTwoPanels>
            <div>
              <ContentData label="Fecha" content={antecedente.fecha} />
            </div>
            <div>
              <ContentData
                label="Motivo de Consulta"
                content="Pérdida de visión en el ojo derecho"
              />
            </div>
          </StyledTwoPanels>
          <ContentData
            margintTop
            label="Síntomas Astenópicos"
            content={antecedente.sintomas}
          />
        </StyledCard>
      ))}
    </>
  )
}
