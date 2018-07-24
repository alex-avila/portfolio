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
import NavScreen from './NavScreen'

export default {
  name: 'Intro',
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
    }
  },
  computed: {
    icon() {
      return this.isNavScreenOn
        ? { background: `url(${require('../assets/ex.svg')})` }
        : { background: `url(${require('../assets/menu-icon.svg')})` }
    }
  },
  methods: {
    toggleNavScreen: function() {
      this.isNavScreenOn = !this.isNavScreenOn
    },
    hideNavScreen: function() {
      this.isNavScreenOn = false
    }
  }
}
</script>
