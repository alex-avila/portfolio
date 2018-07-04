Vue.component('intro', {
    template: `
        <div class="intro utility-wrapper">
            <div class="intro__background"></div>
            <div class="intro__nav">
                <span>Alex Avila</span>
                <span>Menu</span>
            </div>
            <div class="intro__headline">
                <h1>I'm a full stack developer with an affinity for design.</h1>
            </div>
            <div class="intro__skills">
                <h3>Main Skills</h3>
                <p>React, Redux, ES6, MongoDB, Express, Node JS, Vue, React Native</p>
            </div>
        </div>
    `
})

Vue.component('projects', {
    template: `
        <div class="utility-wrapper">
            <h3>Projects</h3>
        </div>
    `
})

new Vue({
    el: '#app'
})