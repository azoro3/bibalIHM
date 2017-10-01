<template>
    <div id="reservation">
      <md-whiteframe md-elevation="1">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <label>Date réservation</label>
            <md-input v-model="dateR"></md-input>
          </md-input-container>
          <md-input-container>
      <label for="etat">Etat réservation</label>
      <md-select name="etat" id="etat" v-model="etat">
        <md-option value="ENCOURS">En cours</md-option>
        <md-option value="ANNULE">Annulé</md-option>
      </md-select>
    </md-input-container>
      <md-input-container>
        <label>Nom</label>
        <md-input v-model="nom"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Prénom</label>
        <md-input v-model="prenom"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Numéro exemplaire</label>
        <md-input v-model="noExemplaire"></md-input>
      </md-input-container>
      <md-button v-on:click="reserverExemplaire" class="md-raised md-primary">Réserver</md-button>
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
        dateR: '',
        etat: '',
        nom: '',
        prenom: '',
        noExemplaire: '',
      }
    },
    methods: {
   reserverExemplaire(){
     alert("not implemented yet")
   },
   modifierExemplaire(){
     alert("not implemented yet")
   },
 },
}
</script>
<style>

</style>
