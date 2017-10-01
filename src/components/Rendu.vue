<template>
    <div id="exemplaire">
      <md-whiteframe md-elevation="1">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <label>numéro du livre</label>
            <md-input v-model="noExemplaireRendu"></md-input>
          </md-input-container>
          <md-input-container>
      <label for="movie">Etat du livre rendu</label>
      <md-select name="etat" id="etat" v-model="etat">
        <md-option value="NEUF">Neuf</md-option>
        <md-option value="ABIME">Abimé</md-option>
        <md-option value="JETER">A jeter</md-option>
      </md-select>
    </md-input-container>
      <md-button v-on:click="registerExemplaire" class="md-raised md-primary">Rendre</md-button>
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
        noExemplaireRendu: '',
        etat: '',
      }
    },
    methods: {
   registerExemplaire(){
     //rendre un exemplaire
     alert("not implemented yet")
   },
 },
}
</script>
<style>

</style>
