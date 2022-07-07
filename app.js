const app = Vue.createApp(
    {
        data() {
            return {
                firstName: 'Gene',
                lastName: 'Evans',
                email: 'gene.evans@example.com',
                gender: 'male',
                picture: 'https://randomuser.me/api/portraits/men/85.jpg',
            }
        },
        methods: {
            async getUser() {
                // set api 
                const res = await fetch('https://randomuser.me/api')
                // Get json data
                const { results } = await res.json()
                //Test it in console
                console.log(results)
                //First object in array
                this.firstName = results[0].name.first
                this.lastName = results[0].name.last
                this.email = results[0].email
                this.gender = results[0].gender
                this.picture = results[0].picture.large
            },
        },
    }
)

app.mount('#app');