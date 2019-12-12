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
      <StyledH2 style={{ marginTop: '50px' }}>
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
      {/* <StyledCard style={{ marginTop: '20px' }}>
        <StyledTwoPanels>
          <div>
            <ContentData label="Fecha" content="12 de febrero del 2019" />
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
          content="Dolor de cabeza, disminución de visión en ojo derecho, distorsión de imágenes"
        />
      </StyledCard>
      <StyledCard style={{ margin: '20px 0 80px 0' }}>
        <StyledTwoPanels>
          <div>
            <ContentData label="Fecha" content="21 de noviembre del 2019" />
          </div>
          <div>
            <ContentData
              label="Motivo de Consulta"
              content="Pérdida de visión"
            />
          </div>
        </StyledTwoPanels>
        <ContentData
          margintTop
          label="Síntomas Astenópicos"
          content="Dolor de cabeza, disminución de visión en ojo derecho, distorsión de imágenes"
        />
      </StyledCard> */}
    </>
  )
}
