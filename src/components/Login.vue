<template lang="html">
  <div id="login">
    <md-whiteframe md-elevation="1">
    <md-layout md-align="center" md-gutter>
      <md-layout md-flex="35">
        <md-input-container>
          <label>login</label>
          <md-input v-model="login"></md-input>
        </md-input-container>
        <md-input-container md-has-password>
          <label>Password</label>
          <md-input type="password"></md-input>
        </md-input-container>
    <md-button v-on:click="login" class="md-raised md-primary">Connexion</md-button>
  </md-layout>
  </md-layout>
  </md-whiteframe>
  </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
