<template>
    <div id="projects" class="utility-wrapper projects">
        <h3 class="section-title projects__title">Projects</h3>
        <div class="projects__projects">
            <Project
                :image="require('../assets/tic-tac-toe.jpg')"
                link="https://alex-avila.github.io/tic-tac-toe-world/#/"
                title="Tic Tac Toe World"
                description="A.I. that creates an unbeatable tic tac toe game. Displays weather information from an API."
            />
            <Project
                :image="require('../assets/memory-game.jpg')"
                link="https://alex-avila.github.io/memory-game/"
                title="RPG Memory Game"
                description="Simple game of concentration in React."
            />
        </div>
    </div>
</template>

<script>
import Project from './Project.vue'

export default {
  name: "Projects",
  components: {
    Project
  }
};
</script>

<style lang="sass" scoped>
#projects
    padding-top: 3em;

.projects__projects
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
</style>

