<template>
  <div id="exemplaire">
    <md-whiteframe md-elevation="1">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-input-container>
            <!-- livre + oeuvre -->
            <md-select v-model="selectedItem">
              <md-option v-for="item in oeuvres" :key="item.id" :value="item">
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
            <md-select v-model="userValue">
              <md-option v-for="item in users" :key="item.id" :value="item">
                {{ item.nom }}
              </md-option>
            </md-select>
          </md-input-container>
          <md-button v-on:click="enregistrerReservation" class="md-raised md-primary">réserver</md-button>
          <router-link tag="md-button" to="Home" class="md-raised md-primary"><i class="material-icons">home</i></router-link>
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
      etat: 'EN_COURS',
      oeuvres: [],
      items3: [],
      selectedItem: [],
      userValue: [],
      users: []
    }
  },
  methods: {
    enregistrerReservation() {
      this.test = JSON.stringify({
        "date_debut": this.dateD,
        "date_fin": this.dateF,
        "oeuvre_id": this.selectedItem.idOeuvre,
        "usager_id": this.userValue.id,
        "reservations": this.etat
      })
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
          self.oeuvres = response.data
        })
        .catch(function(error) {
          console.log("erreur: " + error + " veuillez recommencer...")
        })
      axios.get('http://localhost:8080/user/')
        .then(function(response) {
          console.log(response)
          self.users = response.data._embedded.usagers
        }).catch(function(error) {
          console.log(error)
        })
    },
    searchExemplaire() {
      self = this
      axios.get('http://localhost:8080/oeuvre/' + this.selectedItem.id + '/exemplaire/').then(function(response) {
        console.log(response.data["0"].id)
        self.items3 = response.data
      }).catch(function(error) {
        console.log(error)
        alert("Aucun exemplaire disponible")
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

