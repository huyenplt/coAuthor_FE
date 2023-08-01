<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="12">
        <v-card>
          <v-card-text>
            <h3
              class="title blue-grey--text text--darken-2 font-weight-regular mb-5"
            >
            Thêm tác giả
            </h3>
            <div class="d-flex">
                 <v-autocomplete
                 class="mr-5 mb-5"
                  ref="country"
                  v-model="authorSearch"
                  :rules="[() => !!authorSearch || 'This field is required']"
                  label="Tên"
                  placeholder="Nhập tên tác giả"
                  required
                ></v-autocomplete>
                <v-autocomplete
                  ref="country"
                  v-model="authorSearch"
                  label="Email"
                  placeholder="Nhập email tác giả"
                ></v-autocomplete>
            </div>
                <v-autocomplete
                  ref="country"
                  v-model="authorSearch"
                  :items="authors"
                  label="Quốc tịch"
                  placeholder="Chọn quốc tịch"
                  required
                ></v-autocomplete>
            <div class="d-flex flex-column">
              <router-link
                class="d-inline-block mr-3"
                v-for="item in author.papers"
                :key="item.id"
                :to="`/paper/${item.id}`"
                >{{ item.title }} - {{ item.year }}</router-link
              >
            </div>
            <div class="d-flex mt-5">
                 <v-autocomplete
                 class="mr-5 mb-5"
                  ref="country"
                  v-model="authorSearch"
                  label="Nơi nghiên cứu"
                  placeholder="Nhập nơi nghiên cứu"
                ></v-autocomplete>
                <v-autocomplete
                  ref="country"
                  v-model="authorSearch"
                  label="Lĩnh vực nghiên cứu"
                  placeholder="Nhập lĩnh vực nghiên cứu"
                ></v-autocomplete>
            </div>
            <v-autocomplete
                  ref="country"
                  v-model="authorSearch"
                  label="Bài báo đã xuất bản"
                ></v-autocomplete>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "AuthorDetail",

  created() {
    axios
      .get(`http://127.0.0.1:8000/api/authors/${this.$route.params.id}`)
      .then((response) => {
        console.log(response.data);
        this.author = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data: () => ({
    author: {},
  }),
  components: {},
};
</script>
