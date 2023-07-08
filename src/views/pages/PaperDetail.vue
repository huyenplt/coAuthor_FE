<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" lg="12">
            <BaseCard :heading="paper.title">
                <Paper :paper="paper"></Paper>
            </BaseCard>
        </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "PaperDetail",

created() {
    axios
      .get(`http://127.0.0.1:8000/api/papers/${this.$route.params.id}`)
      .then((response) => {
        this.paper = response.data;
      })
      .catch((error) => {
        console.log(error)
      });
  },
  data: () => ({
    paper: {}
  }),
  components: {
      Paper: () => import('@/components/vuetifyComponents/alerts/Paper'),
  }
};
</script>
