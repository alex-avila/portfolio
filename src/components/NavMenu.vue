<template>
  <div 
    :style="style" 
    class="nav__menu">
    <div
      class="nav__menu__item"
      @click="scrollTo('', 250, collapseMenu())"
      @mouseover="styleHover"
      @mouseleave="styleLeave"
    >Top</div>
    <div
      class="nav__menu__item"
      @click="scrollTo('projects', 250, collapseMenu())"
      @mouseover="styleHover"
      @mouseleave="styleLeave"
    >Projects</div>
    <div
      class="nav__menu__item"
      @click="scrollTo('connect', 250, collapseMenu())"
      @mouseover="styleHover"
      @mouseleave="styleLeave"
    >Connect</div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    collapseMenu: {
      type: Function,
      default: null
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
  computed: {
    style() {
      return this.isActive || !this.isModeSmall
        ? {
            transform: 'translateY(0)'
          }
        : {
            transform: 'translateY(-100%)'
          }
    }
  },
  methods: {
    styleHover: function(e) {
      let elems = [
        ...document.getElementsByClassName('nav__menu__item')
      ].filter(elem => elem !== e.target)
      elems.forEach(elem => {
        elem.style.color = 'rgba(82, 47, 236, 0.5)'
      })
    },
    styleLeave: function(e) {
      let elems = [
        ...document.getElementsByClassName('nav__menu__item')
      ].filter(elem => elem !== e.target)
      elems.forEach(elem => {
        elem.style.color = 'rgb(82, 47, 236)'
      })
    }
  }
}
</script>
