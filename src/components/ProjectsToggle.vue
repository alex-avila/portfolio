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
