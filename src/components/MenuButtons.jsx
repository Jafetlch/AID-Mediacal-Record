import React from 'react'
import styled from 'styled-components'

import { BigButton } from './BigButton'

import file_text from '../assets/svg/file_text.svg'
import file_text_dark from '../assets/svg/file_text_dark.svg'
import folder from '../assets/svg/folder.svg'
import folder_dark from '../assets/svg/folder_dark.svg'
import folder_plus from '../assets/svg/folder_plus.svg'
import folder_plus_dark from '../assets/svg/folder_plus_dark.svg'
import users_ico from '../assets/svg/users.svg'
import users_dark from '../assets/svg/users_dark.svg'
import { CustomLink } from './CustomLink'
import { useUsersValues } from '../context/UserContext'

export const MenuButtons = ({ pathname }) => {
  const { users, currentUser } = useUsersValues()
  const StyledMenuButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `
  return (
    <StyledMenuButtons>
      {users[currentUser].id === 0 ? (
        <>
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
          {/* <CustomLink to="/qr">
        <BigButton
          label="Mi Código"
          ico={qr}
          darkIco={qr_dark}
          active={pathname === '/qr'}
        />
      </CustomLink> */}
        </>
      ) : (
        <>
          <CustomLink to="/">
            <BigButton
              label="Usuarios"
              ico={users_ico}
              darkIco={users_dark}
              active={pathname === '/'}
            />
          </CustomLink>
          <CustomLink to="/expediente" style={{ textDecoration: 'none' }}>
            <BigButton
              label="Expediente"
              ico={folder_plus}
              darkIco={folder_plus_dark}
              active={pathname === '/expediente'}
            />
          </CustomLink>
        </>
      )}
    </StyledMenuButtons>
  )
}
