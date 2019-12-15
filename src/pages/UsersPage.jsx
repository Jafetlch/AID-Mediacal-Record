import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

import MedicalRecordQR from '../assets/MedicalRecordQR.svg'
import { StyledCard } from '../styles/StyledCard'
import { ContentData } from '../components/ContentData'
import { useUsersValues } from '../context/UserContext'
import { ExploracionDocDisplay } from '../components/ExploracionDocDisplay'
import { CasoClinicoDocDisplay } from '../components/CasoClinicoDocDisplay'
import { AntecedentesDocDisplay } from '../components/AntecedentesDocDisplay'
import { ImageContainer } from '../components/ImageContainer'

export const UsersPage = () => {
  const [selected, setSelected] = useState(false)
  const { users } = useUsersValues()

  const StyledUserPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
  `

  return (
    <>
      <div style={{ height: '40px' }} />
      {!selected ? (
        <div onClick={() => setSelected(prev => !prev)}>
          <StyledCard>
            <StyledUserPage>
              <ContentData label="Cédula" content={users[0].cedula} />
              <ContentData label="Nombre" content={users[0].nombre} />
              <ContentData label="Teléfono" content={users[0].telefono} />
            </StyledUserPage>
          </StyledCard>
        </div>
      ) : (
        <div style={{ postition: 'relative' }}>
          <CloseIcon
            style={{
              marginTop: '5px',
              cursor: 'pointer',
              position: 'absolute',
              right: '0'
            }}
            onClick={() => {
              setSelected(prev => !prev)
            }}
          />
          <ExploracionDocDisplay />
          {/*  */}
          <CasoClinicoDocDisplay />
          {/*  */}
          <AntecedentesDocDisplay />
          {/*  */}
          <StyledCard style={{ marginTop: '20px' }}>
            <ImageContainer img={MedicalRecordQR} width="350" height="350" />
          </StyledCard>
        </div>
      )}
      <div style={{ height: '40px' }} />
    </>
  )
}
