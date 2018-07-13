<template>
    <div id="projects" class="utility-wrapper projects">
        <div class="projects__title-and-toggle">
            <h3 class="section-title projects__title">Projects</h3>
            <ProjectsToggle :selectOption="selectOption" :optionSelected="optionSelected"/>
        </div>
        <div class="projects__projects">
            <slot v-for="project in projects">
                <Project
                    :isModeSmall="isModeSmall"
                    :image="project.image"
                    :link="project.link"
                    :title="project.title"
                    :description="project.description"
                />
            </slot>
        </div>
    </div>
</template>

<script>
import Project from "./Project.vue";
import ProjectsToggle from "./ProjectsToggle.vue";

export default {
  name: "Projects",
  components: {
    Project,
    ProjectsToggle
  },
  data: function() {
    return {
      optionSelected: 0,
      projects: [
        {
          image: require("../assets/re-act-arcade.jpg"),
          link: "https://re-act-arcade.herokuapp.com/",
          title: "(re)act arcade",
          description:
            "Arcade group project. I contributed on the backend, frontend, UI, and the database structure."
        },
        {
          image: require("../assets/wario-srs.jpg"),
          link: "https://wario-srs.herokuapp.com/",
          title: "Wario SRS",
          description:
            "Simple personal flashcard app that uses the SuperMemo spaced repetition algorithm. (Work in progress)."
        },
        {
          image: require("../assets/tic-tac-toe.jpg"),
          link: "https://alex-avila.github.io/tic-tac-toe-world/#/",
          title: "Tic Tac Toe World",
          description:
            "A.I. that creates an unbeatable tic tac toe game. Displays weather data from an API."
        },
        {
          image: require("../assets/memory-game.jpg"),
          link: "https://alex-avila.github.io/memory-game/",
          title: "RPG Memory Game",
          description: "Simple game of concentration in React."
        }
      ]
    };
  },
  props: {
    isModeSmall: Boolean
  },
  methods: {
    selectOption: function(selection) {
      this.optionSelected = selection;
    }
  }
};
</script>

<style lang="sass" scoped>
#projects
    padding-top: 3em

.projects__title-and-toggle
    display: flex
    flex-direction: column
    @media screen and (min-width: 650px)
        flex-direction: row
        justify-content: space-between
        align-items: center;

.projects__projects
    display: grid
    gap: 10px
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr))
</style>

