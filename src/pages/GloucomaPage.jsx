import React from 'react'
import TextField from '@material-ui/core/es/TextField'
import { StyledCard } from '../styles/StyledCard'
import { StyledH2 } from '../styles/StyledH2'

export const GloucomaPage = ({ close }) => {
  return (
    <>
      <StyledCard style={{ marginTop: '0px', position: 'relative' }}>
        {close}
        <StyledH2>Glaucoma Primario</StyledH2>
        <p>Ojo Derecho</p>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Agudeza Visual"
          autoFocus
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Agudeza Visual corregida"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Segmento anterior"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Medios"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Presión intraocular (PIO)"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Fondo de Ojo"
          onChange={e => {}}
          value={''}
          required
        />
        <div style={{ marginTop: '20px' }} />
        <p>Ojo Izquierdo</p>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Agudeza Visual"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Agudeza Visual corregida"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Segmento anterior"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Medios"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Presión intraocular (PIO)"
          onChange={e => {}}
          value={''}
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Fondo de Ojo"
          onChange={e => {}}
          value={''}
          required
        />
      </StyledCard>
    </>
  )
}
