<template>
    <div id="livre">
      <md-whiteframe md-elevation="24">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <label>Titre</label>
            <md-input v-model="titre"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Auteur</label>
            <md-input v-model="auteur"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Email</label>
            <md-input v-model="mail"></md-input>
          </md-input-container>
          <md-button v-on:click="registerUser" class="md-raised md-primary">Enregistrer</md-button>
          <md-button v-on:click="deleteUser" class="md-raised md-primary">Supprimer</md-button>
          <router-link tag="md-button" to="Home" class="md-raised md-primary">Home</router-link>
        </md-layout>
      </md-layout>
    <md-whiteframe>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        name :'',
        surname:'',
        mail:''
      }
    },
    methods: {
   registerUser(){
     var json='{"nom":"' + this.name + '","prenom":"' + this.surname + '","mail":"' + this.mail + '"}'
     axios.post('/user',json)
   .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   })
     //add user
   },
   deleteUser(){
     //delete user.
   },
 },
}
</script>
<style>

</style>
