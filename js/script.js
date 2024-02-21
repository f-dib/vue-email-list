// const creatApp = Vue.creatApp;
// stessa cosa di scrivere: -->
const { createApp } = Vue

createApp({
    data() {
        return {

            mails: [],

        }
    },
    mounted() {

        for(let i = 0; i < 10; i++) {
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
    
            // ora salvo la mail nei miei data nell'oggetto mail
            this.mails.push(result.data.response)

        });
        }

    }
}).mount('#app');