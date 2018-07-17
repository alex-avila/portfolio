<template>
    <div id="projects" class="utility-wrapper projects">
        <div class="projects__title-and-toggle">
            <h3 class="section-title projects__title">Projects</h3>
            <ProjectsToggle :selectOption="selectOption" :optionSelected="optionSelected"/>
        </div>
        <div class="projects__projects" :class="{projects__gallery: optionSelected === 1}">
          <template v-if="toggleOptions[optionSelected] === 'development'">
            <Project
                :mode="toggleOptions[optionSelected]"
                v-for="project in projects"
                :key="project.title"
                :isModeSmall="isModeSmall"
                :image="project.image"
                :link="project.link"
                :title="project.title"
                :description="project.description"
            />
          </template>
          <template v-else>
            <Project
                :mode="toggleOptions[optionSelected]"
                v-for="project in uxGallery"
                :key="project.title"
                :isModeSmall="isModeSmall"
                :image="project.image"
                :link="project.link"
                :title="project.title"
            />
          </template>
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
      toggleOptions: ["development", "ux-design"],
      optionSelected: 0,
      projects: [
        {
          image: require("../assets/projects/re-act-arcade.jpg"),
          link: "https://re-act-arcade.herokuapp.com/",
          title: "(re)act arcade",
          description:
            "Arcade group project. I contributed on the backend, frontend, UI, and the database structure."
        },
        {
          image: require("../assets/projects/wario-srs.jpg"),
          link: "https://wario-srs.herokuapp.com/",
          title: "Wario SRS",
          description:
            "Simple personal flashcard app that uses the SuperMemo spaced repetition algorithm. (Work in progress)."
        },
        {
          image: require("../assets/projects/tic-tac-toe.jpg"),
          link: "https://alex-avila.github.io/tic-tac-toe-world/#/",
          title: "Tic Tac Toe World",
          description:
            "A.I. that creates an unbeatable tic tac toe game. Displays weather data from an API."
        },
        {
          image: require("../assets/projects/memory-game.jpg"),
          link: "https://alex-avila.github.io/memory-game/",
          title: "RPG Memory Game",
          description: "Simple game of concentration in React."
        }
      ],
      uxGallery: [
        {
          image: require("../assets/ux-gallery/fire-icon.png"),
          title: "Pixel Art Fire Icon",
          link: "https://dribbble.com/shots/4820022-Pixel-Art-Fire-App-Icon"
        },
        {
          image: require("../assets/ux-gallery/weather-ui.png"),
          title: "Weather UI",
          link: "https://dribbble.com/shots/4432985-Weather-Daily-UI-37"
        },
        {
          image: require("../assets/ux-gallery/calendar.png"),
          title: "Calendar App",
          link: "https://dribbble.com/shots/4838372-Calendar-Daily-UI-38"
        },
        {
          image: require("../assets/ux-gallery/contact-form.png"),
          title: "Contact Form",
          link: "https://dribbble.com/shots/4370917-Daily-UI-28-Contact-Us"
        },
        {
          image: require("../assets/ux-gallery/boarding-pass.png"),
          title: "Boarding Pass",
          link: "https://dribbble.com/shots/4352097-Daily-UI-24-Boarding-Pass"
        },
        {
          image: require("../assets/ux-gallery/email-receipt.png"),
          title: "Email Receipt",
          link: "https://dribbble.com/shots/4304989-Daily-UI-017-Email-Receipt"
        },
        {
          image: require("../assets/ux-gallery/blog-post.png"),
          title: "Blog Post",
          link: "https://dribbble.com/shots/4418337-Blog-Post-Daily-UI-35"
        },
        {
          image: require("../assets/ux-gallery/location-tracker.png"),
          title: "Fitness Location Tracker",
          link:
            "https://dribbble.com/shots/4321930-Daily-UI-20-Location-Tracker"
        },
        {
          image: require("../assets/ux-gallery/crowdfunding-campaign.png"),
          title: "Crowdfunding Campaign",
          link:
            "https://dribbble.com/shots/4395004-Daily-UI-32-Crowdfunding-Campaign"
        },
        {
          image: require("../assets/ux-gallery/file-upload.png"),
          title: "File Upload",
          link: "https://dribbble.com/shots/4387014-Daily-UI-31-File-Upload"
        },
        {
          image: require("../assets/ux-gallery/car-interface.png"),
          title: "Simple Car Interface",
          link: "https://dribbble.com/shots/4418332-Car-Interface-Daily-UI-34"
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
