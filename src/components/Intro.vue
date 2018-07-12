<template>
    <div id="intro" class="intro__wrapper">
      <div class="intro__background"></div>
      <div class="utility-wrapper intro">
        <div class="intro__nav">
            <span class="intro__nav__logo" v-on:click="scrollTo('', 250)">Alex Avila</span>
            <span
              :style="icon"
              class="intro__nav__menu"
              v-on:click="toggleNavScreen()"
              v-if="isModeSmall"
            ></span>
            <NavScreen
              :isActive="isNavScreenOn" 
              :hideNavScreen="hideNavScreen"
              :scrollTo="scrollTo"
              :isModeSmall="isModeSmall"
            />
        </div>
        <div class="intro__headline">
            <span>Hey, I'm Alex.<br/>Full Stack Engineer and Designer based in Denver, CO.</span>
        </div>
        <div class="intro__skills">
            <h4>Main Skills</h4>
            <p>React, Redux, ES6, MongoDB, Express, Node JS, Vue, React Native</p>
        </div>
        <div
          class="intro__scroll-btn"
          v-on:click="scrollTo('projects', 250)"
        ></div>
      </div>
    </div>
</template>

<script>
import NavScreen from "./NavScreen";

export default {
  name: "Intro",
  components: {
    NavScreen
  },
  props: {
    scrollTo: Function,
    isModeSmall: Boolean
  },
  data: function() {
    return {
      isNavScreenOn: false
    };
  },
  computed: {
    icon() {
      return this.isNavScreenOn
        ? { background: `url(${require("../assets/ex.svg")})` }
        : { background: `url(${require("../assets/menu-icon.svg")})` };
    }
  },
  methods: {
    toggleNavScreen: function() {
      this.isNavScreenOn = !this.isNavScreenOn;
    },
    hideNavScreen: function() {
      this.isNavScreenOn = false;
    }
  }
};
</script>

<style scoped>
.intro__wrapper {
  position: relative;
  min-height: 600px;
  height: 100vh;
  z-index: 0;
}

.intro {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #f8eaff;
}

.intro__background {
  background: url(../assets/main-background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  min-height: 600px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
}

.intro__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.618em 0;
  font-weight: 600;
}

.intro__nav__logo {
  font-size: 21px;
  cursor: pointer;
}

.intro__nav__menu {
  position: relative;
  z-index: 4;
  /* background: url(../assets/menu-icon.svg); */
  display: block;
  width: 25px;
  height: 25px;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  cursor: pointer;
}

.intro__headline {
  text-align: left;
  margin: auto 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.8;
}

.intro__skills {
  padding: 0 0 60px;
  font-weight: 500;
}

.intro__scroll-btn {
  background: url(../assets/down-arrow.svg);
  display: block;
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  align-self: center;
  padding-bottom: 60px;
}

@media screen and (min-width: 650px) {
  .intro__background {
    background: url(../assets/large-bg-alt.svg);
    background-position: right 50% center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>

