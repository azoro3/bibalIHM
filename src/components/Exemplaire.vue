<template>
    <div id="exemplaire">
      <md-whiteframe md-elevation="1">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <md-select v-model="selectedItem">
              <md-option v-for="item in items" :key="item.id" :value="item">
                {{ item.nom }}
              </md-option>
            </md-select>
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
        items: [],
        selectedItem: []
      }
    },
    methods: {
   registerExemplaire(){
     //enrgistrer un nouvel exemplaire
     alert("not implemented yet")
   },
   modifierExemplaire(){
     //modifier un exemplaire existant
     alert("not implemented yet")
   },
   affichage() {
     self = this;
     axios.get('http://localhost:8080/oeuvre/')
       .then(function(response)
       {
         self.items[0] = response.data._embedded.magazines
         self.items[1] = response.data._embedded.livres
         //self.items+="\n" +response.data._embedded.livres
         console.log(self.items)
       })
       .catch(function(error) {
         console.log("erreur: " + error + " veuillez recommencer...")
       })

   },
    },
    mounted() {
      this.affichage()

    } 
 }
</script>
<style>

</style>
