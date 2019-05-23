<template>
  <Form style="margin-top:20px;">
    <FormItem>
      <Button
        class="pad15 fb-btn"
        ref="fbBtn"
        @click="doFB"
        style="font-size:16px; color:#fff;"
        type="primary"
        size="large"
        long
      >
        <div class="wrr">
          <svg viewBox="0 0 32 32">
            <path
              class="st0"
              d="M32 30c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h28c1.1 0 2 .9 2 2v213z"
            ></path>
            <path
              id="f"
              class="st1"
              d="M22 32V20h4l1-5h-5v-2c0-2 1-3 3-3h2V5h-4c-3.7 0-6 2.9-6 7v3h-4v5h4v12h-178z"
            ></path>
          </svg>
          <div class="text">Continue with Facebook</div>
        </div>
      </Button>
    </FormItem>
    <FormItem>
      <Button
        class="pad15 gg-btn"
        ref="googleBtn"
        style="font-size:16px; color:#fff;"
        type="primary"
        size="large"
        long
      >
        <div class="wrr">
          <svg viewBox="0 0 50 50">
            <path
              d="M45 1H5C2.8 1 1 2.8 1 5v40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V5c0-2.2-1.8-4-4-4z"
              fill="#FFF"
            ></path>
            <path
              d="M20.3 10.5c-3.7 1.3-6.9 4.1-8.7 7.6-.6 1.2-1.1 2.5-1.3 3.9-.7 3.3-.2 6.9 1.3 9.9 1 2 2.4 3.7 4.2 5.1 1.6 1.3 3.5 2.3 5.6 2.8 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.3 1.9-1.7 3.2-3.9 3.9-6.4.8-2.6.9-5.4.4-8.1H25.4v6h8.3c-.3 1.9-1.5 3.7-3.1 4.7-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.8-3.4-1.5-1.6-1.1-2.9-2.8-3.5-4.7-.7-1.9-.7-4 0-6 .5-1.3 1.2-2.6 2.2-3.6 1.2-1.3 2.8-2.2 4.6-2.5 1.5-.3 3-.3 4.5.2 1.2.4 2.4 1.1 3.3 1.9l2.8-2.8 1.5-1.5c-1.4-1.3-3.1-2.4-4.9-3.1-3.3-1.1-7-1.1-10.3 0z"
              fill="#FFF"
            ></path>
            <path
              d="M20.3 10.5c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3.1L34 15.2 31.2 18c-.9-.9-2.1-1.6-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.3-4.6 2.5-1 1-1.8 2.3-2.2 3.6-1.7-1.3-3.3-2.6-5-3.9 1.8-3.5 5-6.3 8.7-7.6z"
              fill="#EA4335"
            ></path>
            <path
              d="M10.3 22c.3-1.3.7-2.6 1.3-3.9 1.7 1.3 3.3 2.6 5 3.9-.7 1.9-.7 4 0 6-1.7 1.3-3.3 2.6-5 3.9-1.5-3.1-2-6.6-1.3-9.9z"
              fill="#FBBC05"
            ></path>
            <path
              d="M25.3 22.1h14.4c.5 2.7.4 5.5-.4 8.1-.7 2.4-2 4.6-3.9 6.4-1.6-1.3-3.2-2.5-4.9-3.8 1.6-1.1 2.7-2.8 3.1-4.7h-8.3v-6z"
              fill="#4285F4"
            ></path>
            <path
              d="M11.6 31.9c1.7-1.3 3.3-2.6 5-3.9.6 1.9 1.9 3.6 3.5 4.7 1 .7 2.2 1.2 3.4 1.5 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.7 3.4-1.3 1.6 1.3 3.2 2.5 4.9 3.8-1.8 1.6-3.9 2.7-6.3 3.3-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.8-1.7-1.5-3.2-3.3-4.2-5.2z"
              fill="#34A853"
            ></path>
          </svg>
          <div class="text">Continue with Google</div>
        </div>
      </Button>
    </FormItem>
  </Form>
</template>

<script>
import Vue from "vue";
export default {
  name: "social",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "fbappid",
        cookie: true,
        xfbml: true,
        version: "v2.8"
      });

      FB.AppEvents.logPageView();
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
  mounted() {
    if (process.browser) {
      window.gapi.load("auth2", () => {
        const auth2 = window.gapi.auth2.init({
          client_id: "google-id",
          cookiepolicy: "single_host_origin"
        });
        auth2.attachClickHandler(
          this.$refs.googleBtn,
          {},
          googleUser => {
            let res = googleUser;
            this.$emit("done", res);
          },
          error => console.log(error)
        );
      });
    }
  },
  methods: {
    facebookLogin: function(data, callback) {
      var vm = this;
      FB.api(
        "/me",
        "GET",
        {
          fields: "email,name,picture.type(large)"
        },
        function(FBResponse) {
          let res = FBResponse;
          vm.$emit("doneFB", res);
        }
      );
    },
    doFB: function() {
      var vm = this;
      window.FB.login(function(response) {
        if (response.status === "connected") {
          vm.facebookLogin(response.authResponse, function() {
            // vm.$router.push({ name: 'redirect' })
            // console.log(response.authResponse)
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.st0 {
  fill: #fff;
}
.st1 {
  fill: #3b5998;
}
</style>
