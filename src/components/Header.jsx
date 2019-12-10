import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

export const Header = () => {
  const StyledHeader = styled.div`
    width: 100%;
    height: 134px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    .logo {
      width: 180px;
      height: 70px;
      margin-top: 30px;
      background: url(${logo});
      background-repeat: no-repeat;
    }
  `

  return (
    <StyledHeader>
      <div className="logo" />
    </StyledHeader>
  )
}
