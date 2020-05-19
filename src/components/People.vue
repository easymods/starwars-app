<template>
    <div class="container">
        <div class="row">
            <div class="col-md-5">
            <ul class="list-group" v-for="hero in people" :key="hero.id">
                <li class="list-group-item mb-1" @click="peopleData(hero)">{{hero.name}}</li>
            </ul>
        </div>

        <div class="col-md-7">
            <div class="card mb-3" v-if="selectedHero">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img :src="img" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{selectedHero.name}}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Birth Year: {{selectedHero.birth_year}}</li>
                            <li class="list-group-item">Gender: {{selectedHero.gender}}</li>
                            <li class="list-group-item">Height: {{selectedHero.height}}</li>
                            <li class="list-group-item">Skin Color: {{selectedHero.skin_color}}</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h5>Click the link to see more information</h5>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {SwapiService} from '@/api/api.js'
const swpService = new SwapiService()
    export default {
        data() {
            return {
                people: null,
                selectedHero: null,
                img: null,
            }
        },
        methods: {
            getPeople() {
                swpService
                    .getAllPeople()
                    .then((data) => {
                        this.people = data;
                    })
            },
            peopleData(hero) {
                const idRegExp = /\/([0-9]*)\/$/;
                const id = hero.url.match(idRegExp)[1];
                const imgURL = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
                this.img = imgURL;
                this.selectedHero = hero;
            }
        },
        mounted() {
            this.getPeople();
        }
    }
</script>

<style>
.list-group-item {
    cursor: pointer;
}
</style>
