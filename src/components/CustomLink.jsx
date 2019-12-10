import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CustomLink = ({ children, to }) => {
  const StyledLink = styled.div`
    a {
      text-decoration: none;
    }
  `
  return (
    <StyledLink>
      <Link to={to}>{children}</Link>
    </StyledLink>
  )
}
