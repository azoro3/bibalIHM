<template>
  <div id="usager">
    <md-whiteframe md-elevation="24">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>Date de début</md-table-head>
                <md-table-head>Date de fin</md-table-head>
                <md-table-head>id exemplaire</md-table-head>
                <md-table-head>etat de l'emprunt</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="item in items" :key="id">
                <md-table-cell>{{item.dateDebut}}</md-table-cell>
                <md-table-cell>{{item.dateFin}}</md-table-cell>
                <md-table-cell>{{item.id}}</md-table-cell>
                <md-table-cell>{{item.etat}}</md-table-cell>
                <md-table-cell>
                  <md-button v-on:click="delUser(item.id)" class="md-icon-button">
                    <md-icon>delete</md-icon>
                  </md-button>
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </md-layout>
      </md-layout>
      <router-link tag="md-button" to="Home" class="md-raised md-primary">
        <i class="material-icons">home</i>
      </router-link>
    </md-whiteframe>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    affichage() {
      console.log(this.items);
      self = this;
      axios.get('http://localhost:8080/gestion/emprunts/')
        .then(function(response) {
          console.log(response.data._embedded.emprunts)
          self.items = response.data._embedded.emprunts
        })
        .catch(function(error) {
          console.log("erreur: " + error + " veuillez recommencer...")
        })

    },
    delUser(id) {
      axios.delete('http://localhost:8080/gestion/emprunt/' + id).then(function(response) {
        console.log("ok")
        window.location.reload(true)
      }).catch(function(error) {
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
