<!-- RegistroProveedor.vue -->
<template>
    <FormRegistro 
      titulo="Registro de Proveedor"
      :campos="camposProveedor"
      :botones="botonesProveedor"
    />
  </template>
  
  <script setup lang="ts">
  import FormRegistro from './FormRegistro.vue';
  
  const camposProveedor = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    telefono: 'Teléfono',
    correo: 'Correo Electrónico',
    direccion: 'Dirección',
    empresa: 'Empresa',
  };
  
  const botonesProveedor = {
    agregar: 'Agregar Proveedor',
    modificar: 'Modificar Proveedor',
    eliminar: 'Eliminar Proveedor',
    consultar: 'Consultar Proveedor',
  };
  </script>
  