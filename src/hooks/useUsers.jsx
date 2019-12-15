import { useState } from 'react'

export const useUsers = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [selectedUser, setSelectedUser] = useState(0)
  const [users, setUsers] = useState([
    {
      id: 0,
      code: 'asdf8t78as',
      email: 'johndoe@gmail.com',
      nombre: 'John Doe',
      role: '0',
      password: 'secret',
      cedula: '1-2345-6789',
      edad: '33',
      sangre: 'A+',
      direccion: 'San José',
      ocupación: 'Ingeniero Eléctrico',
      estado: 'Casado',
      telefono: '+506 8888-8888',
      contactos: [
        {
          id: 0,
          nombre: 'Susan Doe',
          telefono: '7777-7777'
        },
        {
          id: 1,
          nombre: 'Jane Doe',
          telefono: '8888-7777'
        },
        {
          id: 2,
          nombre: 'John Smith',
          telefono: '9999-7777'
        }
      ],
      antecedentes: [
        {
          id: 0,
          fecha: '21 de enero del 2019',
          salud: 'Saludable. No es diabético. No es hipertenso',
          alergias: 'No presenta',
          medicamentos: 'NO',
          cirugias: 'NO',
          consulta: 'Pérdida de visións',
          examen: 'Dos meses',
          sintomas:
            'Dolor de cabeza, disminución de visión en ojo derecho, distorsión de imágenes.'
        },
        {
          id: 1,
          fecha: '12 de noviembre del 2019',
          salud: 'Saludable. No es diabético. No es hipertenso',
          alergias: 'No presenta',
          medicamentos: 'NO',
          cirugias: 'NO',
          consulta: 'Pérdida de visións',
          examen: 'Dos años',
          sintomas:
            'Dolor de cabeza, disminución de visión en ojo derecho, distorsión de imágenes.'
        }
      ],
      exploracion: {
        derecho: {
          anexo: 'SRN',
          motilidad_ocular: 'SPEC',
          cornea_camara: 'Estrecha',
          conjutiva: 'SRN',
          iris_popila: 'SRN',
          cristalino: 'Transparente',
          presion_intracular: '22',
          fondo_ojo: ''
        },
        izquierdo: {
          anexo: 'SRN',
          motilidad_ocular: 'SPEC',
          cornea_camara: 'Normal',
          conjutiva: 'SRN',
          iris_popila: 'SRN',
          cristalino: 'Transparente',
          presion_intracular: '9',
          fondo_ojo: ''
        },
        diagnostico:
          'Paciente presenta glaucoma en estado inicial en el ojo derecho'
      },
      glaucoma: {
        derecha: {
          agudeza_visual: '20/70',
          agudeza_corregida: '20/60',
          segmento_anterior: 'Estrecho',
          medios: 'Transparentes',
          presion_intraocular: '22',
          fondo_ojo: ''
        },
        izquierdo: {
          agudeza_visual: '20/30',
          agudeza_corregida: '20/20',
          segmento_anterior: 'Normal',
          medios: 'Transparentes',
          presion_intraocular: '9',
          fondo_ojo: ''
        }
      }
    },
    {
      id: 1,
      code: '1234jbkjsa',
      email: 'doc@gmail.com',
      nombre: 'Doctor',
      role: '1',
      password: 'secret',
      cedula: '',
      edad: '',
      sangre: '',
      direccion: '',
      ocupación: '',
      estado: '',
      telefono: '+506 1111-1111',
      contactos: []
    }
  ])

  return {
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    selectedUser,
    setSelectedUser
  }
}
