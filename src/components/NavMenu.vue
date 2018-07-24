<template>
    <div class="nav__menu" :style="style">
      <div
        class="nav__menu__item"
        v-on:click="scrollTo('', 250, collapseMenu())"
        v-on:mouseover="styleHover"
        v-on:mouseleave="styleLeave"
      >Top</div>
      <div
        class="nav__menu__item"
        v-on:click="scrollTo('projects', 250, collapseMenu())"
        v-on:mouseover="styleHover"
        v-on:mouseleave="styleLeave"
      >Projects</div>
      <div
        class="nav__menu__item"
        v-on:click="scrollTo('connect', 250, collapseMenu())"
        v-on:mouseover="styleHover"
        v-on:mouseleave="styleLeave"
      >Connect</div>
    </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    isActive: Boolean,
    collapseMenu: Function,
    scrollTo: Function,
    isModeSmall: Boolean
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
