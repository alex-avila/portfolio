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


<style lang="scss">
.project__title {
  font-size: 21px;
  color: #256df7;
  font-weight: 600;
  padding: 0 0 0.25em;
}

.project__link {
  transition: all 0.25s;
  position: relative;
}

.project__link:hover {
  .project__info-lg {
    visibility: visible;
    opacity: 1;
  }

  .project__img__container {
    border-bottom: 5px solid rgb(118, 87, 255);
  }
  
  .project__img {
    transform: scale(1.1);
  }
}

.project__img__container {
  background-size: cover;
  background-position: center;
  width: 100%;
  margin: 1.618em 0 1em;
  border-bottom: 5px solid rgba(82, 47, 236, 0.5);
  transition: all 0.25s;
  overflow: hidden;
}

.gallery__img__container {
  background-size: cover;
  background-position: center;
  width: 100%;
  margin: 1.618em 0 1em;
  transition: all 0.25s;
  overflow: hidden;
}

.project__img {
  display: block;
  max-width: 100%;
  transition: all 0.25s;
}

@media screen and (min-width: 650px) {
  .project__link {
    display: block;
    height: 100%;
    width: 100%;
    transition: all 0.25s;
    position: relative;
  }

  .project__img__container,
  .gallery__img__container {
    margin: 0;
  }

  .project__info-lg {
    position: absolute;
    background: linear-gradient(
      10deg,
      rgba(59, 51, 91, 0.6),
      rgba(59, 51, 91, 0.8)
    );
    color: #fdfaff;
    display: flex;
    font-weight: 600;
    padding: 2em;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    visibility: hidden;
    opacity: 0;
    transition: all 0.25s;
  }

  .project__info-lg .project__title {
    background: #fdfaffde;
    border-radius: 3px;
    padding: 0.1em 0.618em 0;
    margin: 0.25em;
  }
}
</style>

