// const creatApp = Vue.creatApp;
// stessa cosa di scrivere: -->
const { createApp } = Vue

createApp({
    data() {
        return {

            mails: [],

            // count: 0,
        }
    },
    mounted() {


        for(let i = 0; i < 10; i++) {
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
    
            // ora salvo la mail nei miei data nell'oggetto mail
            this.mails.push(result.data.response)

        });
        }


// TENTATIVI INUTILI

        //     while (this.count < 3) {
        //     // for (let i = 0; i < 10; i++) {
        //         setTimeout(() => {

        //             console.log("ciao")
        //         axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
        
        //         let risultato = result.data.response;
        //         let risultatostr = String(risultato)

        //         console.log(risultatostr)
        //         if (risultatostr.includes("fede")) {
        //             console.log("*************");
        //             console.log(risultatostr)
        //             this.mails.push(risultatostr)
        //             this.count++
        //         }
        //         // ora salvo la mail nei miei data nell'oggetto mail
        //     //  i = this.count;
        //     //  console.log(i)

        //    });
            

        //     }, 1000)

    // }
    }
}).mount('#app');