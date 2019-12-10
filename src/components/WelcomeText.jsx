import React from 'react'
import styled from 'styled-components'

export const WelcomeText = ({ username }) => {
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
        Bienvenido a tu <br />
        <span className="red-text">reporte</span>.
      </div>
    </StyledWelcome>
  )
}
