<!-- FormRegistro.vue -->
<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>{{ titulo }}</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true" class="ion-padding">
        <div id="register-container">
          <ion-input v-model="nombre" :label="campos.nombre" type="text" required></ion-input>
          <ion-input v-model="apellido" :label="campos.apellido" type="text" required></ion-input>
          <ion-input v-model="telefono" :label="campos.telefono" type="tel" v-if="campos.telefono" required></ion-input>
          <ion-input v-model="correo" :label="campos.correo" type="email" required></ion-input>
          <ion-input v-model="direccion" :label="campos.direccion" type="text" v-if="campos.direccion" required></ion-input>
          <ion-input v-model="grado" :label="campos.grado" type="text" v-if="campos.grado" required></ion-input>
          <ion-input v-model="carrera" :label="campos.carrera" type="text" v-if="campos.carrera" required></ion-input>
          <ion-input v-model="empresa" :label="campos.empresa" type="text" v-if="campos.empresa" required></ion-input>
          
          <ion-button expand="full" @click="agregar">{{ botones.agregar }}</ion-button>
          <ion-button expand="full" @click="modificar">{{ botones.modificar }}</ion-button>
          <ion-button expand="full" @click="eliminar">{{ botones.eliminar }}</ion-button>
          <ion-button expand="full" @click="consultar">{{ botones.consultar }}</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/vue';
  
  // Propiedades dinámicas
  const props = defineProps({
    titulo: String,
    campos: Object,
    botones: Object,
  });
  
  const nombre = ref('');
  const apellido = ref('');
  const telefono = ref('');
  const correo = ref('');
  const direccion = ref('');
  const grado = ref('');
  const carrera = ref('');
  const empresa = ref('');
  
  const agregar = () => {
    console.log('Agregando:', nombre.value, apellido.value, telefono.value, correo.value, direccion.value, grado.value, carrera.value, empresa.value);
  };
  
  const modificar = () => {
    console.log('Modificando:', nombre.value, apellido.value, telefono.value, correo.value, direccion.value, grado.value, carrera.value, empresa.value);
  };
  
  const eliminar = () => {
    console.log('Eliminando:', nombre.value, apellido.value, telefono.value, correo.value, direccion.value, grado.value, carrera.value, empresa.value);
  };
  
  const consultar = () => {
    console.log('Consultando:', nombre.value, apellido.value, telefono.value, correo.value, direccion.value, grado.value, carrera.value, empresa.value);
  };
  </script>
  
  <style scoped>
  #register-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    margin: auto;
    padding-top: 20%;
  }
  </style>
  