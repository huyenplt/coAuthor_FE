<template>
  <div>
    <v-list-item-subtitle class="text-wrap d-flex">
      <div><v-icon>mdi-calendar-blank-multiple</v-icon> Publish year: {{ paper.year }}</div>
      <div class="ml-3">
        <div>
            <v-icon>mdi-account-circle</v-icon> Authors:
            <router-link
                class="d-inline-block mr-3"
                v-for="item in paper.authors"
                :key="item.id"
                :to="`/author/${item.id}`"
                >{{ item.name }}</router-link
              >
        </div>
      </div>
    </v-list-item-subtitle>
    <v-list-item-subtitle class="text-wrap mt-3"><span class="grey--text text--darken-4 font-weight-bold">Abstract : </span> {{paper.abstract}}</v-list-item-subtitle>
    <v-list-item-subtitle class="text-wrap mt-3"><span class="grey--text text--darken-4 font-weight-bold">PDF : </span> {{paper.pdf_name}}</v-list-item-subtitle>
    <v-list-item-subtitle class="text-wrap mt-3"><span class="grey--text text--darken-4 font-weight-bold">Summary : </span></v-list-item-subtitle>
      <v-alert text outlined color="info"
        >{{paper.paper_text}}</v-alert
      >
  </div>
</template>

<script>
export default {
  name: "Paper",

  props: ["paper"],

  data: () => ({}),
};
</script>
