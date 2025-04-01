<template>
    <FormRegistro 
      titulo="Registro de Profesor"
      :campos="camposProfesor"
      :botones="botonesProfesor"
    />
  </template>
  
  <script setup lang="ts">
  import FormRegistro from './FormRegistro.vue';
  
  const camposProfesor = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    telefono: 'Teléfono',
    correo: 'Correo Electrónico',
    materia: 'Materia',
    titulo: 'Título',
  };
  
  const botonesProfesor = {
    agregar: 'Agregar Profesor',
    modificar: 'Modificar Profesor',
    eliminar: 'Eliminar Profesor',
    consultar: 'Consultar Profesor',
  };
  </script>
  