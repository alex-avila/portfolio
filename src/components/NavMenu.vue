<template>
    <div class="nav__menu" :style="style">
        <div class="nav__menu__item">Top</div>
        <div class="nav__menu__item">Projects</div>
        <div class="nav__menu__item">About</div>
    </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    isActive: Boolean
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
  padding: 1em;
}
</style>
