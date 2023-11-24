<script>
import axios from 'axios';
export default {
    name: 'ShowCocktail',
    data() {
        return {
            fullUrl: 'http://127.0.0.1:8000/api/cocktails/',
            cocktail: null
        }
    },
    methods: {
        async getCocktail(id) {
            const response = await axios.get(this.fullUrl + id).then(resp => {
                return resp
            })
            this.cocktail = response.data.result
            console.log(this.cocktail);
        }
    },
    mounted() {
        this.getCocktail(this.$route.params.id)
    }
}

</script>

<template>
    <div class="img_home text-white d-flex align-items-end justify-content-center">
        <h1 class="mb-5">DREAM COCKTAILS JUST A CLICK AWAY</h1>
    </div>
    <div style="background-color: #1e0904;">
        <div class="container p-5" v-if="cocktail">
            <h1 style="background-color: darkorange; color: #1e0904;" class="mb-5 text-center">{{ cocktail.strDrink }}</h1>
            <div style="background-color: rgb(110, 73, 67);" class="card mb-3 demo text-white">
                <div class="row g-0">
                    <div class="col-md-6">
                        <img :src="cocktail.strDrinkThumb" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-6 d-flex align-items-center">
                        <div class="card-body">
                            <h5 class="card-title">This is our {{ cocktail.strDrink }}</h5>
                            <p style="color: darkorange;" class="card-text"><span v-if="!cocktail.strAlcoholic">not </span>alcholic
                            </p>
                            <p class="card-text"><strong>Category: </strong>{{ cocktail.strCategory }}</p>
                            <p class="card-text"><strong>Served on: </strong>{{ cocktail.strGlass }}</p>
                            <h4>How to prepare it</h4>
                            <p><strong>Ingredients:</strong></p>
                            <ul>
                                <li v-if="cocktail.strIngredient1">{{ cocktail.strIngredient1 }} ( {{ cocktail.strMeasure1
                                }})
                                </li>
                                <li v-if="cocktail.strIngredient2">{{ cocktail.strIngredient2 }} ( {{ cocktail.strMeasure2
                                }})
                                </li>
                                <li v-if="cocktail.strIngredient3">{{ cocktail.strIngredient3 }} ( {{ cocktail.strMeasure3
                                }})
                                </li>
                                <li v-if="cocktail.strIngredient4">{{ cocktail.strIngredient4 }} ( {{ cocktail.strMeasure4
                                }})
                                </li>
                                <li v-if="cocktail.strIngredient5">{{ cocktail.strIngredient5 }} ( {{ cocktail.strMeasure5
                                }})
                                </li>
                                <li v-if="cocktail.strIngredient6">{{ cocktail.strIngredient6 }} ( {{ cocktail.strMeasure6
                                }})
                                </li>
                            </ul>
                            <p class="mb-0"><strong>Preparation:</strong></p>
                            <p>{{ cocktail.strInstructions }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style></style>