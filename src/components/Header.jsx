import React from 'react'
import styled from 'styled-components'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import logo from '../assets/logo.svg'
import { useUsersValues } from '../context/UserContext'

export const Header = () => {
  const { setCurrentUser } = useUsersValues()
  const StyledHeader = styled.div`
    width: 100%;
    height: 134px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    position: relative;
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
      <div
        style={{
          position: 'absolute',
          top: '60px',
          right: '30px',
          cursor: 'pointer'
        }}
        onClick={() => setCurrentUser(null)}
      >
        <ExitToAppIcon />
      </div>
    </StyledHeader>
  )
}
