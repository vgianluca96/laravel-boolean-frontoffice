<script>
import axios from 'axios';
export default {
    name: 'HomeView',
    data() {
        return {
            fullUrl: 'http://127.0.0.1:8000/api/cocktails',
            cocktails: []
        }
    },
    methods: {
        async getCocktails() {
            const response = await axios.get(this.fullUrl).then(resp => {
                return resp
            })
            this.cocktails = response.data.result
            console.log(this.cocktails);
        }
    },
    mounted() {
        this.getCocktails()
    }
}


</script>

<template>
    <div class="img_home text-white text-center">
        <h1 style="color: darkorange;" class="py-5">THE MASKED MARTINI</h1>
        <h2 class="">Dream cocktails just a click away</h2>
    </div>
    <div style="background-color: #1e0904;">
        <div class="container pt-5">
            <h2 class="mb-5 text-center text-white">OUR PROPOSAL</h2>
            <div class="row">
                <div class="col" v-for="cocktail in  cocktails ">
                    <div class="card mb-5 demo cocktail_card text-white" style="background-color: rgb(110, 73, 67); width: 18rem;">
                        <img :src="cocktail.strDrinkThumb" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ cocktail.strDrink }}</h5>
                            <p class="card-text mb-0"><strong>Category:</strong> {{ cocktail.strCategory }}</p>
                            <p class="card-text"><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
                            <a :href="'/show/' + cocktail.id" class="btn btn_card mt-3"><strong>Go to cocktail</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>