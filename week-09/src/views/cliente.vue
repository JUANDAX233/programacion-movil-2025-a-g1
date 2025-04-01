<template>
    <FormRegistro 
      titulo="Registro de Cliente"
      :campos="camposCliente"
      :botones="botonesCliente"
    />
  </template>
  
  <script setup lang="ts">
  import FormRegistro from './FormRegistro.vue';
  
  const camposCliente = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    telefono: 'Teléfono',
    correo: 'Correo Electrónico',
    direccion: 'Dirección',
  };
  
  const botonesCliente = {
    agregar: 'Agregar Cliente',
    modificar: 'Modificar Cliente',
    eliminar: 'Eliminar Cliente',
    consultar: 'Consultar Cliente',
  };
  </script>
  