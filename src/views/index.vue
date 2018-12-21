<template>
  <div>
    <!-- Hero(extended) navbar -->
    <div class="navbar navbar--extended" :style="{'position':'absolute'}">
      <nav class="nav__mobile"></nav>
      <div class="container">
        <div class="navbar__inner">
          <a href="index.html" class="navbar__logo">
            <img src="/src/images/logo.png" class="app-nav-logo">
          </a>
          <nav class="navbar__menu">
            <ul>
              <li>
                <a href="#">Header Option 1</a>
              </li>
              <li>
                <a href="#">Header Option 2</a>
              </li>
              <li>
                <a href="/authenticate">Log In / Sign Up</a>
              </li>
            </ul>
          </nav>
          <div class="navbar__menu-mob">
            <a href id="toggle">
              <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  class
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero unit -->
    <div class="hero">
      <div class="hero__overlay hero__overlay--gradient"></div>
      <div class="hero__mask"></div>
      <div class="hero__inner">
        <div class="container">
          <div class="hero__content">
            <div class="hero__content__inner" id="navConverter">
              <h1 class="hero__title">All Orders, From All Clients, In One Website For Free</h1>
              <p class="hero__text text-center">
                Your description here Similar to that of the appraiser portal, however there are differences
                Lender or client will be able to request one or multiple appraisers for any one assignment..
              </p>
              <a href="/authenticate" class="button button__accent">Get Started for Free</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__sub">
      <span id="scrollToNext" class="scroll">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          class="hero__sub__down"
          fill="currentColor"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
        >
          <path
            d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3z"
          ></path>
        </svg>
      </span>
    </div>
    <!-- Steps -->
    <div class="steps landing__section">
      <div class="container">
        <h2>How it works</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div class="container">
        <div class="steps__inner">
          <div class="step">
            <div class="step__media">
              <img src="/src/assets/images/undraw_designer.svg" class="step__image">
            </div>
            <h4>Option 1</h4>
            <p
              class="step__text"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div class="step">
            <div class="step__media">
              <img src="/src/assets/images/undraw_responsive.svg" class="step__image">
            </div>
            <h4>Option 2</h4>
            <p
              class="step__text"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div class="step">
            <div class="step__media">
              <img src="/src/assets/images/undraw_creation.svg" class="step__image">
            </div>
            <h4>Option 3</h4>
            <p
              class="step__text"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Expanded sections -->
    <div class="expanded landing__section">
      <div class="container">
        <div class="expanded__inner">
          <div class="expanded__media">
            <img src="/src/assets/images/undraw_browser.svg" class="expanded__image">
          </div>
          <div class="expanded__content">
            <h2 class="expanded__title">Lorem Ipsum is simply dummy text.</h2>
            <p
              class="expanded__text"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply d0s.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="expanded landing__section">
      <div class="container">
        <div class="expanded__inner">
          <div class="expanded__media">
            <img src="/src/assets/images/undraw_frameworks.svg" class="expanded__image">
          </div>
          <div class="expanded__content">
            <h2 class="expanded__title">Lorem Ipsum is simply dummy text.</h2>
            <p
              class="expanded__text"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dnce.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="expanded landing__section">
      <div class="container">
        <div class="expanded__inner">
          <div class="expanded__media">
            <img src="/src/assets/images/together.svg" class="expanded__image">
          </div>
          <div class="expanded__content">
            <h2 class="expanded__title">Lorem Ipsum is simply dummy text.</h2>
            <p
              class="expanded__text"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dnce.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Call To Action -->
    <div class="cta cta--reverse">
      <div class="container">
        <div class="cta__inner">
          <h2 class="cta__title">Get started now</h2>
          <p class="cta__sub cta__sub--center">A since the 1500s.Lorem Ipsum is simply.</p>
          <a href="#" class="button button__accent">Get Started For Free</a>
        </div>
      </div>
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
export default {
  created() {
    this.addScripts("/src/assets/js/app.min.js");
  },
  methods: {
    addScripts(e) {
      let create = document.createElement("script");
      create.setAttribute("src", e);
      document.head.appendChild(create);
    }
  }
};
</script>
