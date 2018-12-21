<template>
<Modal v-model="mode" @on-cancel="modalClose" title="Cost Estimate">
  <Row type="flex" justify="center">
    <img style="width:200px; height:auto;" src="/src/images/costs.svg" />
  </Row>
  <div style="text-align:center; margin-top:20px;">
    <h2 style="color:#000;">Find price Estimate of over 1000+ Services.</h2>
    <p style="font-size:14px;">Do you want to know the price of almost any service?</p>
    <br/>
    <h3><a>Are you asking questions like</a> <br/> How much will your wedding cost?,<br/> How much will the plumber charge or<br/> How much you will make as a Mechanic </h3>
    <br/> Dont worry Sturta has got you covered
    <p style="color:#3fa34d; font-size:14px;">We will be introducing cost estimates soon.</p>
    <br/>
  </div>
  <div slot="footer" style="text-align:left;">
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
