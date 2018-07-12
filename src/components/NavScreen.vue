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
        class="nav__screen__item"
        href="https://github.com/alex-avila"
        target="_blank"
        v-on:mouseover="styleHover"
        v-on:mouseleave="styleLeave"
        v-if="isModeSmall"
      >
				GitHub
			</a>
			<a
        class="nav__screen__item"
        href="https://dribbble.com/alex-avila"
        target="_blank"
        v-on:mouseover="styleHover"
        v-on:mouseleave="styleLeave"
        v-if="isModeSmall"
      >
				Dribbble
			</a>
			<a
        class="nav__screen__item"
        href="https://www.linkedin.com/in/alex-avilx/"
        target="_blank"
        v-on:mouseover="styleHover"
        v-on:mouseleave="styleLeave"
        v-if="isModeSmall"
      >
				LinkedIn
			</a>
    </div>
</template>

<script>
export default {
  name: "NavScreen",
  data: function() {
    return {
      delay: 250
    };
  },
  props: {
    isActive: Boolean,
    hideNavScreen: Function,
    scrollTo: Function,
    isModeSmall: Boolean
  },
  methods: {
    delayHideNavScreen: function(delay) {
      setTimeout(this.hideNavScreen, delay);
    },
    style: function() {
      document.body.style.overflow = this.isActive ? "hidden" : "auto";
      return this.isActive || !this.isModeSmall
        ? {
            transform: "translateY(0)"
          }
        : {
            transform: "translateY(-100%)"
          };
    },
    styleHover: function(e) {
      if (this.isModeSmall) {
        e.target.style.transform = "scale(1.05)";
      }
      let elems = [
        ...document.getElementsByClassName("nav__screen__item")
      ].filter(elem => elem !== e.target);
      elems.forEach(elem => {
        elem.style.color = "rgba(248, 234, 255, 0.5)";
      });
    },
    styleLeave: function(e) {
      if (this.isModeSmall) {
        e.target.style.transform = "scale(1)";
      }
      let elems = [
        ...document.getElementsByClassName("nav__screen__item")
      ].filter(elem => elem !== e.target);
      elems.forEach(elem => {
        elem.style.color = "rgba(248, 234, 255, 1)";
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.nav__screen {
  position: fixed;
  font-size: 26px;
  font-weight: 600;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgb(96, 73, 130), rgb(96, 73, 130));
  height: 100%;
  width: 100%;
  z-index: 0;
  transition: all 0.25s;
}

.nav__screen__item {
  padding: 0 1em 1em;
  cursor: pointer;
  transition: all 0.25s;
}

@media screen and (min-width: 650px) {
  .nav__screen {
    position: relative;
    font-size: 1rem;
    font-weight: 600;
    z-index: 2;
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background: none;
    z-index: 0;
    transition: all 0.25s;
    animation: fadeIn 1s cubic-bezier(1, 0.03, 1, 1);
  }

  .nav__screen__item {
    padding: 0 2em;
    cursor: pointer;
    transition: all 0.25s;
  }

  .nav__screen__item:last-child {
    padding: 0 0 0 2em;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>

