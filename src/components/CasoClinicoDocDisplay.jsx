import React from 'react'
import { StyledCard } from '../styles/StyledCard'
import { ContentData } from './ContentData'
import { useUsersValues } from '../context/UserContext'
import { StyledH2 } from '../styles/StyledH2'
import { StyledTwoPanels } from '../styles/StyledTwoPanels'

export const CasoClinicoDocDisplay = () => {
  const { users } = useUsersValues()
  const { derecho, izquierdo } = users[0].glaucoma

  return (
    <>
      <StyledH2 style={{ margin: '20px 0 20px 20px' }}>
        Caso clínico glaucoma primario
      </StyledH2>
      <StyledH2 style={{ marginTop: '20px' }}>
        <span style={{ color: '#B70C12' }}>Ojo Derecho</span>
      </StyledH2>

      <StyledCard style={{ marginTop: '20px' }}>
        <StyledTwoPanels>
          <div>
            <ContentData
              label="Agudeza Visual"
              content={derecho.agudeza_visual}
            />
            <ContentData
              margintTop
              label="Agudeza Visual corregida"
              content={derecho.agudeza_corregida}
            />
            <ContentData
              margintTop
              label="Segmento anterior"
              content={derecho.segmento_anterior}
            />
            <ContentData margintTop label="Medios" content={derecho.medios} />
            <ContentData
              margintTop
              label="Presión intraocular (PIO)"
              content={derecho.presion_intraocular}
            />
          </div>
        </StyledTwoPanels>
      </StyledCard>

      <StyledH2 style={{ marginTop: '40px' }}>
        <span style={{ color: '#B70C12' }}>Ojo Izquierdo</span>
      </StyledH2>

      <StyledCard style={{ marginTop: '20px' }}>
        <StyledTwoPanels>
          <div>
            <ContentData
              label="Agudeza Visual"
              content={izquierdo.agudeza_visual}
            />
            <ContentData
              margintTop
              label="Agudeza Visual corregida"
              content={izquierdo.agudeza_corregida}
            />
            <ContentData
              margintTop
              label="Segmento anterior"
              content={izquierdo.segmento_anterior}
            />
            <ContentData margintTop label="Medios" content={derecho.medios} />
            <ContentData
              margintTop
              label="Presión intraocular (PIO)"
              content={izquierdo.presion_intraocular}
            />
          </div>
        </StyledTwoPanels>
      </StyledCard>
    </>
  )
}
