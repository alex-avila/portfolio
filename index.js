new Vue({
    el: '#hello',
    data: {
        display: 'Hello'
    },
    methods: {
        changeTitle: function(e) {
            this.display = e.target.value
        }
    }
})