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
  name: "NavMenu",
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
            transform: "translateY(0)"
          }
        : {
            transform: "translateY(-100%)"
          };
    }
  },
  methods: {
    styleHover: function(e) {
      let elems = [
        ...document.getElementsByClassName("nav__menu__item")
      ].filter(elem => elem !== e.target);
      elems.forEach(elem => {
        elem.style.color = "rgba(82, 47, 236, 0.5)";
      });
    },
    styleLeave: function(e) {
      let elems = [
        ...document.getElementsByClassName("nav__menu__item")
      ].filter(elem => elem !== e.target);
      elems.forEach(elem => {
        elem.style.color = "rgb(82, 47, 236)";
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.nav__menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfdff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  left: 0;
  z-index: 0;
  transition: all 0.25s;
  color: rgb(82, 47, 236);
}

.nav__menu__item {
  padding: 0 1em 1em;
  cursor: pointer;
  transition: all 0.25s;
}

@media screen and (min-width: 650px) {
  .nav__menu {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    background: none;
    box-shadow: none;
    width: auto;
    z-index: 0;
    transition: all 0.25s;
  }

  .nav__menu__item {
    padding: 0 1em 0;
    cursor: pointer;
  }

  .nav__menu__item:last-child {
    padding: 0 0 0 1em;
  }
}
</style>
