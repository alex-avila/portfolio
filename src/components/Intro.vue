<template>
    <div id="intro" class="intro utility-wrapper">
            <div class="intro__background"></div>
            <div class="intro__nav">
                <span class="intro__nav__logo">Alex Avila</span>
                <span class="intro__nav__menu"></span>
            </div>
            <div class="intro__headline">
                <span>I'm a full stack developer with an affinity for design.</span>
            </div>
            <div class="intro__skills">
                <h4>Main Skills</h4>
                <p>React, Redux, ES6, MongoDB, Express, Node JS, Vue, React Native</p>
            </div>
            <div
              class="intro__scroll-btn"
              v-on:click="scrollDown()"
            ></div>
        </div>
</template>

<script>
export default {
  name: "Intro",
  methods: {
    scrollDown: function() {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: document.getElementById('intro').offsetHeight
      })
    }
  }
};
</script>

<style scoped>
.intro {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  color: #f8eaff;
  margin-bottom: 3em;
  z-index: 0;
}

.intro__background {
  background: url(../assets/main-background.svg);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
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
  background: url(../assets/menu-icon.svg);
  display: block;
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}

.intro__headline {
  text-align: center;
  margin: auto;
  font-size: 38px;
  font-weight: 600;
  line-height: 1.8;
}

.intro__skills {
  padding: 0 0 60px;
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
</style>

