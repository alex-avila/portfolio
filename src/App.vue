<template>
  <div id="app">
    <Intro />
    <Projects />
    <Connect />
    <Footer />
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";
import Projects from "./components/Projects.vue";
import Connect from "./components/Connect.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Intro,
    Projects,
    Connect,
    Footer
  }
};
</script>

<style>
html,
body {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

.utility-wrapper {
  padding: 0 1.618em;
  margin: auto;
  max-width: 1000px;
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
.wrapper {
  margin: 0;
  font-size: 18px;
  font-family: "Avenir";
  height: 100%;
  background: #fcfdff;
  color: #24195f;
  line-height: 1.618;
}

h4 {
  font-size: 24px;
  font-weight: 500;
}

h3 {
  font-size: 30px;
}

.section-title {
  color: #202ed5;
}

.section-title::after {
  content: "";
  display: block;
  background: #fdceff;
  height: 7px;
  width: 66px;
  margin: -15px 0 0 -1px;
}

.connect {
  padding-bottom: 3em;
  line-height: 2;
}

.connect__title {
  line-height: 1.618;
}

.connect__content {
  text-align: center;
  padding: 1.618em 0 1.618em;
}

.connect__content p:first-child {
  padding: 0.618em;
}

.connect__icons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3em 0;
}

.github {
  background: url(./assets/github.svg);
}

.dribbble {
  background: url(./assets/dribbble.svg);
}

.linkedin {
  background: url(./assets/linkedin.svg);
}

.icon {
  display: block;
  width: 45px;
  height: 45px;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}

.footer {
  display: flex;
  justify-content: center;
  padding: 0 0 3em;
  font-size: 15px;
}
</style>
