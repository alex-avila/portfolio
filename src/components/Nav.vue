<template>
	<div
		class="nav"
		:style="style"
	>
		<div class="nav__logo-and-icon">
				<span class="nav__logo" v-on:click="scrollTo('', 250)">Alex Avila</span>
				<div class="menu-icon-wrapper" v-on:click="toggleMenu()" :style="icon"></div>
		</div>
		<NavMenu
			:isActive="isMenuActive"
			:collapseMenu="collapseMenu"
			:scrollTo="scrollTo"
		/>
	</div>
</template>

<script>
import NavMenu from "./NavMenu.vue";

export default {
  name: "Nav",
  components: {
    NavMenu
  },
  data: function() {
    return {
      isMenuActive: false
    };
  },
  props: {
    isNavOn: Boolean,
    scrollTo: Function
  },
  computed: {
    style() {
      if (!this.isNavOn) {
        this.collapseMenu()
      }
      return this.isNavOn
        ? { transform: "translateY(0)" }
        : { transform: "translateY(-300%)" };
    },
    icon() {
      return this.isMenuActive
        ? { background: `url(${require("../assets/ex-blk.svg")})` }
        : { background: `url(${require("../assets/menu-icon-blk.svg")})` };
    }
  },
  methods: {
    toggleMenu: function() {
      return (this.isMenuActive = !this.isMenuActive);
    },
    collapseMenu: function() {
      return (this.isMenuActive = false);
    }
  }
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  width: 100%;
  background: #fcfdff;
  z-index: 1;
  transition: all 0.25s;
}
.nav {
  font-weight: 600;
}
.nav__logo-and-icon {
  padding: 1em 1.618em;
  position: relative;
  background: linear-gradient(
    to bottom,
    #fcfdff 70%,
    rgba(255, 255, 255, 0.25) 150%
  );
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo {
  font-size: 21px;
  cursor: pointer;
}
.menu-icon-wrapper {
  margin-top: 3px;
  width: 25px;
  height: 14px;
  background-size: contain !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  cursor: pointer;
}
.cls-1 {
  fill: none;
  stroke: #2c3e50;
  stroke-width: 2px;
}
</style>

