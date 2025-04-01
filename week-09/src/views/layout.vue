<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div id="register-container">
        <ion-input v-model="nombre" label="Nombre" type="text" required></ion-input>
        <ion-input v-model="apellido" label="Apellido" type="text" required></ion-input>
        <ion-input v-model="edad" label="Edad" type="number" required></ion-input>
        <ion-input v-model="correo" label="Correo Electrónico" type="email" required></ion-input>
        
        <ion-button expand="full" @click="agregar">Agregar</ion-button>
        <ion-button expand="full" @click="modificar">Modificar</ion-button>
        <ion-button expand="full" @click="eliminar">Eliminar</ion-button>
        <ion-button expand="full" @click="consultar">Consultar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/vue';

const nombre = ref('');
const apellido = ref('');
const edad = ref('');
const correo = ref('');

const agregar = () => {
  console.log('Agregando usuario:', nombre.value, apellido.value, edad.value, correo.value);
};

const modificar = () => {
  console.log('Modificando usuario:', nombre.value, apellido.value, edad.value, correo.value);
};

const eliminar = () => {
  console.log('Eliminando usuario:', nombre.value, apellido.value, edad.value, correo.value);
};

const consultar = () => {
  console.log('Consultando usuario:', nombre.value, apellido.value, edad.value, correo.value);
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