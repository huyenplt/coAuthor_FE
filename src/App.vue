<template>
  <v-app id="materialpro" :class="`${!$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'full-sidebar'}`">
      <router-view />
  </v-app>

</template>

<script>

export default {
  name: 'App',

  components: {
    
  }

};
</script>
