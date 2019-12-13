import React from 'react'
import TextField from '@material-ui/core/es/TextField'
import { StyledH2 } from '../styles/StyledH2'
import { StyledCard } from '../styles/StyledCard'
import { useUsersValues } from '../context/UserContext'

export const FormAntecedentes = () => {
  const { users } = useUsersValues()
  return (
    <StyledCard>
      <StyledH2>{users[0].nombre}</StyledH2>
      <p>Antecedentes</p>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Salud General"
        autoFocus
        onChange={e => {}}
        value={''}
        required
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Alergias"
        onChange={e => {}}
        value={''}
        required
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Toma Medicamentos"
        onChange={e => {}}
        value={''}
        required
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Cirugías Oculares"
        onChange={e => {}}
        value={''}
        required
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Motivo de Consulta"
        onChange={e => {}}
        value={''}
        required
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Último Examen"
        onChange={e => {}}
        value={''}
        required
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Síntomas Astenópicos"
        onChange={e => {}}
        value={''}
        required
      />
    </StyledCard>
  )
}
