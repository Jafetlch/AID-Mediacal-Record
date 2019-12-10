import React from 'react'
import styled from 'styled-components'

import { BigButton } from './BigButton'

import file_text from '../assets/svg/file_text.svg'
import file_text_dark from '../assets/svg/file_text_dark.svg'
import qr from '../assets/svg/qr.svg'
import qr_dark from '../assets/svg/qr_dark.svg'
import folder from '../assets/svg/folder.svg'
import folder_dark from '../assets/svg/folder_dark.svg'
import { CustomLink } from './CustomLink'

export const MenuButtons = ({ pathname }) => {
  const StyledMenuButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `
  return (
    <StyledMenuButtons>
      <CustomLink to="/">
        <BigButton
          label="Ficha Básica"
          ico={file_text}
          darkIco={file_text_dark}
          active={pathname === '/'}
        />
      </CustomLink>
      <CustomLink to="/antecedentes" style={{ textDecoration: 'none' }}>
        <BigButton
          label="Antecedentes"
          ico={folder}
          darkIco={folder_dark}
          active={pathname === '/antecedentes'}
        />
      </CustomLink>
      <CustomLink to="/qr">
        <BigButton
          label="Mi Código"
          ico={qr}
          darkIco={qr_dark}
          active={pathname === '/qr'}
        />
      </CustomLink>
    </StyledMenuButtons>
  )
}
