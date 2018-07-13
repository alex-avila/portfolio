<template>
    <div class="toggle">
        <div id="development" class="toggle__option toggle__option-1" :class="{selected: optionSelected === 0}" v-on:click="selectOption(0)">
            <span>Development</span>
        </div>
        <div id="ux-design" class="toggle__option toggle__option-2" :class="{selected: optionSelected === 1}" v-on:click="selectOption(1)">
            <span>UX Gallery</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "ProjectsToggle",
  props: {
      selectOption: Function,
      optionSelected: Number
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 9px;
  overflow: hidden;
  margin: auto;
  font-weight: 500;
  @media screen and (min-width: 650px) {
    margin: 0;
  }
}

.toggle__option {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1em 0.618em;
  background: #fcfdff;
  color: #532fec;
  border: 1.5px solid #532fec;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.25s;
}

.toggle__option span {
  margin-top: 1.5px;
}

.toggle__option-1 {
  border-radius: 9px 0 0 9px;
  border-right: 1px solid #532fec;
}

.toggle__option-2 {
  border-radius: 0 9px 9px 0;
}

.selected {
  background: #532fec;
  color: #fcfdff;
}
</style>


