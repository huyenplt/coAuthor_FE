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
        >LABELED CANDIDATE TABLE</v-btn
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
                <th class="text-left">Label</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in authors" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.author_id1 }}</td>
                <td>{{ item.author_id2 }}</td>
                <td>{{ item.label }}</td>
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

  data: () => ({
    authors: [],
  }),

  methods: {
    async handleClick() {
      try {
        const response2 = await axios.get("http://127.0.0.1:8000/api/coauthor/getCandidates");
        this.authors = response2.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
