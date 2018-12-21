<template>
  <Modal fullscreen v-model="mode" @on-cancel="modalClose" title="How Sturta works" class="mdhwts">
    <Row type="flex" justify="center">
      <Col :xs="23" :sm="14" :md="14">
        <Tabs value="name1">
          <TabPane label="Consumers" name="name1">
            <Row type="flex" justify="left" style="margin-top:30px;">
              <div class="how-it-works-step1">
                <img class="how-it-works-img1" src="/src/images/step1.svg" height="180" width="138">
                <div class="how-it-works-content">
                  <div class="how-t-works-label">1</div>
                  <div class="how-it-works-name">Describe the task</div>
                  <div
                    class="how-it-works-description"
                  >Choose from a variety of services and select the day and time you'd like a qualified local professional to show up. Give us the details and we'll find you the help.</div>
                </div>
              </div>
            </Row>

            <Row type="flex" justify="left">
              <div class="how-it-works-step2">
                <img class="how-it-works-img2" src="/src/images/step2.svg" height="180" width="138">
                <div class="how-it-works-content2">
                  <div class="how-t-works-label">2</div>
                  <div class="how-it-works-name">Get free estimates.</div>
                  <div
                    class="how-it-works-description2"
                  >We’ll get you bids from local professionals interested in the job, Choose your favourite and start chatting with them right in the app.</div>
                </div>
              </div>
            </Row>

            <Row type="flex" justify="left">
              <div class="how-it-works-step3">
                <img class="how-it-works-img3" src="/src/images/step3.svg" height="180" width="138">
                <div class="how-it-works-content">
                  <div class="how-t-works-label">3</div>
                  <div class="how-it-works-name">Get matched</div>
                  <div
                    class="how-it-works-description"
                  >Just like that, your worker arrives and gets the job done. When your task is complete, payment will happen seamlessly securely online through the app or you can make payments offline.</div>
                </div>
              </div>
            </Row>
          </TabPane>
          <TabPane label="Local Professionals" name="name2">
            <Row type="flex" justify="left" style="margin-top:30px;">
              <div class="how-it-works-step1">
                <img
                  class="how-it-works-img1"
                  src="/src/images/pstep1.svg"
                  height="180"
                  width="138"
                >
                <div class="how-it-works-content">
                  <div class="how-t-works-label">1</div>
                  <div class="how-it-works-name">Increase your customer growth</div>
                  <div
                    class="how-it-works-description"
                  >Customers come to Sturta to find pros like you. Customers see search results in real-time with profiles, prices, ratings and more.</div>
                </div>
              </div>
            </Row>

            <Row type="flex" justify="left">
              <div class="how-it-works-step2">
                <img
                  class="how-it-works-img2"
                  src="/src/images/pstep2.svg"
                  height="180"
                  width="138"
                >
                <div class="how-it-works-content2">
                  <div class="how-t-works-label">2</div>
                  <div class="how-it-works-name">Online Booking &amp; Appointments tool
                    <br>for your hourly services.
                  </div>
                  <div
                    class="how-it-works-description2"
                  >All your services are instantly bookable by customers on Sturta or on your free online booking website or through booking links.</div>
                </div>
              </div>
            </Row>

            <Row type="flex" justify="left">
              <div class="how-it-works-step3">
                <img
                  class="how-it-works-img3"
                  src="/src/images/pstep3.svg"
                  height="180"
                  width="138"
                >
                <div class="how-it-works-content">
                  <div class="how-t-works-label">3</div>
                  <div class="how-it-works-name">Treat your existing customers
                    <br>like a pro
                  </div>
                  <div
                    class="how-it-works-description"
                  >Treat each customer like a VIP, Send automatic reminders, Convenient rescheduling.... &amp; with powerful integrations embed on your website or sync with your favourite tools</div>
                </div>
              </div>
            </Row>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
    <div slot="footer" class="bg-sturta" style="text-align:left;">
      <Row type="flex" justify="center" style="margin:30px 20px;">
        <Col :xs="24" :sm="12">
          <Content class="blog-content text-center">
            <h2 class="c-b">Have more questions?</h2>
            <p
              style="font-size:14px;"
            >Do you have additional questions, get pro tips or want to learn more about how Sturta works</p>
            <a
              class="press-release"
              href="https://blog.sturta.com"
              target="_blank"
            >Click here to visit our Blog</a>
          </Content>
        </Col>
      </Row>
    </div>
  </Modal>
</template>

<script>
export default {
  props: ["hwt"],
  name: "Howitworks",
  data() {
    return {
      mode: false
    };
  },
  watch: {
    hwt: function(val) {
      this.mode = val;
    }
  },
  methods: {
    modalClose() {
      this.$emit("hwtClose", false);
    }
  }
};
</script>
<style scoped>
.c-b {
  color: #000;
}
.how-it-works-img1 {
  float: right;
}
.how-it-works-img2 {
  float: left;
}
.how-it-works-img3 {
  float: right;
}
.how-it-works-content {
  float: left;
}
.how-it-works-content2 {
  float: right;
}
.how-it-works-name {
  font-size: 23px !important;
  color: #333;
}
.how-it-works-description {
  word-wrap: break-word;
  float: right;
}
.how-it-works-description2 {
  word-wrap: break-word;
}
.how-it-works-description,
.how-it-works-description2 {
  font-size: 16px !important;
  width: 500px;
  padding: 20px;
}
@media (max-width: 600px) {
  .how-it-works-description,
  .how-it-works-description2 {
    font-size: 16px !important;
    width: 300px;
    padding: 20px;
  }
}
.how-t-works-label {
  margin-bottom: 30px;
  margin-left: 15px;
  color: #86919d;
  font-size: 16px !important;
  width: 35px;
  height: 35px;
  border: solid 1px #86919d;
  border-radius: 100%;
  text-align: center;
  line-height: 35px;
}
</style>
