<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text class="text-center pa-7">
            <img
              src="https://media.istockphoto.com/id/1337144146/vi/vec-to/vector-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-h%E1%BB%93-s%C6%A1-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh.jpg?s=612x612&w=0&k=20&c=u24Lv6ta-n_-pQwnru8iwCaFysSloBwVs-LhtqxCSCw="
              alt="user"
              width="150px"
              class="img-fluid rounded-circle shadow-sm"
            />
            <h4
              class="mt-2 title blue-grey--text text--darken-2 font-weight-regular"
            >
              {{ author.name }}
            </h4>
            <h6 class="subtitle-2 font-weight-light"></h6>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-text>
            <h3
              class="title blue-grey--text text--darken-2 font-weight-regular"
            >
              Information
            </h3>
            <v-list-item-subtitle class="text-wrap mt-3"
              ><span class="grey--text text--darken-4 font-weight-bold"
                >Paper :
              </span></v-list-item-subtitle
            >
            <div class="d-flex flex-column">
              <router-link
                class="d-inline-block mr-3"
                v-for="item in author.papers"
                :key="item.id"
                :to="`/paper/${item.id}`"
                >{{ item.title }} - {{ item.year }}</router-link
              >
            </div>
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
