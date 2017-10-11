<template>
  <div id="usager">
    <md-whiteframe md-elevation="24">
      <md-layout md-align="center" md-gutter>
        <md-layout md-flex="35">
          <md-table>
            <md-table-header>
              <md-table-row>
                <md-table-head>Nom</md-table-head>
                <md-table-head>Prénom</md-table-head>
                <md-table-head>Mail</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="item in items" :key="id">
                <md-table-cell>{{item.nom}}</md-table-cell>
                <md-table-cell>{{item.prenom}}</md-table-cell>
                <md-table-cell>{{item.mail}}</md-table-cell>
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
      axios.get('http://localhost:8080/user')
        .then(function(response) {
          self.items = response.data._embedded.usagers
        })
        .catch(function(error) {
          console.log("erreur: " + error + " veuillez recommencer...")
        })

    },
    delUser(id) {
      axios.delete('http://localhost:8080/user/' + id).then(function(response) {
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
