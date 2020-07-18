<template>
<div id="accordion" > <!-- poner aqui el v for desde los comentarios -->
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          OPINION SOBRE (PERSONAJE) REALIZADA POR (USUARIO)
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        COMENTARIO DESDE EL STORE
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Acordeon',
}
</script>

<style>

</style>