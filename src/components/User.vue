<template>
    <div id="usager">
      <md-whiteframe md-elevation="24">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <label>Nom</label>
            <md-input v-model="name"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Prénom</label>
            <md-input v-model="surname"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Email</label>
            <md-input v-model="mail"></md-input>
          </md-input-container>
          <md-button v-on:click="registerUser" class="md-raised md-primary"><i class="material-icons">person_add</i></md-button>
          <router-link tag="md-button" to="Home" class="md-raised md-primary"><i class="material-icons">home</i></router-link>
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
        name :'',
        surname:'',
        mail:'',
        test:{},
      }
    },
    methods: {
   registerUser(){
     this.test= JSON.stringify({
       "nom":this.name,
       "prenom":this.surname,
       "mail":this.mail
     })
     axios.post('http://localhost:8080/user',this.test)
   .then(function (response) {
     alert("insertion faite !")
     console.log(response);
   })
   .catch(function (error) {
   alert("erreur: "+ error +" veuillez recommencer...")
   })
   },
 },
}
</script>
<style>

</style>
