<template>
    <div class="nav__menu" :style="style">
      <div class="nav__menu__item" v-on:click="scrollTo('', 250)">Top</div>
      <div class="nav__menu__item" v-on:click="scrollTo('projects', 250)">Projects</div>
      <div class="nav__menu__item" v-on:click="scrollTo('connect', 250)">Connect</div>
    </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    isActive: Boolean,
    collapseMenu: Function
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
    scrollTo: function(destination, duration = 200) {
      this.collapseMenu()
      const scrollDest = destination
        ? document.getElementById(destination).offsetTop
        : document.body.offsetTop;
      const heightToScroll = Math.abs(scrollDest - window.pageYOffset);
      const i = heightToScroll / duration;
      let x = i;
      const int = setInterval(() => {
        const screenBottom = window.pageYOffset + window.innerHeight;
        const screenHeight = document.body.scrollHeight;
        const scrollToNum =
          window.pageYOffset < scrollDest
            ? x + window.pageYOffset > scrollDest
              ? scrollDest
              : x + window.pageYOffset
            : window.pageYOffset - x < scrollDest
              ? scrollDest
              : window.pageYOffset - x;
        window.scrollTo(0, scrollToNum);
        if (window.pageYOffset < scrollDest) {
          if (
            window.pageYOffset >= scrollDest ||
            screenHeight === screenBottom
          ) {
            clearInterval(int);
          }
        } else {
          if (window.pageYOffset <= scrollDest || window.pageYOffset === 0) {
            clearInterval(int);
          }
        }
        x += i;
      }, 16.7);
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
  z-index: 0;
  transition: all 0.25s;
}

.nav__menu__item {
  padding: 0 1em 1em;
  cursor: pointer;
}
</style>
