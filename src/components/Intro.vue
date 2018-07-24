<template>
  <div 
    id="intro" 
    class="intro__wrapper">
    <div class="intro__background"/>
    <div class="utility-wrapper intro">
      <div class="intro__nav">
        <span 
          class="intro__nav__logo" 
          @click="scrollTo('', 250)">Alex Avila</span>
        <span
          v-if="isModeSmall"
          :style="icon"
          class="intro__nav__menu"
          @click="toggleNavScreen()"
        />
        <NavScreen
          :is-active="isNavScreenOn"
          :hide-nav-screen="hideNavScreen"
          :scroll-to="scrollTo"
          :is-mode-small="isModeSmall"
        />
      </div>
      <div class="intro__headline">
        <span>Hey, I'm Alex.<br>Full Stack Engineer and Designer based in Denver, CO.</span>
      </div>
      <div class="intro__skills">
        <h4>Main Skills</h4>
        <p>React, Redux, ES6, MongoDB, Express, Node JS, Vue, React Native</p>
      </div>
      <div
        class="intro__scroll-btn"
        @click="scrollTo('projects', 250)"
      />
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
    scrollTo: {
      type: Function,
      default: null
    },
    isModeSmall: {
      type: Boolean,
      default: true
    }
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
