Vue.component('intro', {
    template: `
        <div class="intro utility-wrapper">
            <div class="intro__background"></div>
            <div class="intro__nav">
                <span class="intro__nav__logo">Alex Avila</span>
                <span class="intro__nav__menu"></span>
            </div>
            <div class="intro__headline">
                <span>I'm a full stack developer with an affinity for design.</span>
            </div>
            <div class="intro__skills">
                <h4>Main Skills</h4>
                <p>React, Redux, ES6, MongoDB, Express, Node JS, Vue, React Native</p>
            </div>
            <div class="intro__scroll-btn"></div>
        </div>
    `
})

Vue.component('projects', {
    template: `
        <div class="projects utility-wrapper">
            <h3 class="section-title projects__title">Projects</h3>
        </div>
    `
})

Vue.component('connect', {
    template: `
        <div class="connect utility-wrapper">
            <h3 class="section-title connect__title">Connect</h3>
            <div class="connect__content">
                <p>Thank you for visiting my portfolio.</p>
                <p>You may contact me to discuss career opportunities (or anything really) at alex.avilx@gmail.com</p>
            </div>
            <div class="connect__icons">
                <span class="icon github"></span>
                <span class="icon dribbble"></span>
                <span class="icon linkedin"></span>
            </div>
        </div>
    `
})

Vue.component('vfooter', {
    template: `
        <div class="footer">Copyright &copy; 2018 blahblahblah</div>
    `
})

new Vue({
    el: '#app'
})