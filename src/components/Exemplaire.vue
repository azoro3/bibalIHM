<template>
  <div id="exemplaire">
    <md-whiteframe md-elevation="1">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <md-select v-model="selectedItem">
              <md-option v-for="item in items1" :key="item.idOeuvre" :value="item">
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
              <md-option value="1">Neuf</md-option>
              <md-option value="2">Abimé</md-option>
              <md-option value="3">A jeter</md-option>
            </md-select>
          </md-input-container>
          <md-button v-on:click="registerExemplaire" class="md-raised md-primary">
            enregistrer exemplaire
          </md-button>
          <router-link tag="md-button" to="Home" class="md-raised md-primary">
            <i class="material-icons">home</i>
          </router-link>
        </md-layout>
      </md-layout>
    </md-whiteframe>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      dateA: '',
      etat: '',
      items1: [],
      items2: [],
      selectedItem: []
    }
  },
  methods: {
    registerExemplaire() {
      console.log(this.selectedItem)
      this.test = JSON.stringify({
        "date_achat": this.dateA,
        "etat": this.etat,
        "oeuvre_id": this.selectedItem.idOeuvre
      })
      console.log
      axios.post('http://localhost:8080/oeuvre/' + this.selectedItem.idOeuvre + "/exemplaire/", this.test)
        .then(function(response) {
          alert("insertion faite !")
          console.log(response);
        })
        .catch(function(error) {
          alert("erreur: " + error + " veuillez recommencer...")
        })
    },
    modifierExemplaire() {
      //modifier un exemplaire existant
      alert("not implemented yet")
    },
    affichage() {
      self = this;
      axios.get('http://localhost:8080/oeuvre/')
        .then(function(response) {
          self.items1 = response.data
          console.log(response)
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
