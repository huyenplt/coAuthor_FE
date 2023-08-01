<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TableSimpleFixHeight -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <div v-if="authors.length === 0" class="d-flex justify-center">
      <v-btn
        @click="handleClick"
        class="text-capitalize element-0"
        color="success"
        >CREATE CO-AUTHOR TABLE</v-btn
      >
    </div>
    <div v-else>
      <div v-show="showAlert">
        <v-alert type="success">Import co-author table sucessfully! <a @click="handleChaneRoute">Go to create Candidate table</a>
        </v-alert>
      </div>
      <div class="d-flex justify-end mr-5">
        <v-btn
          @click="handleClickImport"
          class="text-capitalize element-0"
          color="success"
          >EXPORT CO-AUTHORS TABLE</v-btn
        >
      </div>
      <v-list-item-subtitle class="text-wrap">
        {{ authors.length }} records
      </v-list-item-subtitle>
      <div class="mt-4">
        <v-simple-table fixed-header height="700px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Author 1</th>
                <th class="text-left">Author 2</th>
                <th class="text-left">Paper</th>
                <th class="text-left">Publish year</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in authors" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.author_id1 }}</td>
                <td>{{ item.author_id2 }}</td>
                <td>{{ item.paper_id }}</td>
                <td>{{ item.paper_year }}</td>
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
      .get("http://127.0.0.1:8000/api/coauthor")
      .then((response) => {
        this.authors = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data: () => ({
    authors: [],
    showAlert: false
  }),

  methods: {
    handleClick() {
      axios
        .get("http://127.0.0.1:8000/api/coauthor/import")
        .then((response) => {
          this.authors = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleClickImport() {
      this.showAlert = !this.showAlert
    },
    handleChaneRoute() {
      this.$router.push('/co-author/candidate');
    }
  },
};
</script>
