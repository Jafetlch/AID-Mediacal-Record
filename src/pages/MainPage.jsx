import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { GlobalStyle } from '../styles/GlobalStyle'
import { MenuButtons } from '../components/MenuButtons'
import { WelcomeText } from '../components/WelcomeText'
import { Header } from '../components/Header'
import { FichaBasicaPage } from './FichaBasicaPage'
import { AntecedentesPage } from './AntecedentesPage'
import { UsersPage } from './UsersPage'
import { ExploracionPage } from './ExploracionPage'
import { useUsersValues } from '../context/UserContext'

export const MainPage = ({ location }) => {
  const { users, currentUser } = useUsersValues()

  const StyledContainer = styled.div`
    max-width: 530px;
    margin: auto;
    position: relative;
  `
  return (
    <>
      <Header />
      <StyledContainer>
        <WelcomeText username={users[currentUser].nombre} />
        <MenuButtons pathname={location.pathname} />
        {users[currentUser].id === 0 ? (
          <>
            <Route exact path="/" component={FichaBasicaPage} />
            <Route exact path="/antecedentes" component={AntecedentesPage} />
            {/* <Route exact path="/qr" component={MyCodeQrPage} /> */}
          </>
        ) : (
          <>
            <Route exact path="/" component={UsersPage} />
            <Route exact path="/expediente" component={ExploracionPage} />
          </>
        )}
        <GlobalStyle />
      </StyledContainer>
    </>
  )
}
