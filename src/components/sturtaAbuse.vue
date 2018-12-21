<template>
  <Modal v-model="mode" title="Report Abuse" ok-text="Report Abuse" @on-ok="addAbuse" @on-cancel="modalClose">
    <p><Icon type="ios-help"></Icon> We do not tolerate <b>Abuse of Any Kind</b>, please kindly report any form of abuse experienced below</p>
    <br/>
    <h4>Abuse Details</h4>
    <p>Please kindly add details like url's poiniting to the profile of the (Offender)</p>
    <p v-if="curUser !== ''"><br/>
      <Input v-model="formHelp.ticket" type="textarea" :rows="4" placeholder="Please report your abuse here..."></Input>
    </p>
    <p v-else>
      You have to sign in to be able to report an abuse
      <br/><br/>
      <a href="/authenticate?signUp=false">
        <Button type="ghost">Sign Me In</Button>
      </a>
    </p>
  </Modal>
</template>
<script>
import Vue from "vue";
import config from "../config";
import VueResource from "vue-resource";
import axios from "axios";
Vue.use(VueResource);
Vue.use(axios);
export default {
  props: ["help", "curUser"],
  name: "Abuse",
  data() {
    return {
      mode: false,
      formHelp: {
        ticket: ""
      }
    };
  },
  watch: {
    help: function(val) {
      this.mode = val;
    }
  },
  methods: {
    randomStr(m) {
      let a = m || 9;
      let s = "";
      let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < a; i++) {
        s += r.charAt(Math.floor(Math.random() * r.length));
      }
      return s;
    },
    modalClose() {
      this.$emit("helpClose", false);
    },
    addAbuse() {
      if (this.curUser !== "") {
        if (this.formHelp.ticket !== "") {
          let url = config.ticket;
          this.formHelp.supportticket = "#" + this.randomStr(7).toUpperCase();
          this.formHelp.usrid = this.curUser.id;
          this.$http.post(url, JSON.stringify(this.formHelp)).then(
            response => {
              if (!response.error) {
                this.help = false;
                let payload = {
                  attachments: [
                    {
                      fallback:
                        "Required plain-text summary of the attachment.",
                      color: "#2eb886",
                      pretext: "New support ticket created",
                      author_name: this.curUser.name,
                      author_link: config.supportAuthor + this.curUser.id,
                      author_icon: "http://flickr.com/icons/bobby.jpg",
                      title: "Support Ticket",
                      title_link: config.supportAuthor + this.curUser.id,
                      text: "`" + this.formHelp.supportticket + "`",
                      fields: [
                        {
                          title: "Message :email:",
                          value: this.formHelp.ticket,
                          short: false
                        }
                      ],
                      image_url: "",
                      thumb_url: "",
                      footer: "Sturta.com",
                      footer_icon:
                        "http://localhost:8080/src/images/icons/apple-touch-icon.png"
                    }
                  ]
                };
                let hook =
                  "https://hooks.slack.com/services/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";
                axios({
                  method: "post",
                  url: hook,
                  data: JSON.stringify(payload)
                })
                  .then(response => {
                    this.$Modal.success({
                      title: "Success Ticket Created.",
                      content:
                        "Thanks for reaching out to us we will resolve and reach out to you as soon as possible"
                    });
                    this.formHelp.ticket = "";
                    this.$emit("done", false);
                  })
                  .catch(e => {
                    this.errors.push(e);
                  });
              }
            },
            response => {}
          );
        } else {
          this.$Message.error("Support message can't be empty");
          this.$emit("done", false);
        }
      } else {
        this.$Modal.error({
          title: "Sorry",
          content: "You have to be signed in before you can create a ticket"
        });
      }
    }
  }
};
</script>
