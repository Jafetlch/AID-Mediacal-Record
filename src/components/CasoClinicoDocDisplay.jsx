import React from 'react'
import { StyledCard } from '../styles/StyledCard'
import { ContentData } from './ContentData'
import { useUsersValues } from '../context/UserContext'
import { StyledH2 } from '../styles/StyledH2'
import { StyledTwoPanels } from '../styles/StyledTwoPanels'

export const CasoClinicoDocDisplay = () => {
  const { users } = useUsersValues()
  const { derecho, izquierdo } = users[0].exploracion

  return (
    <>
      <StyledH2 style={{ margin: '40px 0 20px 0' }}>
        Caso clínico glaucoma primario
      </StyledH2>
      <StyledH2 style={{ marginTop: '20px' }}>
        <span style={{ color: '#B70C12' }}>Ojo Derecho</span>
      </StyledH2>

      <StyledCard style={{ marginTop: '20px' }}>
        <StyledTwoPanels>
          <div>
            <ContentData
              label="Anexos (exploración externa)"
              content={derecho.anexo}
            />
            <ContentData
              margintTop
              label="Motilidad ocular"
              content={derecho.motilidad_ocular}
            />
            <ContentData
              margintTop
              label="Cornea y cámara anterior"
              content={derecho.cornea_camara}
            />
            <ContentData
              margintTop
              label="Conjuntiva"
              content={derecho.conjutiva}
            />
          </div>
          <div>
            <ContentData label="Iris y pupila" content={derecho.iris_popila} />
            <ContentData
              margintTop
              label="Cristalino"
              content={derecho.cristalino}
            />
            <ContentData
              margintTop
              label="Presión intraocular"
              content={derecho.presion_intracular}
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
              label="Anexos (exploración externa)"
              content={izquierdo.anexo}
            />
            <ContentData
              margintTop
              label="Motilidad ocular"
              content={izquierdo.motilidad_ocular}
            />
            <ContentData
              margintTop
              label="Cornea y cámara anterior"
              content={izquierdo.cornea_camara}
            />
            <ContentData
              margintTop
              label="Conjuntiva"
              content={izquierdo.conjutiva}
            />
          </div>
          <div>
            <ContentData
              label="Iris y pupila"
              content={izquierdo.iris_popila}
            />
            <ContentData
              margintTop
              label="Cristalino"
              content={izquierdo.cristalino}
            />
            <ContentData
              margintTop
              label="Presión intraocular"
              content={izquierdo.presion_intracular}
            />
          </div>
        </StyledTwoPanels>
      </StyledCard>
    </>
  )
}
