let app = new Vue ({
    el: '#app',
    data: {
        albumArray: [],
    },
    methods: {
        function(){
            axios
            .get('http://localhost:8888/php-ajax-dischi/')
            .then((outcome) => {
                this.albumArray = outcome.data
                console.log(outcome.data)
                console.log('ciaone')
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    },
})