<template>
  <div>
    <Row class="small-footer" v-if="small">
      <a>&copy; Sturta Inc {{currentdate.getFullYear() === 2018 ? currentdate.getFullYear() : '2018 - ' + currentdate.getFullYear()}}</a>
    </Row>
    <Row class="footer-wrap" v-else>
      <Row class="footer">
        <Row type="flex" justify="center" align="middle">
          <Col :xs="21" :sm="20" :md="20" style="margin-top:50px; margin-bottom:30px;">
            <Col :xs="12" :sm="8" :md="6">
              <ul>
                <li>
                  <h4>About Sturta</h4>
                </li>
                <li>
                  <a @click="hwta = true">How Sturta Works</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/press">Press</a>
                </li>
                <li>
                  <a href="https://blog.sturta.com" target="_blank">Blog</a>
                </li>
              </ul>
            </Col>
            <Col :xs="12" :sm="8" :md="6">
              <ul>
                <li>
                  <h4>Customers</h4>
                </li>
                <li>
                  <a href="/safety">Safety</a>
                </li>
                <li>
                  <a href="/explore?near-me=true">Services near me</a>
                </li>
                <li>
                  <a @click="cost = true">Cost estimates</a>
                </li>
                <li>
                  <a @click="abuse = true">Report Abuse</a>
                </li>
              </ul>
            </Col>
            <Col :xs="12" :sm="8" :md="6">
              <ul>
                <li>
                  <h4>Worker</h4>
                </li>
                <li>
                  <a href="/sign-up-to-work">Sign up to work</a>
                </li>
                <li>
                  <a href="/worker/requirements">Requirements</a>
                </li>
                <li>
                  <a href="/worker/getting-started">Worker Guidelines</a>
                </li>
                <li>
                  <a @click="appd = true">Worker App</a>
                </li>
              </ul>
            </Col>
            <Col :xs="12" :sm="8" :md="6">
              <ul>
                <li>
                  <h4>Support &amp; Legal</h4>
                </li>
                <li>
                  <a href="/terms-and-conditions">Terms and conditions</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a @click="help = true">Help Center</a>
                </li>
                <li style="margin-top:60px;">
                  <a>&copy; Sturta Inc {{currentdate.getFullYear() === 2018 ? currentdate.getFullYear() : '2018 - ' + currentdate.getFullYear()}}</a>
                </li>
              </ul>
            </Col>
          </Col>
        </Row>
      </Row>
    </Row>
    <sturtaHWT :hwt="hwta" @hwtClose="closedHwt"></sturtaHWT>
    <sturtaCost :hwt="cost" @hwtClose="closedCost"></sturtaCost>
    <sturtaHelp :help="help" :curUser="curUser" @helpClose="closed" @done="done"></sturtaHelp>
    <sturtaAbuse :help="abuse" :curUser="curUser" @helpClose="closed" @done="done"></sturtaAbuse>
    <Modal v-model="appd" @on-cancel="appd= false" title="Sturta Worker App">
      <Row type="flex" justify="center">
        <img style="width:200px; height:auto;" src="/src/images/app.svg">
      </Row>
      <div style="margin-top:20px;">
        <h2 style="color:#000; max-width:300px; margin:0 auto; text-align:center;">
          Sync all your activities on Sturta using any device
          <a>Mobile, Tablet and Desktop Apps Coming Soon</a>
        </h2>
        <br>
        <br>
      </div>
      <div slot="footer" style="text-align:left;"></div>
    </Modal>
  </div>
</template>

<script>
import Vue from "vue";
import sturtaHWT from "./sturtaHWT";
import sturtaCost from "./sturtaCost";
import sturtaHelp from "./sturtaHelp";
import sturtaAbuse from "./sturtaAbuse";
import VueSession from "vue-session";
Vue.use(VueSession);
export default {
  props: ["small"],
  components: {
    sturtaHWT,
    sturtaHelp,
    sturtaAbuse,
    sturtaCost
  },
  data() {
    return {
      curUser: "",
      searchData: "",
      ventData: [],
      loading1: false,
      help: false,
      abuse: false,
      hwta: false,
      cost: false,
      appd: false,
      formHelp: {
        ticket: ""
      },
      currentdate: ""
    };
  },
  created() {
    this.curUser = this.$session.get("usrid");
    this.dateYr();
  },
  methods: {
    closedHwt() {
      this.hwta = false;
    },
    closedCost() {
      this.cost = false;
    },
    closed() {
      this.abuse = false;
      this.help = false;
    },
    done() {
      // this.$emit('ticketCreated')
    },
    dateYr() {
      this.currentdate = new Date();
    }
  }
};
</script>


<style scoped>
.footer {
  position: relative;
  width: 100%;
  background-image: linear-gradient(
    -179deg,
    rgba(255, 255, 255, 0) 0%,
    #ebeef0 100%
  );
  font-size: 14px !important;
  bottom: 0;
  min-height: 300px;
}

.footer li h4 {
  margin-top: 10px;
  font-weight: bold !important;
  color: #171c34 !important;
}

.footer li {
  margin-top: 10px;
}

.footer li a {
  font-size: 14px !important;
  color: #657180 !important;
  cursor: pointer;
}

.footer li a:hover {
  opacity: 0.9;
  cursor: pointer;
}

.small-footer {
  position: fixed !important;
  bottom: 0;
  background: #ffffff !important;
  border-top: solid 1px #eee;
  padding: 15px;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
}

.small-footer a {
  color: #222 !important;
}
</style>
