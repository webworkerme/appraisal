<script>
import Vue from "vue";
Vue.component("sturta-social-auth-button", {
  template:
    '<ButtonGroup><a ref="fbBtn" @click="doFB"><Button type="ghost" icon="social-facebook">Facebook</Button></a><a ref="googleBtn"><Button style="margin-left:10px" type="ghost" icon="social-googleplus">Google</Button></a></ButtonGroup>',
  props: ["login", "signup"],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    console.log(this.signup);
    window.fbAsyncInit = function() {
      FB.init({
        appId: "1874180662805544",
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
    window.gapi.load("auth2", () => {
      const auth2 = window.gapi.auth2.init({
        client_id:
          "372180267790-so08oelni3aaojlldss1n9iqkgne0u1j.apps.googleusercontent.com",
        cookiepolicy: "single_host_origin"
      });
      auth2.attachClickHandler(
        this.$refs.googleBtn,
        {},
        googleUser => {
          let res = googleUser;
          if (this.signup !== undefined) {
            res.sturtaAuthType = this.signup;
          } else {
            res.sturtaAuthType = "authSignIn";
          }
          this.$emit("done", res);
        },
        error => console.log(error)
      );
    });
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
          if (vm.signup !== undefined) {
            res.sturtaAuthType = vm.signup;
          } else {
            res.sturtaAuthType = "authSignIn";
          }
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
});
</script>
