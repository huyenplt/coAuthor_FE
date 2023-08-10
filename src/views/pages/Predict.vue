<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Thông tin gợi ý" style="height: 530px">
          <div class="d-flex flex-column">
            <div class="" style="width: 70%; padding-top:80px">
              <div class="d-flex">
                <v-autocomplete
                  ref="country"
                  v-model="authorSearch"
                  :rules="[() => !!authorSearch || 'This field is required']"
                  :items="authors.map((item) => item.name)"
                  label="Author"
                  placeholder="Search an author"
                  required
                ></v-autocomplete>
              </div>
            </div>
            <div class="mt-2">
            <v-btn
              @click="handleSearch"
              class="text-capitalize element-0 mt-5"
              color="success"
              >Search</v-btn
            >
            </div>
          </div>
          <div class="mt-4">
            <v-simple-table v-if="coauthors.length" height="700px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">#</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Measures(CN, AA, JC, RA)</th>
                    <th class="text-left">View</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in coauthors" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.info.name }}</td>
                    <td>{{ `${item.measure1}, ${item.measure2}, ${item.measure3}, ${item.measure4}` }}</td>
                    <td>
                      <v-btn
                        @click="handleRedirect(item.info.id)"
                        class="text-capitalize element-0"
                        color="success"
                        >View details</v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <span style="color:red" v-else>{{textResult}}</span>
          </div>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "TableCoAuthor",
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
    authorSearch: "",
    coauthors: [],
    textResult: "",
  }),

  computed: {},

  methods: {
    async handleSearch() {
      const id = this.authors.find((item) => item.name == this.authorSearch).id;
      const predictResults = await axios.get(
        `http://127.0.0.1:8000/api/coauthor/predict/${id}`
      );
      const result = predictResults.data;
      if (result.length !== 0) {
        result.forEach((element) => {
            let coauthor = {
                info: this.authors.find((item) => item.id == element.author_id2),
                measure1: element.measure1,
                measure2: element.measure2,
                measure3: element.measure3,
                measure4: element.measure4,
            }
          this.coauthors.push(coauthor);
        });
      } else this.textResult = "No data found";
    },

    handleRedirect(id) {
      console.log(id);
      this.$router.push(`author/${id}`);
    },
  },
};
</script>
