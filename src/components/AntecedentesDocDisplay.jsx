import React from 'react'
import { StyledCard } from '../styles/StyledCard'
import { ContentData } from './ContentData'
import { useUsersValues } from '../context/UserContext'
import { StyledH2 } from '../styles/StyledH2'

export const AntecedentesDocDisplay = () => {
  const { users } = useUsersValues()

  return (
    <>
      <StyledH2 style={{ margin: '40px 0 20px 0' }}>Antecedentes</StyledH2>

      {users[0].antecedentes.map(antecedente => (
        <StyledCard style={{ marginTop: '20px' }} key={antecedente.id}>
          <ContentData label="ID" content={antecedente.id + 1} />
          <ContentData margintTop label="Fecha" content={antecedente.fecha} />
          <ContentData
            margintTop
            label="Salud General"
            content={antecedente.salud}
          />
          <ContentData
            margintTop
            label="Alergias"
            content={antecedente.alergias}
          />
          <ContentData
            margintTop
            label="Toma Medicamentos"
            content={antecedente.medicamentos}
          />
          <ContentData
            margintTop
            label="Cirugías Oculares"
            content={antecedente.cirugias}
          />
          <ContentData
            margintTop
            label="Motivo de Consulta"
            content={antecedente.consulta}
          />
          <ContentData
            margintTop
            label="Último Examen"
            content={antecedente.examen}
          />
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
