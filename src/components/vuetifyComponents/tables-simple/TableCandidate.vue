<template>
  <div>
    <div v-if="authors.length === 0" class="d-flex justify-center flex-column">
      <div class="" style="width: 30%">
        <h6
          class="subtitle-2 blue-grey--text text--darken-2 font-weight-regular"
        >
          Chọn khoảng thời gian T1
        </h6>
        <div class="d-flex">
          <v-autocomplete
            required
            class="mr-4"
            v-model="T1BeginSelected"
            :items="optionsBeginT1"
            label="Năm bắt đầu"
            background-color="transparent"
            filled
        :disabled="isLoading1"

          ></v-autocomplete>
          <v-autocomplete
            required
            v-model="T1EndSelected"
            :items="optionsEndT1"
            filled
            label="Năm kết thúc"
            background-color="transparent"
        :disabled="isLoading1"

          ></v-autocomplete>
        </div>
        <h6
          class="subtitle-2 blue-grey--text text--darken-2 font-weight-regular mt-5"
        >
          Chọn khoảng thời gian T2
        </h6>
        <div class="d-flex">
          <v-autocomplete
            required
            class="mr-4"
            v-model="T2BeginSelected"
            :items="optionsBeginT2"
            filled
            label="Năm bắt đầu"
            background-color="transparent"
        :disabled="isLoading1"

          ></v-autocomplete>
          <v-autocomplete
            required
            v-model="T2EndSelected"
            :items="optionsEndT2"
            filled
            label="Năm kết thúc"
            background-color="transparent"
        :disabled="isLoading1"

          ></v-autocomplete>
        </div>
        <h6
          class="subtitle-2 blue-grey--text text--darken-2 font-weight-regular mt-5"
        >
          Chọn các độ đo
        </h6>
        <div class="d-flex">
          <v-autocomplete
            required
            v-model="selectedValues"
            :items="options"
            filled
            label="Measures"
            background-color="transparent"
            multiple
        :disabled="isLoading1"

          ></v-autocomplete>
        </div>
      </div>
      <div
      v-if="isLoading1"
      class="loading d-flex justify-content-center"
      style="justify-content: center; padding: 50px"
    >
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
      <v-btn
        @click="handleClick"
        class="text-capitalize element-0"
        color="success"
        :disabled="isLoading1"
        >TẠO BẢNG ỨNG VIÊN ĐỒNG TÁC GIẢ</v-btn
      >
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
            >EXPORT CANDIDATES TABLE</v-btn
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
    isLoading1: false,
    authors: [],
    split_year: "",
    T1BeginSelected: "",
    T2BeginSelected: "",
    T1EndSelected: "",
    T2EndSelected: "",
    yearBase: [
      1987,
      1988,
      1989,
      1990,
      1991,
      1992,
      1993,
      1994,
      1995,
      1996,
      1997,
      1998,
      1999,
      2000,
      2001,
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
    ],
    // selectedValues: [],
    options: [
      "Common Neighbor (CN)",
      "Adamic-Adar (AA)",
      "Jaccard Coefficient (JC)",
      "Resource Allocation (RA)",
    ],
    showAlert: false,
  }),

  computed: {
    optionsBeginT1: function() {
      return this.yearBase;
    },
    optionsBeginT2: function() {
      if (this.T1EndSelected == "") return null;
      else return this.yearBase.filter((year) => year > this.T1EndSelected);
    },
    optionsEndT1: function() {
      if (this.T1BeginSelected == "") return null;
      else return this.yearBase.filter((year) => year > this.T1BeginSelected);
    },
    optionsEndT2: function() {
      if (this.T2BeginSelected == "") return null;
      else return this.yearBase.filter((year) => year > this.T2BeginSelected);
    },
    selectedValues: function() {
      return this.options.slice();
    }
  },

  methods: {
    handleClickImport() {
      this.showAlert = !this.showAlert;
    },
    async handleClick() {
      this.isLoading1 = true;
      await axios.get(
        `http://127.0.0.1:8000/api/coauthor/importCandidate/${this.T1EndSelected}`
      );

      if (this.selectedValues.includes("Common Neighbor (CN)")) {
        console.log("CN");
        await axios.post("http://127.0.0.1:8000/api/coauthor/calculateCN");
      }
      if (this.selectedValues.includes("Adamic-Adar (AA)")) {
        console.log("AA");
        await axios.post("http://127.0.0.1:8000/api/coauthor/calculateAA");
      }
      if (this.selectedValues.includes("Jaccard Coefficient (JC)")) {
        console.log("JC");
        await axios.post("http://127.0.0.1:8000/api/coauthor/calculateJC");
      }
      if (this.selectedValues.includes("Resource Allocation (RA)")) {
        console.log("RA");
        await axios.post("http://127.0.0.1:8000/api/coauthor/calculateRA");
      }

      const response2 = await axios.get(
        "http://127.0.0.1:8000/api/coauthor/getCandidates"
      );
      this.isLoading1 = false

      this.authors = response2.data;
    },
  },
};
</script>
