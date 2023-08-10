<template>
  <div>
    <div
      v-if="isLoading"
      class="loading d-flex justify-content-center"
      style="justify-content: center; height: 530px; padding-top: 50px"
    >
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-else>
      <v-list-item-subtitle class="text-wrap d-flex justify-space-between">
        {{ displayData.length }} tác giả
        <div class="mr-5">
          <v-text-field
            label="Tìm kiếm"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            v-model="search"
            @input="handleSearch"
          ></v-text-field>
        </div>
      </v-list-item-subtitle>
      <div>
        <v-simple-table height="530px" fixed-header>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Tên tác giả</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in displayData" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>
                  <v-btn
                    @click="handleRedirect(item.id)"
                    class="text-capitalize element-0"
                    color="success"
                    >Xem chi tiết</v-btn
                  >
                </td>
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
  name: "TableSimpleFixHeight",

  created() {
    axios
      .get("http://127.0.0.1:8000/api/authors")
      .then((response) => {
        this.authors = response.data;
        this.displayData = response.data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  },

  data: () => ({
    authors: [],
    displayData: [],
    isLoading: true,
    search: ""
  }),

  methods: {
    handleRedirect(id) {
      this.$router.push(`author/${id}`);
    },

    handleSearch() {
      this.displayData = this.authors.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
};
</script>
