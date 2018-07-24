<template>
  <div class="toggle">
    <div 
      id="development" 
      :class="{selected: optionSelected === 0}" 
      class="toggle__option toggle__option-1" 
      @click="selectOption(0)">
      <span>Development</span>
    </div>
    <div 
      id="ux-design" 
      :class="{selected: optionSelected === 1}" 
      class="toggle__option toggle__option-2" 
      @click="selectOption(1)">
      <span>UX Gallery</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsToggle',
  props: {
    selectOption: {
      type: Function,
      default: null
    },
    optionSelected: {
      type: Number,
      default: 0
    }
  }
}
</script>
