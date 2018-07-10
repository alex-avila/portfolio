<template>
    <div class="nav__menu" :style="style">
      <div 
        class="nav__menu__item" 
        v-on:click="scrollTo('projects', delay, delayHideNavScreen(delay))"
      >
        Projects
      </div>
      <div 
        class="nav__menu__item" 
        v-on:click="scrollTo('connect', delay, delayHideNavScreen(delay))"
      >
        Connect
      </div>
      <a class="nav__menu__item" href="https://github.com/alex-avila" target="_blank">
				GitHub
			</a>
			<a class="nav__menu__item" href="https://dribbble.com/Alex_Avila" target="_blank">
				Dribbble
			</a>
			<a class="nav__menu__item" href="https://www.linkedin.com/in/alex-avilx/" target="_blank">
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
    }
  },
  props: {
    isActive: Boolean,
		hideNavScreen: Function,
		scrollTo: Function
  },
  computed: {
    style() {
      return this.isActive
        ? {
            transform: "translateY(0)"
          }
        : {
            transform: "translateY(-100%)"
          };
    }
	},
	methods: {
		delayHideNavScreen: function (delay) {
			setTimeout(this.hideNavScreen, delay)
		}
	}
};
</script>


<style lang="scss" scoped>
.nav__menu {
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

.nav__menu__item {
  padding: 0 1em 1em;
  cursor: pointer;
}
</style>

