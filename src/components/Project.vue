<template>
    <div id="project">
        <a :href="link" target="_blank" class="project__link">
            <div class="project__img__container">
              <img class="project__img" :src="image" :alt="title">
            </div>
            <div class="project__title">{{ title }}</div>
        </a>
        <div class="project__description">{{ description }}</div>
        <!-- <div v-if="">
          <div class="project__title">{{ title }}</div>
          <div class="project__description">{{ description }}</div>
        </div> -->
    </div>
</template>

<script>
export default {
  name: "Project",
  props: ["title", "description", "image", "link"],
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
}

.project__link:hover {
  .project__img__container {
    box-shadow: 0 5px rgba(82, 47, 236, 1);
  }
  .project__img {
    transform: scale(1.1);
  }
}

.project__img__container {
  background-size: cover;
  background-position: center;
  width: 100%;
  box-shadow: 0 5px rgba(82, 47, 236, 0.55);
  margin: 1.618em 0 1em;
  transition: all 0.25s;
  overflow: hidden;
}

.project__img {
  display: block;
  max-width: 100%;
  transition: all 0.25s;
}

@media screen and (min-width: 500px) {
  
}
</style>

