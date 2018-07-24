<template>
    <div class="nav__screen" :style="style()">
      <div
        class="nav__screen__item"
        v-on:click="scrollTo('projects', delay, delayHideNavScreen(delay))"
        v-on:mouseover="styleHover"
        v-on:mouseleave="styleLeave"
      >
        Projects
      </div>
      <div
        class="nav__screen__item"
        v-on:click="scrollTo('connect', delay, delayHideNavScreen(delay))"
        v-on:mouseover="styleHover"
        v-on:mouseleave="styleLeave"
      >
        Connect
      </div>
      <a
        v-for="link in socialLinks"
        :key="link.link"
        class="nav__screen__item"
        :href="link.link"
        target="_blank"
        v-on:mouseover="styleHover"
        v-on:mouseleave="styleLeave"
        v-if="isModeSmall"
      >
        {{link.text}}
      </a>
    </div>
</template>

<script>
export default {
  name: 'NavScreen',
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
  props: {
    isActive: Boolean,
    hideNavScreen: Function,
    scrollTo: Function,
    isModeSmall: Boolean
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
