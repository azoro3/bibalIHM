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
            <md-select v-model="selectedItem">
              <md-option v-for="item in items" :key="item.id" :value="item">
                {{ item.nom }} {{item.prenom}}
              </md-option>
            </md-select>
          </md-input-container>
          <md-button v-on:click="registerBook" class="md-raised md-primary">Enregistrer livre</md-button>
          <router-link tag="md-button" to="Home" class="md-raised md-primary">
            <i class="material-icons">home</i>
          </router-link>
        </md-layout>
      </md-layout>
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="25">
          <md-input-container>
            <label>Date</label>
            <md-input v-model="date"></md-input>
          </md-input-container>
          <md-button v-on:click="registerMagazine" class="md-raised md-primary">Enregistrer magazine</md-button>
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
      titre: '',
      synopsis: '',
      date: '',
      items: [],
      selectedItem: []
    }
  },
  methods: {
    registerBook() {
      self=this
      this.test = JSON.stringify({
        "id_oeuvre": null,
        "nom": this.titre,
        "synopsis": this.synopsis,
        "auteur_id_auteur": this.selectedItem.id_auteur
      })
      axios.post('http://localhost:8080/oeuvre/livre/' + this.selectedItem.id, this.test)
        .then(function(response) {
          alert("insertion faite !")
        })
        .catch(function(error) {
          alert("erreur, veuillez recommencer...")
          console.log(error)
        })
    },

    registerMagazine() {
      this.test = JSON.stringify({
        "nom": this.titre,
        "synopsis": this.synopsis,
        "date": this.date
      })
      console.log(this.date)
      axios.post('http://localhost:8080/oeuvre/magazine/', this.test)
        .then(function(response) {
          alert("insertion faite !")
          console.log(response);
        })
        .catch(function(error) {
          alert("erreur: " + error + " veuillez recommencer...")
        })
    },
    affichage() {
      self = this;
      axios.get('http://localhost:8080/oeuvre/auteur/')
        .then(function(response) {
          self.items = response.data._embedded.auteurs
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
