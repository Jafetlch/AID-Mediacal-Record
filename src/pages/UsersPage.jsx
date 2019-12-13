import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledCard } from '../styles/StyledCard'
import { ContentData } from '../components/ContentData'
import { useUsersValues } from '../context/UserContext'
import { StyledH2 } from '../styles/StyledH2'
import { StyledTwoPanels } from '../styles/StyledTwoPanels'

export const UsersPage = () => {
  const [selected, setSelected] = useState(false)
  const { users } = useUsersValues()
  const { derecho, izquierdo, diagnostico } = users[0].exploracion

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
        <div
          onClick={() => setSelected(prev => !prev)}
          style={{ cursor: 'pointer' }}
        >
          <StyledH2>
            Historial de Antecedentes de{' '}
            <span style={{ color: '#B70C12' }}>{users[0].nombre}</span>
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
                <ContentData
                  label="Iris y pupila"
                  content={derecho.iris_popila}
                />
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

          <StyledH2 style={{ margin: '40px 0 20px 0' }}>
            Antecedentes de {users[0].nombre}
          </StyledH2>

          {users[0].antecedentes.map(antecedente => (
            <StyledCard style={{ marginTop: '20px' }} key={antecedente.id}>
              <ContentData label="ID" content={antecedente.id + 1} />
              <ContentData
                margintTop
                label="Fecha"
                content={antecedente.fecha}
              />
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
        </div>
      )}
      <div style={{ height: '40px' }} />
    </>
  )
}
