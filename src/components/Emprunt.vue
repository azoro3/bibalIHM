<template>
  <div id="exemplaire">
    <md-whiteframe md-elevation="1">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <md-select v-model="oeuvre">
              <md-option v-for="item in magazines" :key="item.id" :value="item">
                {{ item.nom }}
              </md-option>
            </md-select>
            <md-select v-model="oeuvre">
              <md-option v-for="item in livres" :key="item.id" :value="item">
                {{ item.nom }}
              </md-option>
            </md-select>
          </md-input-container>
          <md-input-container>
            <label>Date de début de réservation</label>
            <md-input v-model="dateD"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Date de fin de réservation</label>
            <md-input v-model="dateF"></md-input>
          </md-input-container>
          <md-input-container>
            <md-select v-model="exemplaire">
              <md-option v-for="item in exemplaires" :key="item.id" :value="item">
                {{ item.nom }}
              </md-option>
            </md-select>
  <md-button v-on:click="searchExemplaire" class="md-raised md-primary">
    <i class="material-icons">search</i>
  </md-button>
          </md-input-container>
          <md-input-container>
            <md-select v-model="user">
              <md-option v-for="item in users" :key="item.id" :value="item">
                {{ item.nom }}
              </md-option>
            </md-select>
          </md-input-container>
          <md-button v-on:click="enregistrerReservation" class="md-raised md-primary">Enregistrer</md-button>
          <md-button v-on:click="modifierExemplaire" class="md-raised md-primary">Modifier</md-button>
          <router-link tag="md-button" to="Home" class="md-raised md-primary">Home</router-link>
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
      dateD: '',
      dateF: '',
      etat: 'EN_COURS',
      magazines: [],
      livres: [],
      exemplaires: [],
      exemplaire: [],
      oeuvre :[],
      users: []
    }
  },
  methods: {
    enregistrerReservation() {
      this.test = JSON.stringify({
        "date_debut": this.dateD,
        "date_fin": this.dateF,
        "oeuvre_id": this.selectedItem.id,
        "usager_id": this.user.id,
        "reservations": this.etat
      })
      console.log(this.test)
      axios.post('http://localhost:8080/oeuvre/' + this.selectedItem.id + "/exemplaire/", this.test)
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
          self.magazines = response.data._embedded.magazines
          self.livres = response.data._embedded.livres
        })
        .catch(function(error) {
          console.log("erreur: " + error + " veuillez recommencer...")
        })
      axios.get('http://localhost:8080/user/')
        .then(function(response) {
          self.users = response.data._embedded.usagers
        })
        .catch(function(error) {
          console.log("erreur: " + error + " veuillez recommencer...")
        })
    },
    searchExemplaire(){
    axios.get('http://localhost:8080/oeuvre/' + this.oeuvre.id+'/exemplaire/')
      .then(function(response) {
        self.exemplaires = response.data
        console.log(this.exemplaires)
      })
      .catch(function(error) {
        console.log("erreur: " + error + " veuillez recommencer...")
      })
    }
  },
  mounted() {
    this.affichage()

  }
}
</script>
<style>

</style>
