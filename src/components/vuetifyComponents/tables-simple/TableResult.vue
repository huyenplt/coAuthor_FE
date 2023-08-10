<template>
  <div>
    <div
      v-if="authors.length === 0"
      class="d-flex flex-column"
      style="height:530px; padding-top: 80px"
    >
      <div class="" style="width: 70%">
        <h6
          class="subtitle-2 blue-grey--text text--darken-2 font-weight-regular"
        >
          Tham số phân cụm
        </h6>
        <div class="d-flex">
          <v-text-field
            class="mr-5"
            label="Số cụm"
            filled
            background-color="transparent"
            disabled
            value="2"
          ></v-text-field>
          <v-text-field
            class="mr-5"
            label="Hệ số mờ hoá M"
            filled
            background-color="transparent"
            v-model="m_param"
          ></v-text-field>
          <v-text-field
            class="mr-5"
            label="Hệ số mờ hoá M'"
            filled
            background-color="transparent"
            v-model="m_phay_param"
          ></v-text-field>
        </div>
      </div>
      <div class="pt-5">
        <v-btn
          @click="handleClick"
          class="text-capitalize element-0"
          color="success"
          >Run sSMC_FCM</v-btn
        >
      </div>
    </div>
    <div v-else>
      <div v-show="showAlert">
        <v-alert type="success">Import candidate table sucessfully! </v-alert>
      </div>
      <v-list-item-subtitle class="text-wrap d-flex justify-space-between">
        <div>
          <div>{{ authors.length }} records</div>
          <div class="d-flex">
            <div class="font-weight-bold mr-4">
              Label 0 :
              {{ authors.filter((author) => author.label == 0).length }}
            </div>
            <div class="font-weight-bold mr-4">
              Label 1 :
              {{ authors.filter((author) => author.label == 1).length }}
            </div>
            <div class="font-weight-bold">
              No Label :
              {{ authors.filter((author) => author.label == null).length }}
            </div>
          </div>
        </div>
        <!-- <div class="d-flex justify-end mr-5">
          <v-btn
            @click="handleClickImport"
            class="text-capitalize element-0"
            color="success"
            >EXPORT</v-btn
          >
        </div> -->
      </v-list-item-subtitle>
      <div class="mt-4">
        <v-simple-table height="530px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Author 1</th>
                <th class="text-left">Author 2</th>
                <th class="text-left">Label</th>
                <th class="text-left">CN</th>
                <th class="text-left">AA</th>
                <th class="text-left">JC</th>
                <th class="text-left">RA</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in authors" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.author_id1 }}</td>
                <td>{{ item.author_id2 }}</td>
                <td>{{ item.label }}</td>
                <td>{{ item.measure1 }}</td>
                <td>{{ item.measure2 }}</td>
                <td>{{ item.measure3 }}</td>
                <td>{{ item.measure4 }}</td>
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
    showAlert: false,
    m_param: null,
    m_phay_param: null,
  }),

  computed: {},

  methods: {
    handleClickImport() {
      this.showAlert = !this.showAlert;
    },
    async handleClick() {
      // let requestBody;
      // if (this.m_param !== null && this.m_phay_param !== null) {
      //   requestBody = {
      //     m_param: this.m_param,
      //     m_phay_param: this.m_phay_param
      //   }
      // }

      await axios.get(`http://127.0.0.1:8000/api/coauthor/test`);

      // await axios.post(
      //   `http://127.0.0.1:8000/api/coauthor/test`, requestBody
      // );

      const response2 = await axios.get(
        "http://127.0.0.1:8000/api/coauthor/getCandidates"
      );
      this.authors = response2.data;
    },
  },
};
</script>
