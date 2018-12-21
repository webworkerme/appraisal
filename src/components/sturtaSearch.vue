<template>
  <div class="m-search">
    <Col span="24" style="padding-right:10px" v-if="searchType === 'global'">
      <Select
        class="sturta-search-box"
        placeholder="What service do you need ?, Try typing Cleaning"
        v-model="searchData"
        filterable
        remote
        :remote-method="remoteMethod"
        :loading="loading"
        :v-on-change="upChange()"
      >
        <Option
          v-for="(option, index) in queryData"
          :value="option.type + '/' + option.title"
          :key="index"
        >{{option.title}}</Option>
      </Select>
    </Col>
    <Select
      v-if="searchType === 'main'"
      class="sturta-search-big"
      placeholder="What service do you need ?, Try typing Cleaning"
      v-model="searchData"
      filterable
      remote
      :remote-method="remoteMethod"
      :loading="loading"
      :v-on-change="upChange()"
    >
      <Option
        v-for="(option, index) in queryData"
        :value="option.type + '/' + option.title"
        :key="index"
      >{{option.title}}</Option>
    </Select>
    <Button
      v-if="searchType === 'main'"
      type="primary"
      size="large"
      class="search-button"
      icon="ios-search"
    >Search</Button>
  </div>
</template>

<script>
import Vue from "vue";
import config from "../config";
import VueResource from "vue-resource";
Vue.use(VueResource);
export default {
  props: ["searchType"],
  data() {
    return {
      searchData: "",
      queryData: [],
      loading: false
    };
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        this.queryData = [];
        let url = config.search + query;
        this.$http.get(url).then(
          response => {
            if (response.status === 200) {
              console.log(response);
              for (var e in response.body) {
                this.queryData.push(response.body[e]);
              }
              this.loading = false;
            }
          },
          response => {}
        );
      } else {
        this.queryData = [];
        this.searchData = "";
      }
    },
    upChange: function() {
      var context = this;
      if (context.searchData !== "") {
        let url = context.searchData.toLowerCase().split("/");
        window.location.replace(
          "/workers/near-me/" +
            url[0].replace(/[^A-Z0-9]+/gi, "-") +
            "/" +
            url[1].replace(/[^A-Z0-9]+/gi, "-")
        );
      }
    }
  }
};
</script>

<style scoped>
.search-button {
  margin-top: -50px !important;
  float: right;
  margin-right: 30px;
}

@media (max-width: 600px) {
  .search-button {
    margin-top: -43px !important;
    float: right;
    margin-right: 10px;
  }
}
.m-search {
  float: left;
  margin-left: 40px;
  z-index: 100 !important;
  width: calc(100% - 690px);
}
@media (max-width: 949px) {
  .m-search {
    width: calc(100% - 255px);
  }
}
@media (max-width: 600px) {
  .m-search {
    display: none;
  }
}
</style>
