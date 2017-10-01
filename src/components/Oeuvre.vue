<template>
    <div id="oeuvre">
      <md-whiteframe md-elevation="1">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <label>Titre</label>
            <md-input v-model="titre"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Synopsis</label>
            <md-input v-model="synopsis"></md-input>
          </md-input-container>
        </md-layout>
      </md-layout>
    </md-whiteframe>
      <md-whiteframe md-elevation="1" md-row="true">
        <md-layout md-align="center" md-gutter>
          <md-layout md-flex="25">
            <md-input-container>
              <label>Auteur</label>
              <md-input v-model="auteur"></md-input>
            </md-input-container>
            <md-button v-on:click="registerBook" class="md-raised md-primary">Enregistrer livre</md-button>
            <router-link tag="md-button" to="Home" class="md-raised md-primary">Home</router-link>
          </md-layout>
        </md-layout>
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="25">
          <md-input-container>
            <label>Date</label>
            <md-input v-model="date"></md-input>
          </md-input-container>
          <md-button v-on:click="registerMagazine" class="md-raised md-primary">Enregistrer magazine</md-button>
          <router-link tag="md-button" to="Home" class="md-raised md-primary">Home</router-link>
        </md-layout>
      </md-layout>
    </md-whiteframe>
    </div>
</template>
<script>
import axios from 'axios'
  export default{
    data(){
      return {
        titre :'',
        synopsis:'',
        mail:'',
        auteur:'',
        date:''
      }
    },
    methods: {
   registerBook(){
     axios.post("http://192.168.99.100:8080/book",{
       titre:this.titre,
       synopsis:this.synopsis,
       auteur:this.auteur
     })
   .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.log("error",error);
   })
   },
   registerMagazine(){
     //Enregistrer magazine.
     alert("not implemented yet")
   },
 },
}
</script>
<style>

</style>
