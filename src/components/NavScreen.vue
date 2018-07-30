<template>
  <div 
    :style="style()" 
    class="nav__screen">
    <div
      class="nav__screen__item"
      @click="scrollTo('projects', delay, delayHideNavScreen(delay))"
      @mouseover="styleHover"
      @mouseleave="styleLeave"
    >
      Projects
    </div>
    <div
      class="nav__screen__item"
      @click="scrollTo('connect', delay, delayHideNavScreen(delay))"
      @mouseover="styleHover"
      @mouseleave="styleLeave"
    >
      Connect
    </div>
    <template v-if="isModeSmall">
      <a
        v-for="link in socialLinks"
        :key="link.link"
        :href="link.link"
        class="nav__screen__item"
        target="_blank"
        rel="noopener"
        @mouseover="styleHover"
        @mouseleave="styleLeave"
      >
        {{ link.text }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavScreen',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    hideNavScreen: {
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
  data: function() {
    return {
      delay: 250,
      socialLinks: [
        {
          link: 'https://github.com/alex-avila',
          text: 'GitHub'
        },
        {
          link: 'https://dribbble.com/alex-avila',
          text: 'Dribbble'
        },
        {
          link: 'https://www.linkedin.com/in/alex-avila/',
          text: 'LinkedIn'
        }
      ]
    }
  },
  methods: {
    delayHideNavScreen: function(delay) {
      setTimeout(this.hideNavScreen, delay)
    },
    style: function() {
      document.body.style.overflow = this.isActive ? 'hidden' : 'auto'
      return this.isActive || !this.isModeSmall
        ? {
            transform: 'translateY(0)'
          }
        : {
            transform: 'translateY(-100%)'
          }
    },
    styleHover: function(e) {
      if (this.isModeSmall) {
        e.target.style.transform = 'scale(1.05)'
      }
      let elems = [
        ...document.getElementsByClassName('nav__screen__item')
      ].filter(elem => elem !== e.target)
      elems.forEach(elem => {
        elem.style.color = 'rgba(248, 234, 255, 0.5)'
      })
    },
    styleLeave: function(e) {
      if (this.isModeSmall) {
        e.target.style.transform = 'scale(1)'
      }
      let elems = [
        ...document.getElementsByClassName('nav__screen__item')
      ].filter(elem => elem !== e.target)
      elems.forEach(elem => {
        elem.style.color = 'rgba(248, 234, 255, 1)'
      })
    }
  }
}
</script>
