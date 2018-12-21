<template>
  <div>
    <!-- <sturtaNav v-bind:authtype="authActive" v-bind:navtype="navtype"/> -->
    <Row class="body-pad" type="flex" align="middle" justify="center">
      <img src="/src/images/coconut.png" class="coconut-left">
      <Col :xs="24" :sm="16" :md="8">
        <transition mode="out-in">
          <Form label-position="top" v-if="showUp && passcontinue === false">
            <h1>Let's get started</h1>
            <br>
            <h3>
              <span style="color:#000;">Welcome!, Enter your email to continue</span>
              <br>
              <em>Your description here Similar to that of the appraiser portal assignment..</em>
            </h3>
            <br>
            <FormItem label="Email" prop="email" style="margin-top:10px;">
              <Input size="large" v-model="signupValidate.email" placeholder="Enter your email"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" size="large" @click="phoneValidate()" long>Create Account</Button>
            </FormItem>
          </Form>
        </transition>
        <transition mode="out-in">
          <Form
            ref="signupValidate"
            :model="signupValidate"
            :rules="signupRuleValidate"
            label-position="top"
            v-if="showUp && passcontinue"
          >
            <h1>Continue to complete</h1>
            <br>
            <h3>
              <span
                style="color:#000;"
              >Please enter your full-name and password to complete registration</span>
            </h3>
            <br>
            <FormItem label="Full name" prop="name" style="margin-top:10px;">
              <Input v-model="signupValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="Password" prop="password">
              <Input
                v-model="signupValidate.password"
                type="password"
                placeholder="Enter your password"
              ></Input>
            </FormItem>
            <FormItem label="Agree to Terms and conditions" prop="tc">
              <CheckboxGroup v-model="signupValidate.tc">
                <Checkbox label="Terms and conditions"></Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem>
              <Button type="primary" size="large" @click="upSubmit('signupValidate')" long>Complete</Button>
            </FormItem>
          </Form>
        </transition>
        <transition mode="out-in">
          <Form
            ref="logValidate"
            :model="logValidate"
            :rules="ruleValidate"
            label-position="top"
            v-if="!showUp"
          >
            <h1>Sign In</h1>
            <br>
            <h3>
              <span style="color:#000;">Please enter your phone number and password to log in</span>
            </h3>
            <br>
            <FormItem label="Email" prop="email" style="margin-top:10px;">
              <Input size="large" v-model="signupValidate.email" placeholder="Enter your email"></Input>
            </FormItem>
            <FormItem label="Password" prop="password">
              <Input
                v-model="logValidate.password"
                type="password"
                placeholder="Enter your password"
              ></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" size="large" @click="logSubmit('logValidate')" long>Log In</Button>
            </FormItem>
          </Form>
        </transition>
      </Col>
    </Row>
  </div>
</template>
<script>
import Vue from "vue";
import VueSession from "vue-session";
import VueResource from "vue-resource";
import config from "../../config";
Vue.use(VueSession);
Vue.use(VueResource);
export default {
  name: "Authentication",
  data() {
    const EmailPhone = (rule, value, callback) => {
      var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (value === "") {
        callback(new Error("Please enter your e-mail"));
      } else if (!emailregex.test(String(value).toLowerCase())) {
        callback(new Error("Please enter a valid email"));
      } else {
        callback();
      }
    };
    return {
      showUp: true,
      passcontinue: false,
      showUp: true,
      navtype: "Auth",
      authActive: false,
      kews: [],
      user: {
        phone: "",
        countryAbbr: "gh",
        countryCode: ""
      },
      phoneVal: false,
      authActive: false,
      showMobNav: false,
      redirect: "/",
      curYear: "",
      psw_info: "",
      setPassword: false,
      authSignUp: "authSignUp",
      current: 3,
      loading: true,
      socialPassword: "",
      social: {},
      signupValidate: {
        email: "",
        name: "",
        password: "",
        tc: [],
        timezone: "",
        phone: ""
      },
      phoneChex: {
        phone: ""
      },
      signupRuleValidate: {
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ],
        tc: [
          {
            required: true,
            type: "array",
            message: "Agree to terms & conditions",
            trigger: "change"
          }
        ],
        name: [
          {
            required: true,
            message: "Please fill in your fullname.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "Full name length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      },
      logValidate: {
        password: "",
        phone: ""
      },
      ruleValidate: {
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  beforeCreate: function() {
    if (this.$session.has("usrid")) {
      let user = this.$session.get("usrid");
      this.$router.push("/");
    }
  },
  created() {
    this.$Message.config({
      top: 80,
      duration: 10
    });
    !this.$route.query.redir
      ? (this.redirect = "/")
      : (this.redirect = this.$route.query.redir);
  },
  methods: {
    loadingSync(e) {
      const msg = this.$Message.loading({
        content: e,
        duration: 20
      });
    },
    phoneValidate() {
      const emval = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.signupValidate.email === "") {
        this.$Message.destroy();
        this.$Message.error("Email required");
      } else if (!emval.test(String(this.signupValidate.email).toLowerCase())) {
        this.$Message.destroy();
        this.$Message.error("Please enter a valid email");
      } else {
        this.$Message.destroy();
        this.passcontinue = true;
      }
    },
    addUser(user) {
      let url = config.createAuth;
      return Vue.http
        .post(url, user)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error));
    },
    authUser(user) {
      let url = config.signAuth;
      return Vue.http
        .post(url, user)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error));
    },
    upSubmit(create) {
      this.$refs[create].validate(valid => {
        if (valid) {
          this.$Message.destroy();
          this.loadingSync("Hold on a second");
          this.signupValidate.timezone = new Date()
            .toString()
            .match(/\(([A-Za-z\s].*)\)/)[1];
          this.addUser(JSON.stringify(this.signupValidate))
            .then(response => {
              this.$Message.destroy();
              this.loadingSync("Logging in");
              if (!response.error) {
                this.$session.set("usrid", response);
                this.$router.push(this.redirect);
                this.$Message.destroy();
                this.$Message.success("logged in");
              } else if (response.error === "Account exist") {
                this.$Message.error(response.error + " please sign in");
              } else {
                this.$Message.error(response.error);
              }
            })
            .catch(errors => {
              console.log("Failed");
            });
        } else {
          this.$Message.error(
            "Oops Error, please provide valid sign up information!"
          );
        }
      });
    }
  }
};
</script>


<!--

// import sturtaNav from "../../components/sturtaNav";
import VueResource from "vue-resource";
import config from "../../config";
import sturtaSocialAuth from "../../components/sturtaSocialAuth";
// import { parseNumber } from "libphonenumber-js";
// import sturtaFooter from "../../components/sturtaFooter";
import Meta from "vue-meta";

Vue.use(VueSession);
Vue.use(VueResource);
export default {
  name: "Authentication",
  components: {
    sturtaSocialAuth: sturtaSocialAuth,
    IntTelInput: IntTelInput.default
    // sturtaNav,
    // sturtaFooter
  },
  data() {
    const EmailPhone = (rule, value, callback) => {
      var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (value === "") {
        callback(new Error("Please enter your e-mail"));
      } else if (!emailregex.test(String(value).toLowerCase())) {
        callback(new Error("Please enter a valid email"));
      } else {
        callback();
      }
    };
    return {
      showUp: true,
      passcontinue: false,
      showUp: true,
      navtype: "Auth",
      authActive: false,
      kews: [],
      user: {
        phone: "",
        countryAbbr: "gh",
        countryCode: ""
      },
      phoneVal: false,
      authActive: false,
      showMobNav: false,
      redirect: "/",
      curYear: "",
      psw_info: "",
      setPassword: false,
      authSignUp: "authSignUp",
      current: 3,
      loading: true,
      socialPassword: "",
      social: {},
      signupValidate: {
        name: "",
        password: "",
        tc: [],
        timezone: "",
        phone: ""
      },
      phoneChex: {
        phone: ""
      },
      signupRuleValidate: {
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ],
        tc: [
          {
            required: true,
            type: "array",
            message: "Agree to terms & conditions",
            trigger: "change"
          }
        ],
        name: [
          {
            required: true,
            message: "Please fill in your fullname.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "Full name length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      },
      logValidate: {
        password: "",
        phone: ""
      },
      ruleValidate: {
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  metaInfo() {
    return {
      title: "Sturta: Log In or Sign Up",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          name: "description",
          content:
            "Hire 1000+ skilled pros for almost all services. | Find new customers and grow your business." +
            this.$session.get("cat").toString()
        },
        {
          name: "keywords",
          content:
            "Sign In, Sign Up, Sturta, Africa, Ghana, Nigeria, Kenya, South Africa, Local Services, Freelance, Hire, Work" +
            this.$session.get("cat").toString()
        },
        {
          property: "og:url",
          content: "https://www.sturta.com/authenticate?signUp=false"
        },
        {
          property: "og:title",
          content: "Sturta: Log In or Sign Up"
        },
        {
          property: "og:site_name",
          content: "sturta"
        },
        {
          property: "og:description",
          content:
            "Hire 1000+ skilled pros for almost all services. | Find new customers and grow your business." +
            this.$session.get("cat").toString()
        },
        {
          property: "og:image",
          content: "https://sturta.com/src/images/sturta-banner-ad.jpg"
        }
      ]
    };
  },
  beforeCreate: function() {
    if (this.$session.has("usrid")) {
      let user = this.$session.get("usrid");
      this.$router.push("/");
    }
  },
  created() {
    this.defLoad();
    this.$Message.config({
      top: 80,
      duration: 10
    });
    !this.$route.query.redir
      ? (this.redirect = "/")
      : (this.redirect = this.$route.query.redir);
    this.getCategories();
  },
  methods: {
    getCategories() {
      let url = config.categories;
      this.$http.get(url).then(
        response => {
          if (response.status === 200) {
            for (let e in response.body) {
              this.kews.push(response.body[e].title);
            }
            this.$session.set("cat", this.kews);
          }
        },
        response => {}
      );
    },
    loadingSync(e) {
      const msg = this.$Message.loading({
        content: e,
        duration: 20
      });
    },
    valPhoneNumber() {
      let b = "Phone: +" + this.user.countryCode + this.user.phone;
      let a = parseNumber(b, this.user.countryAbbr.toUpperCase());
      if (Object.keys(a).length == 0) {
        this.phoneVal = false;
      } else {
        this.phoneVal = true;
        this.$Message.destroy();
        this.$Message.success("Valid Phone Number");
      }
    },
    countryCodeChange(country) {
      this.user.countryAbbr = country.addr;
      this.user.countryCode = country.code;
      this.valPhoneNumber();
    },
    phoneNumberChange(phone) {
      this.$Message.destroy();
      this.loadingSync("Validating phone number");
      this.user.phone = phone;
      this.phoneChex.phone = this.user.countryCode + this.user.phone;
      this.valPhoneNumber();
    },
    phoneValidate() {
      if (this.phoneVal === true) {
        this.$Message.destroy();
        this.loadingSync("Hold on a sec");
        this.checkPhone(JSON.stringify(this.phoneChex))
          .then(response => {
            console.log(response);
            this.$Message.destroy();
            if (!response.error) {
              this.passcontinue = true;
            } else if (response.error === "Account exist") {
              this.$Message.error("Phone number exist");
            } else {
              this.$Message.error(response.error);
            }
          })
          .catch(errors => {
            console.log("Failed");
          });
      } else {
        this.$Message.destroy();
        this.$Message.error("Invalid Phone Number");
      }
    },
    checkPhone(phone) {
      let url = config.checkPhone;
      return Vue.http
        .post(url, phone)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error));
    },


    defLoad() {
      let d = new Date();
      this.curYear = d.getFullYear();
      this.$route.query.signUp === "true"
        ? (this.showUp = true)
        : (this.showUp = false);
      this.$route.query.signUp === "true"
        ? (document.title = "Sturta - Create Account")
        : (document.title = "Sturta - Sign In");
    },
    upSubmit(create) {
      this.$refs[create].validate(valid => {
        if (valid) {
          this.$Message.destroy();
          this.loadingSync("Hold on a second");
          this.signupValidate.timezone = new Date()
            .toString()
            .match(/\(([A-Za-z\s].*)\)/)[1];
          this.signupValidate.phone = this.user.countryCode + this.user.phone;
          console.log(this.signupValidate);
          this.addUser(JSON.stringify(this.signupValidate))
            .then(response => {
              this.$Message.destroy();
              this.loadingSync("Logging in");
              console.log(response);
              if (!response.error) {
                this.$session.set("usrid", response);
                this.$router.push(this.redirect);
                this.$Message.destroy();
                this.$Message.success("logged in");
              } else if (response.error === "Account exist") {
                this.$Message.error(response.error + " please sign in");
              } else {
                this.$Message.error(response.error);
              }
            })
            .catch(errors => {
              console.log("Failed");
            });
        } else {
          this.$Message.error(
            "Oops Error, please provide valid sign up information!"
          );
        }
      });
    },
    logSubmit(auth) {
      this.$refs[auth].validate(valid => {
        if (valid && this.phoneVal === true) {
          this.$Message.destroy();
          this.loadingSync("Hold on a second");
          this.logValidate.timezone = new Date()
            .toString()
            .match(/\(([A-Za-z\s].*)\)/)[1];
          this.logValidate.phone = this.user.countryCode + this.user.phone;
          this.authUser(JSON.stringify(this.logValidate))
            .then(response => {
              this.$Message.destroy();
              this.loadingSync("Logging in");
              if (!response.error) {
                this.$session.set("usrid", response);
                this.$router.push(this.redirect);
                this.$Message.destroy();
                this.$Message.success("logged in");
              } else {
                this.$Message.destroy();
                this.$Message.error(response.error);
              }
            })
            .catch(errors => {
              console.log("Failed");
            });
        } else if (this.phoneVal === false) {
          this.$Message.destroy();
          this.$Message.error("Invalid Phone Number");
        } else {
          this.$Message.error(
            "Oops Error, please provide valid sign in information!"
          );
        }
      });
    },
    setPass(auth) {
      this.$refs[auth].validate(valid => {
        if (valid) {
          this.social.password = this.setValidate.password;
          this.social.timezone = new Date()
            .toString()
            .match(/\(([A-Za-z\s].*)\)/)[1];
          this.setPassword = false;
          this.social.email === undefined
            ? (this.social.email = this.setValidate.email)
            : this.social.email;
          this.$Message.destroy();
          this.loadingSync("Hold on a second");
          if (this.socialPassword === "authSignUp") {
            this.addUser(JSON.stringify(this.social))
              .then(response => {
                this.$Message.destroy();
                if (!response.error) {
                  this.loadingSync("Logging in");
                  this.$session.set("usrid", response);
                  this.$router.push(this.redirect);
                  this.$Message.destroy();
                } else if (response.error === "Account exist") {
                  this.$Message.error(response.error + " please sign in");
                } else {
                  this.$Message.error(response.error);
                }
              })
              .catch(errors => {
                console.log("failed");
              });
          } else {
            this.authUser(JSON.stringify(this.social))
              .then(response => {
                this.$Message.destroy();
                if (!response.error) {
                  this.loadingSync("Logging in");
                  this.$session.set("usrid", response);
                  this.$router.push(this.redirect);
                  this.$Message.destroy();
                } else {
                  this.$Message.error(response.error);
                }
              })
              .catch(errors => {
                console.log("failed");
              });
          }
        } else {
          this.$Message.error(
            "Oops Error, please password required to continue!"
          );
        }
      });
    },
    onGoogleUserLoggedIn(e) {
      if (e !== {}) {
        if (e.w3.Paa != "" || e.w3.Paa != undefined) {
          this.social.image = e.w3.Paa;
        } else {
          this.social.image = "";
        }
        this.social.email = e.w3.U3;
        this.social.name = e.w3.ig;
        this.socialPassword = e.sturtaAuthType;

        if (e.sturtaAuthType === "authSignUp") {
          this.psw_info = "Please set a new password to continue";
          this.setPassword = true;
        } else {
          this.psw_info = "Please enter your password to continue";
          this.setPassword = true;
        }
      } else {
        console.log("Failed");
      }
    },
    onFacebookUserLoggedIn(e) {
      if (e !== {}) {
        if (e.picture.data.url != "" || e.picture != undefined) {
          this.social.image = e.picture.data.url;
        } else {
          this.social.image = "";
        }
        this.social.email = e.email;
        this.social.name = e.name;
        this.socialPassword = e.sturtaAuthType;
        if (e.sturtaAuthType === "authSignUp") {
          this.psw_info = "Please set a new password to continue";
          this.setPassword = true;
        } else {
          this.psw_info = "Please enter your password to continue";
          this.setPassword = true;
        }
      } else {
        console.log("Failed");
      }
    }
  }
};
</script>
-->
<style lang="less" scoped>
.body-sec {
  background: #eeeeee !important;
}

.body-pad {
  min-height: 90vh;
}

.body-pad h1 {
  color: #000;
}

.avatar-home {
  width: 80px !important;
  height: auto !important;
  border-radius: 100% !important;
}

.time {
  font-size: 14px;
  font-weight: bold;
}

.content-time {
  padding-left: 5px;
}

.call-to-action {
  background: #6c2bd0 !important;
  color: #fff !important;
  text-align: center !important;
}

.action-button {
  color: #fff !important;
}

@media (max-width: 450px) {
  .tag-home {
    overflow: visible !important;
    height: 60px !important;
  }
}

.btn-sturta {
  padding: 20px !important;
}

.or {
  margin: -10px 20px 20px 20px !important;
}
</style>
