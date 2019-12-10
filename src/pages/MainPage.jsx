import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { GlobalStyle } from '../styles/GlobalStyle'
import { MenuButtons } from '../components/MenuButtons'
import { WelcomeText } from '../components/WelcomeText'
import { Header } from '../components/Header'
import { FichaBasicaPage } from './FichaBasicaPage'
import { AntecedentesPage } from './AntecedentesPage'
import { MyCodeQrPage } from './MyCodeQrPage'

export const MainPage = ({ children, location }) => {
  const StyledContainer = styled.div`
    max-width: 530px;
    margin: auto;
  `
  return (
    <>
      <Header />
      <StyledContainer>
        <WelcomeText username="John Doe" />
        <MenuButtons pathname={location.pathname} />
        <Route exact path="/" component={FichaBasicaPage} />
        <Route exact path="/antecedentes" component={AntecedentesPage} />
        <Route exact path="/qr" component={MyCodeQrPage} />
        <GlobalStyle />
      </StyledContainer>
    </>
  )
}
