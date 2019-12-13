import React from 'react'
import styled from 'styled-components'
import { useUsersValues } from '../context/UserContext'

export const WelcomeText = ({ username }) => {
  const { currentUser } = useUsersValues()

  const StyledWelcome = styled.div`
    margin: 45px 0 40px 0;
    text-align: center;
    .title {
      font-size: 26px;
    }
    .subtitle {
      font-size: 18px;
    }
    .red-text {
      color: #b70c12;
    }
  `

  return (
    <StyledWelcome>
      <div className="title">Hola, {username}</div>
      <div className="subtitle">
        Bienvenido{' '}
        {currentUser !== 1 ? (
          <>
            a tu <br />
            <span className="red-text">reporte</span>.
          </>
        ) : null}
      </div>
    </StyledWelcome>
  )
}
