<template>
    <div
        class="nav"
        :style="style">
        <span class="nav__logo">Alex Avila</span>
        <div class="menu-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.82 14">
            <defs>
            </defs>
            <g id="menu_icon" class="nav__menu intro__nav__menu" data-name="Menu Icon" transform="translate(-321.68 -33.5)">
                <line id="Line_1" data-name="Line 1" class="cls-1" x2="23.82" transform="translate(321.68 40.5)"/>
                <line id="Line_2" data-name="Line 2" class="cls-1" x2="23.82" transform="translate(321.68 46.5)"/>
                <line id="Line_3" data-name="Line 3" class="cls-1" x2="23.82" transform="translate(321.68 34.5)"/>
            </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    isNavOn: Boolean
  },
  computed: {
    style() {
      return this.isNavOn
        ? { transform: "translateY(0)" }
        : { transform: "translateY(-500%)" };
    }
  }
};
</script>

<style lang="sass">
.nav
    position: fixed
    display: flex
    align-items: center
    justify-content: center
    width: 100%
    background: #fcfdff
    z-index: 1
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1)
    transition: all 0.25s

.nav
    display: flex
    align-items: center
    justify-content: space-between
    padding: 1em 1.618em
    font-weight: 600

.nav__logo
    font-size: 21px
    cursor: pointer

.menu-icon-wrapper
    width: 25px;

.cls-1
    fill: none;
    stroke: #2c3e50;
    stroke-width: 2px;
</style>

