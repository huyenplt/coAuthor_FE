<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TableSimpleFixHeight -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div v-if="authors.length === 0" class="d-flex justify-center flex-column align-center">
      <v-text-field
        v-model="split_year"
        label="Split year"
        filled
        background-color="transparent"
      ></v-text-field>
      <v-btn
        @click="handleClick"
        class="text-capitalize element-0"
        color="success"
        >CREATE CANDIDATE TABLE</v-btn
      >
    </div>
    <div v-else>
      <v-list-item-subtitle class="text-wrap">
        {{ authors.length }} records
      </v-list-item-subtitle>
      <div class="mt-4">
        <v-simple-table height="700px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Author 1</th>
                <th class="text-left">Author 2</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in authors" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.author_id1 }}</td>
                <td>{{ item.author_id2 }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TableCoAuthor",

  created() {
    axios
      .get("http://127.0.0.1:8000/api/coauthor/getCandidates")
      .then((response) => {
        this.authors = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data: () => ({
    authors: [],
    split_year: ''
  }),

  methods: {
    handleClick() {
      axios
        .get(`http://127.0.0.1:8000/api/coauthor/importCandidate/${this.split_year}`)
        .then((response) => {
          this.authors = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
