<template>
<int-tel-input :phone="user.phone" :country-abbr="user.countryAbbr" v-on:country-change="countryCodeChange" @phone-change="phoneNumberChange">
</int-tel-input>
</template>

<script>
import Vue from "vue";
import VueResource from "vue-resource";
import config from "../config";
import { parseNumber } from "libphonenumber-js";
Vue.use(VueResource);
export default {
  props: ["acctype"],
  components: {
    IntTelInput: IntTelInput.default
  },
  data() {
    return {
      user: {
        phone: "",
        countryAbbr: "gh",
        countryCode: ""
      },
      phone: ""
    };
  },
  created() {
    console.log(this.acctype);
  },
  methods: {
    loadingSync(e) {
      const msg = this.$Message.loading({
        content: e,
        duration: 20
      });
    },
    checkPhone(phone) {
      let url = config.checkPhone;
      return Vue.http
        .post(url, phone)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error));
    },
    valPhoneNumber() {
      let b = "Phone: +" + this.user.countryCode + this.user.phone;
      let a = parseNumber(b, this.user.countryAbbr.toUpperCase());
      if (Object.keys(a).length == 0) {
        this.$emit("done", false);
      } else {
        this.phone = this.user.countryCode + this.user.phone;
        if (this.acctype === "signup") {
          this.$Message.destroy();
          this.loadingSync("Hold on a sec");
          let a = {
            phone: this.phone
          };
          this.checkPhone(JSON.stringify(a))
            .then(response => {
              this.$Message.destroy();
              if (!response.error) {
                this.$emit("done", this.phone);
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
          this.$emit("done", this.phone);
        }
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
      this.phone = this.user.countryCode + this.user.phone;
      this.valPhoneNumber();
    }
  }
};
</script>
