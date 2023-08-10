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
      <div
        v-if="authors.length === 0"
        class="d-flex justify-center flex-column"
      >
        <div style="color:red">Chưa có dữ liệu bảng đồng tác giả</div>
        <div
          v-if="isLoading1"
          class="loading d-flex justify-content-center"
          style="justify-content: center; padding: 50px"
        >
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
        <div class="d-flex justify-center mt-5">
          <v-btn
            @click="handleClick"
            class="text-capitalize element-0"
            color="success"
            :disabled="isLoading1"
            >TẠO BẢNG ĐỒNG TÁC GIẢ</v-btn
          >
        </div>
      </div>
      <div v-else>
        <!-- <div class="d-flex justify-end mr-5">
        <v-btn
          @click="exportToCsv"
          class="text-capitalize element-0"
          color="success"
          >EXPORT</v-btn
        >
      </div> -->
        <v-list-item-subtitle class="text-wrap">
          {{ authors.length }} records
        </v-list-item-subtitle>
        <div class="mt-4">
          <v-simple-table fixed-header height="530px">
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
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  },

  data: () => ({
    authors: [],
    showAlert: false,
    isLoading: true,
    isLoading1: false,
  }),

  methods: {
    handleClick() {
      this.isLoading1 = true;
      axios
        .get("http://127.0.0.1:8000/api/coauthor/import")
        .then((response) => {
          this.authors = response.data;
          this.isLoading1 = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading1 = false;
        });
    },

    handleClickImport() {
      this.showAlert = !this.showAlert;
    },
    handleChaneRoute() {
      this.$router.push("/co-author/candidate");
    },
  },
};
</script>
