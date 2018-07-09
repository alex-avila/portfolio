<template>
    <div class="projects utility-wrapper">
        <h3 class="section-title projects__title">Projects</h3>
        <Project
            :image="require('../assets/tic-tac-toe.jpg')"
            link="https://alex-avila.github.io/tic-tac-toe-world/#/"
            title="Tic Tac Toe World"
            description="Features artificial intelligence to create an unbeatable tic tac toe game. Displays weather information in two graphs from the dark sky API"
        />
        <Project
            :image="require('../assets/memory-game.jpg')"
            link="https://alex-avila.github.io/memory-game/"
            title="RPG Memory Game"
            description="Simple game of concentration in React."
        />
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
