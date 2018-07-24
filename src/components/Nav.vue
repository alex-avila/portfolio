<template>
  <div
    :style="style"
    class="nav__wrapper"
  >
    <div class="nav">
      <div class="nav__logo-and-icon">
        <span 
          class="nav__logo" 
          @click="scrollTo('', 250)">Alex Avila</span>
        <div 
          v-if="isModeSmall" 
          :style="icon" 
          class="menu-icon-wrapper" 
          @click="toggleMenu()"/>
      </div>
      <NavMenu
        :is-active="isMenuActive"
        :collapse-menu="collapseMenu"
        :scroll-to="scrollTo"
        :is-mode-small="isModeSmall"
      />
    </div>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue'

export default {
  name: 'Nav',
  components: {
    NavMenu
  },
  props: {
    isNavOn: {
      type: Boolean,
      default: false
    },
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
      isMenuActive: false
    }
  },
  computed: {
    style() {
      if (!this.isNavOn) {
        this.collapseMenu()
      }
      return this.isNavOn
        ? { transform: 'translateY(0)' }
        : { transform: 'translateY(-300%)' }
    },
    icon() {
      return this.isMenuActive
        ? { background: `url(${require('../assets/ex-purp.svg')})` }
        : { background: `url(${require('../assets/menu-icon-purp.svg')})` }
    }
  },
  methods: {
    toggleMenu: function() {
      return (this.isMenuActive = !this.isMenuActive)
    },
    collapseMenu: function() {
      return (this.isMenuActive = false)
    }
  }
}
</script>
