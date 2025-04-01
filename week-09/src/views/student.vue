<template>
    <FormRegistro 
      titulo="Registro de Estudiante"
      :campos="camposEstudiante"
      :botones="botonesEstudiante"
    />
  </template>
  
  <script setup lang="ts">
  import FormRegistro from './FormRegistro.vue';
  
  const camposEstudiante = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    telefono: 'Teléfono',
    correo: 'Correo Electrónico',
    direccion: 'Dirección',
    grado: 'Grado',
    carrera: 'Carrera',
  };
  
  const botonesEstudiante = {
    agregar: 'Agregar Estudiante',
    modificar: 'Modificar Estudiante',
    eliminar: 'Eliminar Estudiante',
    consultar: 'Consultar Estudiante',
  };
  </script>
  