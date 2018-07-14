<template>
    <div id="connect" class="connect utility-wrapper">
        <h3 class="section-title connect__title">Connect</h3>
        <div class="connect__content">
            <p>Thank you for visiting my portfolio.<br/>This was written in Vue.</p>
            <p>Contact me at <a class="email-link" href="mailto:alex.avilx@gmail.com">alex.avilx@gmail.com</a>.</p>
        </div>
        <div class="connect__icons">
            <a href="https://github.com/alex-avila" target="_blank">
                <span class="icon github"></span>
            </a>
            <a href="https://dribbble.com/alex-avila" target="_blank">
                <span class="icon dribbble"></span>
            </a>
            <a href="https://www.linkedin.com/in/alex-avilx/" target="_blank">
                <span class="icon linkedin"></span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: "Connect"
};
</script>

<style lang="scss" scoped>
.email-link {
    font-weight: 600;
    color: #256df7;
    background: #256ff71b;
    border-radius: 5px;
    padding: 0.2em 0.4em;
    transition: all 0.1s;
}

.email-link:hover {
    background: #256ff73b;
}

.connect {
  padding-top: 3em;
  padding-bottom: 3em;
  line-height: 2;
  font-weight: 500;
}

.connect__title {
  line-height: 1.618;
}

.connect__content {
  text-align: center;
  padding: 1.618em 0 1.618em;
}

.connect__content p:first-child {
  padding: 0.618em;
}

.connect__icons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3em 0;
  max-width: 500px;
  margin: auto;
}

.github {
  background: url(../assets/github.svg);
}

.dribbble {
  background: url(../assets/dribbble.svg);
}

.linkedin {
  background: url(../assets/linkedin.svg);
}

.icon {
  display: block;
  width: 45px;
  height: 45px;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}

@media screen and (min-width: 650px) {
  .connect__content {
    font-size: 21px;
  }
}
</style>
