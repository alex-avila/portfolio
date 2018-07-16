<template>
	<div
		class="nav__wrapper"
    :style="style"
	>
    <div class="nav">
      <div class="nav__logo-and-icon">
          <span class="nav__logo" v-on:click="scrollTo('', 250)">Alex Avila</span>
          <div class="menu-icon-wrapper" v-on:click="toggleMenu()" :style="icon" v-if="isModeSmall"></div>
      </div>
      <NavMenu
        :isActive="isMenuActive"
        :collapseMenu="collapseMenu"
        :scrollTo="scrollTo"
        :isModeSmall="isModeSmall"
      />
    </div>
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
      isMenuActive: false,
    };
  },
  props: {
    isNavOn: Boolean,
    scrollTo: Function,
    isModeSmall: Boolean
  },
  computed: {
    style() {
      if (!this.isNavOn) {
        this.collapseMenu();
      }
      return this.isNavOn
        ? { transform: "translateY(0)" }
        : { transform: "translateY(-300%)" };
    },
    icon() {
      return this.isMenuActive
        ? { background: `url(${require("../assets/ex-purp.svg")})` }
        : { background: `url(${require("../assets/menu-icon-purp.svg")})` };
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
