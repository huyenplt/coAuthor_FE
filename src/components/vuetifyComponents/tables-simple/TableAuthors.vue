<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TableSimpleFixHeight -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      {{ authors.length }} records
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-simple-table height="700px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Name</th>
              <th class="text-left">View</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in authors" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>
                <v-btn
                  @click="handleRedirect(item.id)"
                  class="text-capitalize element-0"
                  color="success"
                  >View details</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TableSimpleFixHeight",

  created() {
    axios
      .get("http://127.0.0.1:8000/api/authors")
      .then((response) => {
        this.authors = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data: () => ({
    authors: [],
  }),

  methods: {
    handleRedirect(id) {
      console.log(id);
      this.$router.push(`author/${id}`);
    },
  },
};
</script>
