<template>
  <div id="app">
    <Nav :isNavOn="isNavOn" :scrollTo="scrollTo" :isModeSmall="isModeSmall"/>
    <Intro :scrollTo="scrollTo" :isModeSmall="isModeSmall"/>
    <Projects :isModeSmall="isModeSmall"/>
    <Connect />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Intro from "./components/Intro.vue";
import Projects from "./components/Projects.vue";
import Connect from "./components/Connect.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Nav,
    Intro,
    Projects,
    Connect,
    Footer
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
          clearInterval(int)
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
html,
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

.utility-wrapper {
  padding: 0 1.618em;
  margin: auto;
  max-width: 900px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  font-size: 16px;
  font-family: "Avenir", "Helvetica Neue", "Arial", sans-serif;
  /* height: 100%; */
  background: #fcfdff;
  color: #24195f;
  line-height: 1.618;
}

h4 {
  font-size: 21px;
  font-weight: 500;
}

h3 {
  font-size: 26px;
}

.section-title {
  color: #202ed5;
  @media screen and (min-width: 650px) {
    font-size: 30px;
  }
}

.section-title::after {
  content: "";
  display: block;
  background: #fdceff;
  height: 7px;
  width: 66px;
  margin: -16.75px 0 0 -1px;
}

.footer {
  display: flex;
  justify-content: center;
  padding: 0 0 3em;
  font-size: 13px;
}
</style>
