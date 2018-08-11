<template>
  <div class="project">
    <a 
      :href="link" 
      target="_blank"
      rel="noopener"
      class="project__link">
      <div
        :class="{gallery__img__container: mode === 'ux-design', project__img__container: mode === 'development'}"
      >
        <img 
          :src="image" 
          :alt="title" 
          class="project__img">
      </div>
      <div 
        v-if="isModeSmall" 
        class="project__title">{{ title }}</div>
      <div 
        v-if="!isModeSmall" 
        class="project__info-lg">
        <div class="project__title">{{ title }}</div>
        <div v-if="mode === 'development'" class="project__description">{{ description }}</div>
      </div>
    </a>
    <div 
      v-if="isModeSmall" 
      class="project__description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    isModeSmall: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'development'
    }
  },
  computed: {
    style() {
      return `background-image: url(${this.image})`
    }
  }
}
</script>
