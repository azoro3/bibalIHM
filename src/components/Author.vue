<template>
    <div id="usager">
      <md-whiteframe md-elevation="24">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <label>Nom auteur</label>
            <md-input v-model="nomAuteur"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Prénom auteur</label>
            <md-input v-model="prenomAuteur"></md-input>
          </md-input-container>
          <md-button v-on:click="postAuthor" class="md-raised md-primary">Enregistrer</md-button>
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
        nomAuteur :'',
        prenomAuteur:'',
        test:{},
      }
    },
    methods: {
   postAuthor(){
     this.author= JSON.stringify({
       "nom":this.nomAuteur,
       "prenom":this.prenomAuteur,
       "dateDeNaiss": {}
     })
     console.log(this.author);
     axios.post('http://localhost:8080/auteur',this.author)
   .then(function (response) {
     alert("insertion faite !")
     console.log(response);
   })
   .catch(function (error) {
   console.log("erreur: "+ error +" veuillez recommencer...")
   })
   },
 },
}
</script>
<style>

</style>
