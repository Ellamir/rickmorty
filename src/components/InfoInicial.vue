  
<template>
  <div class="container">
    <h1 class="text-center my-3">Rick and Morty</h1>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4" v-for="(item,index) in datosApi" :key="index">
        <div class="card">
          <img :src="item.image" class="card-img-top" :alt="item.name">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <button type="button" class="btn btn-primary" 
            data-toggle="modal" data-target="#opinar">Opinar</button>
            <!-- <a class="btn btn-primary mx-3" @click.prevent="enviarInfoComentario(index)">Comentar</a>
               este boton deberia estar en la ventana de emitir opinion sobre un personaje o en el detalle-->
            <button type="button" class="btn btn-primary" 
            data-toggle="modal" data-target="#verInfo">Ver Info</button>

        </div>
    </div>

    <!-- Modal -->
  <div class="modal fade" id="verInfo" tabindex="-1" role="dialog" aria-labelledby="verInfo" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{item.name}}</h5>
        </div>
        <!-- Aqui el MEDIA con la info del personaje -->
        <!-- Falta lograr que sea de cada uno -->
        <div class="media">
          <img class="mr-3" :src="item.image" alt="Generic placeholder image">
          <div class="media-body">
            <h5>{{item.name}}</h5>
            <p>{{item.status}}</p>
            <p>{{item.species}}</p>
            <p>{{item.location.name}}</p> 
            <p>{{item.episode.length}} episodes</p> 
            <p>{{item.created}}</p>
            
          </div>
        </div>
      
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Favorito</button>
        </div>
      </div>
    </div>
  </div>


      </div>
    </div>
  </div>
</template>

<script> 

// import { mapActions } from 'vuex'
export default {

  name: 'InfoInicial',
  computed: {
   
    datosApi(){
      return this.$store.getters.enviarInfoApi;
    }
  },
  methods: {
    
     enviarInfoComentario(index){
      this.$router.push(`/comentarios/${index}`);
    }
    
  },
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  margin: 10px;
}
</style>
