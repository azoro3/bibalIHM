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
              <md-table-row v-for="item in items">
                <md-table-cell>{{item.nom}}</md-table-cell>
                <md-table-cell>{{item.prenom}}</md-table-cell>
                <md-table-cell>{{item.mail}}</md-table-cell>
                <md-table-cell>
                  <md-button class="md-icon-button">
                    <md-icon>delete</md-icon>
                  </md-button>
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
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
        items:[]
      }
    },
    methods: {
   affichage(){
     self=this;
     axios.get('http://localhost:8080/user')
      .then(function (response)
        {
          self.items=response.data._embedded.usagers
        })
      .catch(function (error)
        {
          alert("erreur: "+ error +" veuillez recommencer...")
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
