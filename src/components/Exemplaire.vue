<template>
    <div id="exemplaire">
      <md-whiteframe md-elevation="1">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <label>Nom de l'oeuvre</label>
            <md-autocomplete v-model="nomOeuvre" :fetch="fetchFunction"></md-autocomplete>
          </md-input-container>
          <md-input-container>
            <label>Date d'achat</label>
            <md-input v-model="dateA"></md-input>
          </md-input-container>
          <md-input-container>
      <label for="etat">Etat du livre</label>
      <md-select name="etat" id="etat" v-model="etat">
        <md-option value="NEUF">Neuf</md-option>
        <md-option value="ABIME">Abimé</md-option>
        <md-option value="JETER">A jeter</md-option>
      </md-select>
    </md-input-container>
      <md-button v-on:click="registerExemplaire" class="md-raised md-primary">Enregistrer</md-button>
      <md-button v-on:click="modifierExemplaire" class="md-raised md-primary">Modifier</md-button>
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
        dateA: '',
        etat: '',
      }
    },
    methods: {
   registerExemplaire(){
     //enrgistrer un nouvel exemplaire
     alert("not implemented yet")
   },
   modifierExemplaire(){
     //modifier un exemplaire existatnt
     alert("not implemented yet")
   },
   fetchFunction(){
     axios.get('http://localhost:8080/oeuvre').then(function(response){
       console.log(resopnse);
     })
   },
 },
}
</script>
<style>

</style>
