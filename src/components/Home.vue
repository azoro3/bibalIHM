<template>
  <div id="home">
      <md-layout md-align="center" md-gutter="55" md-column>
        <md-layout md-flex="25">
        <md-layout>
          <router-link tag="md-button" to="User" class="md-raised md-primary">Ajout usager</router-link>
          <router-link tag="md-button" to="DelUser" class="md-raised md-primary">Suppression usager</router-link>
        </md-layout>
        <md-layout>
          <router-link tag="md-button" to="Oeuvre" class="md-raised md-primary">Gestion oeurve</router-link>
        </md-layout>
        <md-layout>
          <router-link tag="md-button" to="Exemplaire" class="md-raised md-primary">Gestion exemplaire</router-link>
          <router-link tag="md-button" to="Reservation" class="md-raised md-primary">Emprunter exemplaire</router-link>
          <router-link tag="md-button" to="Emprunt" class="md-raised md-primary">Réserver exemplaire</router-link>
          <router-link tag="md-button" to="Rendu" class="md-raised md-primary">Rendre exemplaire</router-link>
        </md-layout>
        </md-layout>
      </md-layout>
  </div>
</template>
<script>
</script>
<style>
</style>
