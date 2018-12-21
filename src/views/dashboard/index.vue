<template>
  <div>
    <!-- Hero(extended) navbar -->
    <appNav v-bind:authtype="authActive" v-bind:navtype="navtype"/>
    <!-- Page content -->
    <div class="app">
      <Row type="flex" justify="center">
        <Col :xs="24" :sm="22" :md="22" :lg="22" class="vh-height">
          <div class="app__inner">
            <div class="app__menu">
              <ul class="vMenu">
                <li>
                  <a href="#" class="vMenu--active">Assignments</a>
                </li>
                <li>
                  <a href="#">Second page</a>
                </li>
                <li>
                  <a href="#">Third page</a>
                </li>
                <li>
                  <a href="#">Fourth page</a>
                </li>
                <li>
                  <a href="#">Fifth page</a>
                </li>
              </ul>
            </div>
            <div class="app__main ivu-table-overflowX">
              <h1>Assignments</h1>
              </br>
              <Button size="large" type="success">Create an Assignment <Icon type="md-add" /></Button>
              </br></br>
              <Table
                :columns="columns8"
                :data="data7"
                class="ivu-table-overflowX"
                size="small"
                ref="table"
              ></Table>
              <br>
              <Button type="primary" @click="exportData(1)">
                <Icon type="ios-download-outline"></Icon>Export source data
              </Button>
              <Button type="primary" @click="exportData(2)">
                <Icon type="ios-download-outline"></Icon>Export sorting and filtered data
              </Button>
              <Button type="primary" @click="exportData(3)">
                <Icon type="ios-download-outline"></Icon>Export custom data
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <!-- Footer -->
    <div class="footer footer--dark">
      <div class="container">
        <div class="footer__inner">
          <a href="index.html" class="footer__textLogo">Appraisal</a>
          <div class="footer__data">
            <div class="footer__data__item">
              <div class="footer__row">
                <a href="#" target="_blank" class="footer__link">Option 1</a>
              </div>
              <div class="footer__row">
                <a href="#" target="_blank" class="footer__link">Option 1</a>
              </div>
            </div>
            <div class="footer__data__item">
              <div class="footer__row">
                <a href="#" target="_blank" class="footer__link">Option 1</a>
              </div>
              <div class="footer__row">
                <a href="#" target="_blank" class="footer__link">Option 1</a>
              </div>
            </div>
            <div class="footer__data__item">
              <div class="footer__row">
                <a href="#" target="_blank" class="footer__link">Twitter</a>
              </div>
              <div class="footer__row">
                <a href="#" target="_blank" class="footer__link">Facebook</a>
              </div>
              <div class="footer__row">
                <a href="#" class="footer__link">&copy; 2018 Appraisal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.home-layout {
  position: relative;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  background: #3bafea;
}
.home-layout .ivu-col {
  min-height: 400px;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
}
.home-layout .ivu-col:nth-child(1) {
  background: #ffffff;
}
.home-layout .ivu-col:nth-child(2) {
  border: solid 1px #ffffff;
  min-height: 380px;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.home-layout .ivu-col:nth-child(1) .tag-head {
  color: #37b327;
  font-size: 16px !important;
}
.home-layout .ivu-col:nth-child(1) .tag-divider {
  width: 50px;
  height: 3px;
  margin: 5px auto;
  background: #37b327;
}
.home-layout .ivu-col:nth-child(2) h1,
.home-layout .ivu-col:nth-child(2) p {
  color: #ffffff;
}
.home-layout .ivu-col:nth-child(2) .tag-head {
  color: #ffffff;
  font-size: 16px !important;
}
.home-layout .ivu-col:nth-child(2) .tag-divider {
  width: 50px;
  height: 3px;
  margin: 5px auto;
  background: #ffffff;
}
.home-layout p {
  font-size: 16px;
}
</style>
<script>
import appNav from "../../components/appNav";
export default {
  components: {
    appNav
  },
  data() {
    return {
      navtype: "Home",
      authActive: true,
      columns8: [
        {
          title: "Borrower Name",
          key: "name",
          fixed: "left",
          width: 200
        },
        {
          title: "Phone",
          key: "show",
          width: 150,
          sortable: true,
          filters: [
            {
              label: "Greater than 4000",
              value: 1
            },
            {
              label: "Less than 4000",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.show > 4000;
            } else if (value === 2) {
              return row.show < 4000;
            }
          }
        },
        {
          title: "Email",
          key: "weak",
          width: 150,
          sortable: true
        },
        {
          title: "Address - appraised",
          key: "signin",
          width: 150,
          sortable: true
        },
        {
          title: "Parcel Number",
          key: "click",
          width: 150,
          sortable: true
        },
        {
          title: "Lender",
          key: "active",
          width: 150,
          sortable: true
        },
        {
          title: "Lender's Name",
          key: "day7",
          width: 150,
          sortable: true
        },
        {
          title: "Lender's Address",
          key: "day30",
          width: 150,
          sortable: true
        },
        {
          title: "License number",
          key: "tomorrow",
          width: 150,
          sortable: true
        },
        {
          title: "Appraiser name",
          key: "day",
          width: 150,
          sortable: true
        },
        {
          title: "Appraiser Address",
          key: "week",
          width: 150,
          sortable: true
        },
        {
          title: "Appraisers license number",
          key: "month",
          width: 150,
          sortable: true
        },
        {
          title: "AMC name",
          key: "month",
          width: 150,
          sortable: true
        },
        {
          title: "AMC address",
          key: "month",
          width: 150,
          sortable: true
        },
        {
          title: "AMC license number",
          key: "month",
          width: 150,
          sortable: true
        }
      ],
      data7: [
        {
          name: "Name1",
          fav: 0,
          show: 7302,
          weak: 5627,
          signin: 1563,
          click: 4254,
          active: 1438,
          day7: 274,
          day30: 285,
          tomorrow: 1727,
          day: 558,
          week: 4440,
          month: 5610
        },
        {
          name: "Name2",
          fav: 0,
          show: 4720,
          weak: 4086,
          signin: 3792,
          click: 8690,
          active: 8470,
          day7: 8172,
          day30: 5197,
          tomorrow: 1684,
          day: 2593,
          week: 2507,
          month: 1537
        },
        {
          name: "Name3",
          fav: 0,
          show: 7181,
          weak: 8007,
          signin: 8477,
          click: 1879,
          active: 16,
          day7: 2249,
          day30: 3450,
          tomorrow: 377,
          day: 1561,
          week: 3219,
          month: 1588
        },
        {
          name: "Name4",
          fav: 0,
          show: 9911,
          weak: 8976,
          signin: 8807,
          click: 8050,
          active: 7668,
          day7: 1547,
          day30: 2357,
          tomorrow: 7278,
          day: 5309,
          week: 1655,
          month: 9043
        },
        {
          name: "Name5",
          fav: 0,
          show: 934,
          weak: 1394,
          signin: 6463,
          click: 5278,
          active: 9256,
          day7: 209,
          day30: 3563,
          tomorrow: 8285,
          day: 1230,
          week: 4840,
          month: 9908
        },
        {
          name: "Name6",
          fav: 0,
          show: 6856,
          weak: 1608,
          signin: 457,
          click: 4949,
          active: 2909,
          day7: 4525,
          day30: 6171,
          tomorrow: 1920,
          day: 1966,
          week: 904,
          month: 6851
        },
        {
          name: "Name7",
          fav: 0,
          show: 5107,
          weak: 6407,
          signin: 4166,
          click: 7970,
          active: 1002,
          day7: 8701,
          day30: 9040,
          tomorrow: 7632,
          day: 4061,
          week: 4359,
          month: 3676
        },
        {
          name: "Name8",
          fav: 0,
          show: 862,
          weak: 6520,
          signin: 6696,
          click: 3209,
          active: 6801,
          day7: 6364,
          day30: 6850,
          tomorrow: 9408,
          day: 2481,
          week: 1479,
          month: 2346
        },
        {
          name: "Name9",
          fav: 0,
          show: 567,
          weak: 5859,
          signin: 128,
          click: 6593,
          active: 1971,
          day7: 7596,
          day30: 3546,
          tomorrow: 6641,
          day: 1611,
          week: 5534,
          month: 3190
        },
        {
          name: "Name10",
          fav: 0,
          show: 3651,
          weak: 1819,
          signin: 4595,
          click: 7499,
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428,
          day: 9768,
          week: 2864,
          month: 5811
        }
      ]
    };
  },
  created() {
    this.addScripts("/src/assets/js/app.min.js");
  },
  methods: {
    addScripts(e) {
      let create = document.createElement("script");
      create.setAttribute("src", e);
      document.head.appendChild(create);
    },
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    exportData(type) {
      if (type === 1) {
        this.$refs.table.exportCsv({
          filename: "The original data"
        });
      } else if (type === 2) {
        this.$refs.table.exportCsv({
          filename: "Sorting and filtering data",
          original: false
        });
      } else if (type === 3) {
        this.$refs.table.exportCsv({
          filename: "Custom data",
          columns: this.columns8.filter((col, index) => index < 4),
          data: this.data7.filter((data, index) => index < 4)
        });
      }
    }
  }
};
</script>
