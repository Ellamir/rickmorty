<template>
  <div>
    <h1>Comentarios de Usuarios</h1>
<!-- agregar un V IF (array != 0) ELSE "No hay comentarios" -->
    <acordeon></acordeon>

    <p>Aún no hay comentarios de los usuarios</p>
  </div>
</template>

<script>
import Acordeon from '../components/Acordeon.vue'

export default {
  name: 'Comentarios',

  components: {
    Acordeon
  }

}
</script>

<style>

</style>
