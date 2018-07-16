<template>
  <div id="project">
    <a :href="link" target="_blank" class="project__link">
      <div
        :class="{gallery__img__container: mode === 'ux-design', project__img__container: mode === 'development'}"
      >
        <img class="project__img" :src="image" :alt="title">
      </div>
      <div v-if="isModeSmall" class="project__title">{{ title }}</div>
      <div v-if="!isModeSmall" class="project__info-lg">
        <div class="project__title">{{ title }}</div>
        <div class="project__description">{{ description }}</div>
      </div>
    </a>
    <div v-if="isModeSmall" class="project__description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["title", "description", "image", "link", "isModeSmall", "mode"],
  computed: {
    style() {
      return `background-image: url(${this.image})`;
    }
  }
};
</script>
