import React from 'react'
import { StyledCard } from '../styles/StyledCard'
import { StyledTwoPanels } from '../styles/StyledTwoPanels'
import { StyledH2 } from '../styles/StyledH2'
import { useUsersValues } from '../context/UserContext'
import { ContentData } from '../components/ContentData'

export const MyCodeQrPage = () => {
  const { users, selectedUser } = useUsersValues()
  const { derecho, izquierdo, diagnostico } = users[selectedUser].exploracion
  return (
    <>
      <StyledH2 style={{ marginTop: '50px' }}>
        Historial de Antecedentes de{' '}
        <span style={{ color: '#B70C12' }}>{users[selectedUser].nombre}</span>
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
      <StyledCard style={{ marginTop: '20px' }}>{diagnostico}</StyledCard>
      <div style={{ height: '60px' }} />
    </>
  )
}
