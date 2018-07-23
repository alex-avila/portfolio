<template>
  <div id="app">
    <Nav :isNavOn="isNavOn" :scrollTo="scrollTo" :isModeSmall="isModeSmall"/>
    <Intro :scrollTo="scrollTo" :isModeSmall="isModeSmall"/>
    <Projects :isModeSmall="isModeSmall"/>
    <Connect />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Intro from "./components/Intro.vue";
import Projects from "./components/Projects.vue";
import Connect from "./components/Connect.vue";

export default {
  name: "app",
  components: {
    Nav,
    Intro,
    Projects,
    Connect
  },
  data: function() {
    return {
      isNavOn: false,
      isModeSmall: true
    };
  },
  methods: {
    popNav: function() {
      const scrollDest = document.getElementById("intro").offsetHeight;
      this.isNavOn = window.pageYOffset >= scrollDest - 5;
    },
    scrollTo: function(destination, duration = 200, callback) {
      if (callback) callback();
      const scrollDest = destination
        ? document.getElementById(destination).offsetTop
        : document.body.offsetTop;
      const heightToScroll = Math.abs(scrollDest - window.pageYOffset);
      const i = heightToScroll / duration;
      let x = i;
      const int = setInterval(() => {
        const screenBottom = window.pageYOffset + window.innerHeight;
        const screenHeight = document.body.scrollHeight;
        const scrollToNum =
          window.pageYOffset < scrollDest
            ? x + window.pageYOffset > scrollDest
              ? scrollDest
              : x + window.pageYOffset
            : window.pageYOffset - x < scrollDest
              ? scrollDest
              : window.pageYOffset - x;
        window.scrollTo(0, scrollToNum);
        if (scrollToNum === scrollDest) {
          clearInterval(int);
        }
        if (window.pageYOffset < scrollDest) {
          if (
            window.pageYOffset >= scrollDest ||
            screenHeight === screenBottom
          ) {
            clearInterval(int);
          }
        } else {
          if (window.pageYOffset <= scrollDest || window.pageYOffset === 0) {
            clearInterval(int);
          }
        }
        x += i;
      }, 16.7);
    },
    toggleMode: function() {
      if (window.innerWidth < 650) {
        this.isModeSmall = true;
      } else {
        this.isModeSmall = false;
      }
    }
  },
  created() {
    if (window.innerWidth < 650) {
      this.isModeSmall = true;
    } else {
      this.isModeSmall = false;
    }
    window.addEventListener("resize", this.toggleMode);
    window.addEventListener("scroll", this.popNav);
  },
  destroyed() {
    window.removeEventListener("resize", this.toggleMode);
    window.removeEventListener("scroll", this.popNav);
  }
};
</script>

<style lang="scss">
@import "style/main.scss";
</style>
