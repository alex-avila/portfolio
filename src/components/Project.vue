<template>
    <div id="project">
        <a :href="link" target="_blank" class="project__link">
            <img class="project__img" :src="image" :alt="title">
            <div class="project__title">{{ title }}</div>
        </a>
        <div>{{ description }}</div>
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
    .project__img {
        box-shadow: 0 5px rgba(82, 47, 236, 1);
    }
}

.project__img {
  background-size: cover;
  background-position: center;
  width: 100%;
  box-shadow: 0 5px rgba(82, 47, 236, 0.55);
  margin: 1.618em 0 1em;
  transition: all 0.25s;
}
</style>

