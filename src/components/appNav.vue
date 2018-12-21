<template>
  <div>
    <div class="home-nav">
      <a href="/">
        <div v-if="navtype !== 'Trans'" style="float:left; margin-top:-30px;">
          <img src="../images/logo-grey.png" class="app-nav-logo">
        </div>
        <div v-else style="float:left; margin-top:-30px;">
          <img src="../images/logo-grey.png" class="app-nav-logo">
        </div>
      </a>
      <!-- <input type="checkbox" id="drawer-toggle" name="drawer-toggle" class="menu-nv-hd" />
    <label for="drawer-toggle" id="drawer-toggle-label" class="menu-nv-hd"></label>
   <nav id="drawer">
      <ul style="margin-top:150px;">
        <li v-if="authtype !== true"><a href="/authenticate?signUp=false" class="a-h">Sign In</a></li>
         <li v-if="authtype !== true"><a href="/authenticate?signUp=true" class="a-h">Sign Up</a></li>
         <li><a @click="hwta = true" class="a-h">How it works</a></li>

         <li v-if="navtype !== 'Create'"><a href="/sign-up-to-work" class="a-h">Sign up to work</a></li>
         <li v-else><a class="a-h" href="/become/sign-up-to-work">Create a work account</a></li>
         <li><a @click="help = true" class="a-h">Help</a></li>
         <li style="bottom:30px;" v-if="authtype === true"><a>
            <span v-if="curUser.image === 'default'">
                            <img style="width:15px; height:15px; border-radius:100%; float:right;" src="../images/default.png" />
                            <span>{{curUser.name}}</span>
                        </span>
                        <span v-else>
                            <img style="width:15px; height:15px; border-radius:100%; float:right;" :src="curUser.image" />
                            <span>{{curUser.name}}</span>
                        </span>
         </a></li>
         <li v-if="authtype === true" style="bottom:10px;"><a @click="logout()" class="a-h">Log Out</a></li>
      </ul>
      </nav>-->
      <div class="menu-nav" v-if="navtype === 'Home' || navtype === 'Create'">
        <span v-if="authtype === true" style="float:right">
          <Dropdown
            placement="bottom-end"
            style="margin-left:15px; padding-left: 10px; padding-top:3px; margin-top:7px;"
          >
            <a class="a-h">
              <span v-if="curUser.image === 'default'">
                <Icon style="float:right; margin-top:20px;" type="arrow-down-b"></Icon>
                <img
                  style="width:25px; height:25px; border-radius:100%; margin-top:3px; float:right;"
                  src="../images/default.png"
                >
                <span style="margin-right:10px; color:#424040; float:right; margin-top:7px;">
                  <b>{{curUser.name}}</b>
                </span>
              </span>
              <span v-else>
                <Icon style="float:right; margin-top:20px;" type="arrow-down-b"></Icon>
                <img
                  style="width:30px; height:30px; border-radius:100%; float:right;"
                  :src="curUser.image"
                >
                <span style="margin-right:10px; color:#424040; float:right; margin-top:7px;">
                  <b>{{curUser.name}}</b>
                </span>
              </span>
            </a>
            <DropdownMenu slot="list">
              <!-- <router-link to="/profile" class="a-h">
                            <DropdownItem>Profile</DropdownItem>
                        </router-link>
                        <router-link to="/hires" class="a-h">
                            <DropdownItem>Hires</DropdownItem>
              </router-link>-->
              <router-link to="/bookings" class="a-h">
                <DropdownItem>Bookings</DropdownItem>
              </router-link>
              <router-link to="/support-tickets" class="a-h">
                <DropdownItem>Support tickets</DropdownItem>
              </router-link>
              <router-link to="/settings" class="a-h">
                <DropdownItem>Account Settings</DropdownItem>
              </router-link>
              <a class="a-h" @click="logout()">
                <DropdownItem>Log Out</DropdownItem>
              </a>
            </DropdownMenu>
          </Dropdown>
        </span>
        <span v-if="authtype === false" style="float:right; margin-top:5px;">
          <a href="/authenticate?signUp=true" style="margin-left:10px;">
            <Button type="primary" icon="person-add">Sign up</Button>
          </a>
          <a href="/authenticate?signUp=false" style="margin-left:10px;">
            <Button type="ghost" :style="{color:'#424040'}">Sign in
              <Icon type="ios-arrow-thin-right"></Icon>
            </Button>
          </a>
        </span>
      </div>
      <span
        class="m-hide"
        v-if="authtype === false && navtype === 'Auth'"
        style="float:right; margin-top:5px;"
      >
        <a href="/authenticate?signUp=true" style="margin-left:10px;">
          <Button type="primary" icon="person-add">Sign up</Button>
        </a>
        <a href="/authenticate?signUp=false" style="margin-left:10px;">
          <Button type="ghost" :style="{color:'#424040'}">Sign in
            <Icon type="ios-arrow-thin-right"></Icon>
          </Button>
        </a>
      </span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import config from "../config";
import VueResource from "vue-resource";
import VueSession from "vue-session";
import axios from "axios";

Vue.use(VueResource);
Vue.use(axios);
Vue.use(VueSession);
export default {
  props: ["navtype", "authtype", "profs", "hwt"],
  data() {
    var now = new Date();
    var newYear = new Date(now.getFullYear() + 1, 0, 26);
    return {
      timeCount: newYear - now,
      curUser: "",
      searchData: "",
      ventData: [],
      loading1: false,
      help: false,
      hwta: false,
      formHelp: {
        ticket: ""
      }
    };
  },
  watch: {
    profs: function(val, oldval) {
      val !== "" && val !== false && val && val !== oldval
        ? (this.curUser = val)
        : this.curUser;
    },
    hwt: function(val) {
      this.hwta = val;
    }
  },
  created() {
    var self = this;
    if (self.$session.has("usrid")) {
      self.curUser = this.$session.get("usrid");
      self.authtype = true;
    }
  },
  methods: {
    logout: function() {
      this.$session.destroy();
      this.$router.push("/");
      location.reload();
    },
    closed() {
      this.help = false;
    },
    closedHwt() {
      this.hwta = false;
      this.$emit("hwtClose", false);
    },
    done() {
      this.$emit("ticketCreated");
    }
  }
};
</script>
<style>
.demo-auto-complete-item {
  padding: 15px;
  border-bottom: 1px solid #f9f9f9;
}
.demo-auto-complete-group {
  font-size: 14px;
}
.demo-auto-complete-item :hover {
  background: #f5f5f5;
}
.demo-auto-complete-group span {
  color: #6c7885;
}
.demo-auto-complete-group a {
  float: right;
}
.demo-auto-complete-count {
  float: right;
  font-size: 9px !important;
}
.demo-auto-complete-more {
  display: block;
  margin: 0 auto;
  padding: 4px;
  text-align: center;
  font-size: 12px;
}
.ivu-select-not-found {
  display: none;
}
@media (min-width: 950px) {
  .menu-nv-hd {
    display: none !important;
  }
}
</style>
<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  /* adds animation for all transitions */
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
}

/* Makes sure that everything is 100% height */

/* gets the actual input out of the way;
we're going to style the label instead */

#drawer-toggle {
  position: absolute;
  opacity: 0;
}

#drawer-toggle-label {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  right: 0px;
  height: 50px;
  width: 50px;
  display: block;
  position: fixed;
  background: rgba(255, 255, 255, 0);
  z-index: 1;
}

/* adds our "hamburger" menu icon */

#drawer-toggle-label:before {
  content: "";
  display: block;
  position: absolute;
  height: 2px;
  width: 24px;
  background: #999;
  right: 13px;
  top: 10px;
  box-shadow: 0 6px 0 #999, 0 12px 0 #999;
}

/* drawer menu pane - note the 0px width */

#drawer {
  position: fixed;
  top: 0;
  right: -300px;
  height: 100%;
  width: 300px;
  background: #222;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 20px;
  -webkit-overflow-scrolling: touch;
  z-index: -1 !important;
}

/* checked styles (menu open state) */

#drawer-toggle:checked ~ #drawer-toggle-label {
}

#drawer-toggle:checked ~ #drawer-toggle-label {
  right: 13px;
}

#drawer-toggle:checked ~ #drawer {
  right: 0px;
}

/* Menu item styles */

#drawer ul {
  list-style-type: none;
}

#drawer ul a {
  display: block;
  padding: 10px;
  color: #c7c7c7;
  text-decoration: none;
}

#drawer ul a:hover {
  color: white;
}

/* Responsive MQ */

@media all and (max-width: 350px) {
  #drawer-toggle:checked ~ #drawer-toggle-label {
    height: 100%;
    width: 50px;
  }

  #drawer-toggle:checked ~ #drawer-toggle-label,
  #drawer-toggle:checked ~ header {
    right: calc(100% - 100px);
  }

  #drawer-toggle:checked ~ #drawer {
    width: calc(100% - 50px);
    padding: 20px;
  }

  #drawer-toggle:checked ~ #page-content {
    margin-right: calc(100% - 50px);
  }
}
</style>
