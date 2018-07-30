<template>
  <div 
    id="connect" 
    class="connect utility-wrapper">
    <h3 class="section-title connect__title">Connect</h3>
    <div class="connect__content">
      <p>Thank you for visiting my portfolio.<br>This was written in Vue.</p>
      <p>Contact me at <a 
        class="email-link" 
        href="mailto:alex.avilx@gmail.com">alex.avilX@gmail.com</a>.</p>
    </div>
    <div class="connect__icons">
      <a 
        href="https://github.com/alex-avila" 
        target="_blank"
        rel="noreferrer"
        style="font-size: 0"
      >
        GitHub
        <span class="icon github"/>
      </a>
      <a 
        href="https://dribbble.com/alex-avila" 
        target="_blank"
        rel="noreferrer"
        style="font-size: 0"
      >
        Dribble
        <span class="icon dribbble"/>
      </a>
      <a 
        href="https://www.linkedin.com/in/alex-avilx/" 
        target="_blank"
        rel="noreferrer"
        style="font-size: 0"
      >
        LinkedIn
        <span class="icon linkedin"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Connect'
}
</script>
