import React from 'react'

import MedicalRecordQR from '../assets/MedicalRecordQR.svg'

import { StyledCard } from '../styles/StyledCard'
import { ContentData } from '../components/ContentData'
import { ImageContainer } from '../components/ImageContainer'
import { StyledH2 } from '../styles/StyledH2'
import { StyledTwoPanels } from '../styles/StyledTwoPanels'
import { useUsersValues } from '../context/UserContext'

export const FichaBasicaPage = () => {
  const { currentUser, users } = useUsersValues()
  return (
    <>
      <StyledCard style={{ marginTop: '40px' }}>
        <StyledTwoPanels>
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
        </StyledTwoPanels>
      </StyledCard>
      <StyledH2 style={{ margin: '40px 0 0 20px' }}>
        Mis contactos de <span style={{ color: '#B70C12' }}>Emergencia</span>
      </StyledH2>
      {users[currentUser].contactos.map(contacto => (
        <StyledCard style={{ marginTop: '20px' }} key={contacto.id}>
          <StyledTwoPanels>
            <div>
              <ContentData label="Nombre" content={contacto.nombre} />
            </div>
            <div>
              <ContentData label="Teléfono" content={contacto.telefono} />
            </div>
          </StyledTwoPanels>
        </StyledCard>
      ))}
      <StyledH2 style={{ margin: '40px 0 0 20px' }}>
        Mi <span style={{ color: '#B70C12' }}>QR</span>
      </StyledH2>
      <StyledCard style={{ marginTop: '20px' }}>
        <ImageContainer img={MedicalRecordQR} width="350" height="350" />
      </StyledCard>
      <div style={{ height: '40px' }} />
    </>
  )
}
